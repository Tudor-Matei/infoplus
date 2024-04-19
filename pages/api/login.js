import bcrypt from "bcrypt";
import { parse, serialize } from "cookie";
import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import { loginBoundaries } from "../../utils/lengthBoundariesForFields";
import performDatabaseOperation from "../../utils/performDatabaseOperation";
import validateUserData from "../../utils/validateUserData";

export default async (req, res) => {
  if (!req.body) return res.status(400).end();
  const parsedBody = JSON.parse(req.body);
  const { error, validatedUserData } = validateUserData(parsedBody, {
    lengthBoundariesForEachField: loginBoundaries,
    hasEmail: isEmail(parsedBody.username),
  });

  if (error) return res.status(403).json({ ok: false, error });

  // in cazul in care utilizatorul face ceva si sterge el cookie-ul cu accessToken si face
  // authenticated: false, chiar daca este autentificat deja, pe siturile cu SSG
  const cookies = req.headers["cookie"] && parse(req.headers["cookie"]);
  if (cookies && (cookies["_refreshToken"] || cookies["_accessToken"]))
    return res.status(403).json({
      ok: false,
      error: "Ce incerci sa faci? >->. Te rog nu mai umbla la cookie-uri.",
    });

  const { err, status = 500 } = await performDatabaseOperation(async (db) => {
    const users = db.collection("users");
    const foundUser = await users.findOne({
      $or: [{ username: validatedUserData.username }, { email: validatedUserData.username }],
    });

    function exitWithError(err, status) {
      return { err, status };
    }

    if (!foundUser)
      return exitWithError("Numele de utilizator sau e-mailul pe care l-ați introdus nu este corect.", 403);

    const passwordsMatch = await bcrypt.compare(validatedUserData.password, foundUser.password);
    if (!passwordsMatch) return exitWithError("Parola pe care ați introdus-o nu este corectă.", 403);

    if (foundUser.refreshToken) {
      await users.updateOne({ _id: foundUser._id }, { $set: { refreshToken: "" } });
      removeCookies(res);
      return exitWithError("Cineva este deja logat în acest cont. Acel cineva a fost delogat. Încearcă iar.", 403);
    }
    const { accessToken, refreshToken } = prepareTokens(foundUser);
    if (!accessToken || !refreshToken) return exitWithError("Nu v-am gasit in baza de date.", 401);

    await users.updateOne({ _id: foundUser._id }, { $set: { refreshToken } });

    res.setHeader("Set-Cookie", [
      serialize("_accessToken", accessToken, {
        sameSite: true,
        path: "/",
      }),
      serialize("_refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: true,
        path: "/",
      }),
    ]);

    return { err: null, status: 200 };
  });

  if (err) return res.status(status).json({ ok: false, error: err });

  return res.status(200).json({ ok: true });
};

function removeCookies(res) {
  res.setHeader("Set-Cookie", [
    serialize("_accessToken", "", {
      maxAge: 0,
      sameSite: true,
      httpOnly: true,
      path: "/",
    }),
    serialize("_refreshToken", "", {
      maxAge: 0,
      sameSite: true,
      path: "/",
    }),
  ]);
}

function prepareTokens(foundUser) {
  const foundUserId = foundUser._id.toHexString();
  return {
    accessToken: jwt.sign(
      {
        id: foundUserId,
        name: foundUser.name,
        surname: foundUser.surname,
        username: foundUser.username,
        profession: foundUser.profession,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    ),
    refreshToken: jwt.sign(
      {
        id: foundUserId,
        username: foundUser.username,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    ),
  };
}
