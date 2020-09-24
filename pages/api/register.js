import performDatabaseOperation from "../../utils/performDatabaseOperation";
import validateUserData from "../../utils/validateUserData";
import bcrypt from "bcrypt";
import { registerFields } from "../../utils/lengthBoundariesForFields";

const SALT_ROUNDS = 10;

export default async (req, res) => {
    if (!req.body) return res.status(400).end();
    const { error, validatedUserData } = validateUserData(JSON.parse(req.body), {
        lengthBoundariesForEachField: registerFields,
        hasEmail: true,
    });
    if (error) return res.status(403).json({ ok: false, error });
    validatedUserData.refreshToken = "";

    const { err, status = 500 } = await performDatabaseOperation(async (db) => {
        validatedUserData.password = await bcrypt.hash(validatedUserData.password, SALT_ROUNDS);
        function exitWith(err, status) {
            return { err, status };
        }

        const users = db.collection("users");
        const existingUser = await users.findOne({
            $or: [{ username: validatedUserData.username }, { email: validatedUserData.email }],
        });

        if (!existingUser) await users.insertOne(validatedUserData);
        else if (existingUser.username === validatedUserData.username)
            return exitWith("Există deja o persoană cu același nume de utilizator.", 403);
        else if (existingUser.email === validatedUserData.email)
            return exitWith("Există deja o persoană cu aceeași adresă de e-mail.", 403);

        return exitWith(null, 200);
    });

    if (err) return res.status(status).json({ ok: false, error: err });
    return res.status(200).json({ ok: true });
};
