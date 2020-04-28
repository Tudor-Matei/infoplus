import connectToDatabaseThen from "../../utils/connectToDatabase";
import checkFieldsValidity from "../../utils/checkFieldsValidity";
import escape from "validator/lib/escape";

export default async (req, res) => {
    req.body = escapeRegisterData(JSON.parse(req.body));
    if (
        checkFieldsValidity({
            fields: req.body,
            minimumLengthForEachField: {
                name: 3,
                surname: 3,
                username: 5,
                password: 8,
            },
            hasEmail: true,
        }) !== false
    )
        return res.status(403).json({ ok: false });

    await connectToDatabaseThen((db) => {
        const users = db.collection("users");

        users.insertOne(req.body, (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ ok: false });
            }
        });
    });

    res.status(200).json({ ok: true });
};

function escapeRegisterData(userData) {
    for (const [key, value] of Object.entries(userData))
        userData[key] = escape(value);

    return userData;
}
