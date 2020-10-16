import { ObjectId } from "mongodb";
import omitKey from "../../utils/omitKey";
import performDatabaseOperation from "../../utils/performDatabaseOperation";

export default async (req, res) => {
    if (!req.body) return res.status(400).json({ ok: false });

    const { err } = await performDatabaseOperation(async (db) => {
        const solutions = db.collection("solutions");
        const exercises = db.collection("exercises");

        req.body.exerciseId = ObjectId(req.body.exerciseId);
        await solutions.insertOne(omitKey(["accessToken"], req.body));
        await exercises.updateOne({ _id: req.body.exerciseId }, { $inc: { sentSolutions: 1 } });

        return { err: null };
    });

    if (err) return res.status(500).json({ ok: false });
    return res.status(200).json({ ok: true });
};
