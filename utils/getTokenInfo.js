import jwt from "jsonwebtoken";
import { parse } from "cookie";

import connectToDatabase from "../utils/connectToDatabase";
import { ObjectId } from "mongodb";

export default async function getTokenInfo(cookieHeader) {
    //err: 1 pentru neautentificat
    if (!cookieHeader) return { data: null, err: 1 };

    const tokens = parse(cookieHeader);
    if (!tokens["_accessToken"] || !tokens["_refreshToken"]) return { data: null, err: 1 };

    try {
        const decoded = jwt.verify(tokens["_accessToken"], process.env.ACCESS_TOKEN_SECRET);
        return { data: decoded };
    } catch {
        // in cazul in are accessToken-ul este invalid, functia `verify` va
        // arunca o eroare, iar astfel vom genera un nou accessToken
        const accessTokenData = await getNewAccessToken(tokens["_refreshToken"]);
        if (accessTokenData.err) return { data: null, err: accessTokenData.err };

        return {
            data: { ...accessTokenData.encodedData, newAccessToken: accessTokenData.accessToken },
        };
    }
}

async function getNewAccessToken(refreshToken) {
    let closeConnection;
    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;

        const foundUser = await db.collection("users").findOne({ _id: ObjectId(decoded.id) });

        if (foundUser.refreshToken !== refreshToken) {
            closeConnection();
            return { err: "Ați alterat cumva cookie-urile?" };
        }

        const userData = {
            id: JSON.stringify(foundUser._id),
            name: foundUser.name,
            surname: foundUser.surname,
            username: foundUser.username,
        };

        return {
            encodedData: userData,
            accessToken: jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1m" }),
        };
    } catch (err) {
        console.error(err);
        if (closeConnection) closeConnection();
        return { err: "A apărut o eroare internă. Vă rugăm să ne scuzați." };
    }
}
