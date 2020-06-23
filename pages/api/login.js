import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";
import validateUserData from "../../utils/validateUserData";
import performDatabaseOperation from "../../utils/performDatabaseOperation";
import { serialize, parse } from "cookie";

export default async (req, res) => {
    if (!req.body) return res.status(204).end();
    const { error, validatedUserData } = validateUserData(req.body, {
        minimumLengthForEachField: {
            username: 5,
            password: 8,
        },
        hasEmail: isEmail(JSON.parse(req.body).username),
    });

    if (error) return res.status(403).json({ ok: false, error });

    // in cazul in care utilizatorul face o smecherie si sterge el cookie-ul cu accessToken si face
    // authenticated: false, chiar daca este autentificat deja, pe siturile cu SSG
    const cookies = req.headers["cookie"] && parse(req.headers["cookie"]);
    if (cookies && (cookies["_refreshToken"] || cookies["_accessToken"]))
        return res.status(403).json({
            ok: false,
            error: "Ce incerci sa faci? >->. Te rog nu mai umbla la cookie-uri, ms.",
        });

    const { err, status = 500 } = await performDatabaseOperation(async (db, closeConnection) => {
        const users = db.collection("users");
        const foundUser = await users.findOne({
            $or: [{ username: validatedUserData.username }, { email: validatedUserData.username }],
        });
        function closeConnectionAndExitWithError(err, status) {
            closeConnection();
            return { data: null, err, status };
        }

        if (!foundUser)
            return closeConnectionAndExitWithError(
                "Numele de utilizator sau e-mailul pe care l-ați introdus nu este corect.",
                403
            );

        const passwordsMatch = await bcrypt.compare(validatedUserData.password, foundUser.password);
        if (!passwordsMatch) {
            closeConnection();
            return closeConnectionAndExitWithError(
                "Parola pe care ați introdus-o nu este corectă.",
                403
            );
        }

        const { accessToken, refreshToken } = prepareTokens(foundUser);
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

        closeConnection();
        return { data: null, err: null, status: 200 };
    });

    if (err) return res.status(status).json({ ok: false, err });

    return res.status(200).json({ ok: true });
};

function prepareTokens(foundUser) {
    const accessToken = jwt.sign(
        {
            id: foundUser._id.toHexString(),
            name: foundUser.name,
            surname: foundUser.surname,
            username: foundUser.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15s" }
    );

    const refreshToken = jwt.sign(
        {
            id: foundUser._id.toHexString(),
            username: foundUser.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "7d" }
    );
    return { accessToken, refreshToken };
}
