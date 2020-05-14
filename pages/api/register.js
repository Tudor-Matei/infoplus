import connectToDatabase from "../../utils/connectToDatabase";
import validateUserData from "../../utils/validateUserData";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export default async (req, res) => {
    if (!req.body) return res.status(204).end();
    const { error, validatedUserData } = validateUserData(req.body, {
        minimumLengthForEachField: {
            name: 3,
            surname: 3,
            username: 5,
            password: 8,
        },
        hasEmail: true,
    });
    if (error) return res.status(500).json({ ok: false, error });
    validatedUserData.refreshToken = "";

    try {
        validatedUserData.password = await bcrypt.hash(validatedUserData.password, SALT_ROUNDS);
        const { db, closeConnection } = await connectToDatabase();
        const users = db.collection("users");

        users.insertOne(validatedUserData, (error) => {
            if (error) {
                console.error(error);
                closeConnection();
                return res.status(500).json({ ok: false });
            }

            closeConnection();
            return res.status(200).json({ ok: true });
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ ok: false });
    }
};
