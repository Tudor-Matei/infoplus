import performDatabaseOperation from "../../utils/performDatabaseOperation";
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

    const { err, status = 500 } = await performDatabaseOperation(async (db, closeConnection) => {
        validatedUserData.password = await bcrypt.hash(validatedUserData.password, SALT_ROUNDS);
        function closeConnectionAndExitWithError(err, status) {
            closeConnection();
            return { err, status };
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

        closeConnection();
        return { err: null, status: 200 };
    });

    if (err) return res.status(status).json({ ok: false, error: err });
    return res.status(200).json({ ok: true });
};
