import jwt from "jsonwebtoken";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";
import validateUserData from "../../utils/validateUserData";
import connectToDatabase from "../../utils/connectToDatabase";
import { serialize } from "cookie";

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

    let closeConnection;
    try {
        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;
        const users = db.collection("users");

        const foundUser = await users.findOne({
            $or: [{ username: validatedUserData.username }, { email: validatedUserData.email }],
        });

        if (!foundUser)
            res.status(403).json({
                ok: false,
                error: "Numele de utilizator sau e-mailul pe care l-ați introdus nu este corect.",
            });
        else {
            const passwordsMatch = await bcrypt.compare(
                validatedUserData.password,
                foundUser.password
            );
            if (!passwordsMatch)
                res.status(403).json({
                    ok: false,
                    error: "Parola pe care ați introdus-o nu este corectă.",
                });
            else {
                const accessToken = jwt.sign(
                    {
                        id: foundUser._id,
                        name: foundUser.name,
                        surname: foundUser.surname,
                        username: foundUser.username,
                    },
                    process.env.ACCESS_TOKEN_SECRET,
                    { expiresIn: "30s" }
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
                        httpOnly: true,
                        sameSite: true,
                        path: "/",
                    }),
                    serialize("_refreshToken", refreshToken, {
                        httpOnly: true,
                        sameSite: true,
                        path: "/",
                    }),
                ]);
                res.status(200).json({ ok: true });
            }
        }

        return closeConnection();
    } catch (e) {
        if (closeConnection) closeConnection();

        console.error(e);
        return res.status(500).json({ ok: false });
    }
};
