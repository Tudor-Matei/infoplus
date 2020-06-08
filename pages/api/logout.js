import { getTokenInfo } from "../../utils/manageTokens";
import { serialize } from "cookie";
import connectToDatabase from "../../utils/connectToDatabase";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    const { data, err } = await getTokenInfo(req.headers["cookie"]);

    if (err) {
        //removeCookies(res);
        return res
            .status(403)
            .json({ ok: false, err: err === "tokinv" ? "Nu sunteți autentificat." : err });
    }

    if (data) {
        let closeConnection;
        try {
            const { db, closeConnectionHandler } = await connectToDatabase();
            closeConnection = closeConnectionHandler;
            const users = db.collection("users");
            const foundUser = await users.findOne({ _id: ObjectId(data.id) });
            console.log(foundUser, data, data.id.toString());
            if (!foundUser) {
                // removeCookies(res);
                return res.status(403).json({ ok: false, err: "Nu sunteți autentificat." });
            }
            await users.updateOne({ _id: foundUser._id }, { $set: { refreshToken: "" } });

            closeConnection();
        } catch (e) {
            console.error(e);
            if (closeConnection) closeConnection();
            return res.status(500).json({ ok: false });
        }
    }

    console.log("Am ajuns jos de tot sa sterg cookie-urile.");

    removeCookies(res);
    return res.status(200).json({ ok: true });
};

function removeCookies(res) {
    res.setHeader("Set-Cookie", [
        serialize("_accessToken", "", {
            expires: 0,
            sameSite: true,
            httpOnly: true,
            path: "/",
        }),
        serialize("_refreshToken", "", {
            expires: 0,
            sameSite: true,
            path: "/",
        }),
    ]);
}
