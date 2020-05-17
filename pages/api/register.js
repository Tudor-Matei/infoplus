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
    if (error) return res.status(403).json({ ok: false, error });
    validatedUserData.refreshToken = "";

    let closeConnection;
    try {
        validatedUserData.password = await bcrypt.hash(validatedUserData.password, SALT_ROUNDS);

        const { db, closeConnectionHandler } = await connectToDatabase();
        closeConnection = closeConnectionHandler;
        await db.collection("users").insertOne(validatedUserData);

        res.status(200).json({ ok: true });
        return closeConnection();
    } catch (e) {
        if (closeConnection) closeConection();
        console.error(e);
        return res.status(500).json({ ok: false });
    }
};
