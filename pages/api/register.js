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
        function closeConnectionAndExitWithError(error = "", status) {
            closeConnection();
            return res.status(status).json({ ok: false, error });
        }

        const users = db.collection("users");
        const existingUser = await users.findOne({
            $or: [{ username: validatedUserData.username }, { email: validatedUserData.email }],
        });

        if (!existingUser) await users.insertOne(validatedUserData);
        else if (existingUser.username === validatedUserData.username)
            return closeConnectionAndExitWithError(
                "Există deja o persoană cu același nume de utilizator.",
                403
            );
        else if (existingUser.email === validatedUserData.email)
            return closeConnectionAndExitWithError(
                "Există deja o persoană cu aceeași adresă de e-mail.",
                403
            );

        res.status(200).json({ ok: true });
        return closeConnection();
    } catch (e) {
        if (closeConnection) closeConection();
        console.error(e);
        return res.status(500).json({ ok: false });
    }
};
