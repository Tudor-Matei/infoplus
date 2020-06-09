import { getTokenInfo } from "../../utils/manageTokens";
import { serialize } from "cookie";
import connectToDatabase from "../../utils/connectToDatabase";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    const { data } = await getTokenInfo(req.headers["cookie"]);

    if (data) {
        let closeConnection;
        try {
            const { db, closeConnectionHandler } = await connectToDatabase();
            closeConnection = closeConnectionHandler;
            const users = db.collection("users");
            const foundUser = await users.findOne({ _id: ObjectId(data.id) });

            await users.updateOne({ _id: foundUser._id }, { $set: { refreshToken: "" } });

            removeCookies(res);
            closeConnection();
        } catch (e) {
            console.error(e);
            if (closeConnection) closeConnection();
            removeCookies(res);
            return res.status(500).json({ ok: false });
        }
    }

    removeCookies(res);
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
