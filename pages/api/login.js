import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";
import validateUserData from "../../utils/validateUserData";
import connectToDatabase from "../../utils/connectToDatabase";
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

    let closeConnection;
    try {
        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;
        function closeConnectionAndExitWithError(error = "", status) {
            closeConnection();
            return res.status(status).json({ ok: false, error });
        }

        const users = db.collection("users");
        const foundUser = await users.findOne({
            $or: [{ username: validatedUserData.username }, { email: validatedUserData.email }],
        });

        if (!foundUser)
            return closeConnectionAndExitWithError(
                "Numele de utilizator sau e-mailul pe care l-ați introdus nu este corect.",
                403
            );

        const passwordsMatch = await bcrypt.compare(validatedUserData.password, foundUser.password);

        if (!passwordsMatch)
            return closeConnectionAndExitWithError(
                "Parola pe care ați introdus-o nu este corectă.",
                403
            );

        const accessToken = jwt.sign(
            {
                id: foundUser._id,
                name: foundUser.name,
                surname: foundUser.surname,
                username: foundUser.username,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        );

        const refreshToken = jwt.sign(
            {
                id: foundUser._id,
                username: foundUser.username,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "7d" }
        );

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
        return res.status(200).json({ ok: true });
    } catch (e) {
        if (closeConnection) closeConnection();

        console.error(e);
        return res.status(500).json({ ok: false });
    }
};
