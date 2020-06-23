import { getTokenInfo } from "../../utils/manageTokens";
import { serialize } from "cookie";
import performDatabaseOperation from "../../utils/performDatabaseOperation";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    const { data, err } = await getTokenInfo(req.headers["cookie"], true);

    if (data) {
        const { err: errDb } = await performDatabaseOperation(async (db, closeConnection) => {
            const users = db.collection("users");
            const foundUser = await users.findOne({ _id: ObjectId(data.id) });

            await users.updateOne({ _id: foundUser._id }, { $set: { refreshToken: "" } });
            removeCookies(res);
            closeConnection();
            return { err: null };
        });

        if (errDb) {
            removeCookies(res);
            return res.status(500).json({ ok: false, err: errDb });
        }

        return res.status(200).json({ ok: true });
    }

    return res.status(500).json({ ok: false, err });
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
