import jwt from "jsonwebtoken";
import { parse } from "cookie";

import connectToDatabase from "./connectToDatabase";
import { ObjectId } from "mongodb";

export async function getTokenInfo(cookieHeader) {
    if (!cookieHeader) return { data: null, err: "Nu sunteți autentificat." };

    const tokens = parse(cookieHeader);
    if (!tokens["_accessToken"] || !tokens["_refreshToken"])
        return { data: null, err: "Nu sunteți autentificat." };

    try {
        const decoded = jwt.verify(tokens["_accessToken"], process.env.ACCESS_TOKEN_SECRET);
        return { data: decoded };
    } catch {
        return { data: null, err: "tokinv" };
    }
}

export async function getNewAccessToken(cookieHeader) {
    if (!cookieHeader) return { err: "Nu sunteți autentificat." };

    const tokens = parse(cookieHeader);
    if (!tokens["_refreshToken"]) return { err: "Nu sunteți autentificat." };
    const refreshToken = tokens["_refreshToken"];

    let closeConnection;
    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;
        console.log(decoded.id, ObjectId(decoded.id));

        // TODO: formateaza corect ObjectId, pentru ca
        //  "Error: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters"
        // si vezi de ce nu apare eroarea in alert uneori.

        const foundUser = await db.collection("users").findOne({ _id: ObjectId(decoded.id) });

        if (foundUser.refreshToken !== refreshToken) {
            closeConnection();
            return { err: "S-a întâmplat ceva ciudat. Vă rugăm să ne scuzați." };
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
    } catch (e) {
        console.error(e);
        if (closeConnection) closeConnection();
        return { err: "A apărut o eroare internă, vă rugăm să ne scuzați." };
    }
}
