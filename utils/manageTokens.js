import jwt from "jsonwebtoken";
import { parse } from "cookie";

import performDatabaseOperation from "./performDatabaseOperation";
import { ObjectId } from "mongodb";

function errorObject(err) {
    return { data: null, err };
}

export async function getTokenInfo(cookieHeader, needsRefreshToken = false) {
    if (!cookieHeader) return errorObject("Nu sunteți autentificat.");

    const tokens = parse(cookieHeader);
    if (!tokens["_accessToken"] || !tokens["_refreshToken"])
        return errorObject("Nu sunteți autentificat.");
    try {
        const decoded = !needsRefreshToken
            ? jwt.verify(tokens["_accessToken"], process.env.ACCESS_TOKEN_SECRET)
            : jwt.verify(tokens["_refreshToken"], process.env.REFRESH_TOKEN_SECRET);
        return { data: decoded };
    } catch {
        return errorObject("tokinv");
    }
}

export async function getNewAccessToken(cookieHeader) {
    if (!cookieHeader) return errorObject("Nu sunteți autentificat.");

    const tokens = parse(cookieHeader);
    if (!tokens["_refreshToken"]) return errorObject("Nu sunteți autentificat.");

    const refreshToken = tokens["_refreshToken"];

    const { data, err } = await performDatabaseOperation(async (db, closeConnection) => {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const foundUser = await db.collection("users").findOne({ _id: ObjectId(decoded.id) });
        closeConnection();

        if (foundUser.refreshToken !== refreshToken)
            return errorObject("S-a întâmplat ceva ciudat. Vă rugăm să ne scuzați.");

        const userData = {
            id: foundUser._id.toHexString(),
            name: foundUser.name,
            surname: foundUser.surname,
            username: foundUser.username,
        };

        return {
            data: {
                ...userData,
                accessToken: jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, {
                    expiresIn: "15s",
                }),
            },
            err: null,
        };
    });

    if (err) return errorObject(err);

    return data;
}
