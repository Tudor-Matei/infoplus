import isDataFromStepValid from "../../components/ComposeExercise/isDataFromStepValid";
import performDatabaseOperation from "../../utils/performDatabaseOperation";
import omitKey from "../../utils/omitKey";
import getAuthInfo from "../../utils/getAuthInfo";
const stepNames = ["generalData", "contentData", "inputData", "testsData"];

export default async (req, res) => {
    const { userData, err: userErr } = await getAuthInfo(req, res);
    if (userErr) return res.status(401).json({ ok: false, err: userErr });

    if (!req.body)
        return res.status(400).json({ ok: false, err: "Nu au fost prezente datele exercițiului." });

    for (const step in stepNames) {
        const errors = isDataFromStepValid(step + 1, req.body[stepNames[step]]);
        if (errors) return res.status(400).json({ ok: false, err: errors });
    }

    const { err: dbErr = null, status } = await performDatabaseOperation(async (db) => {
        const exercises = db.collection("exercises");
        const exercisesHidden = db.collection("exercises_hidden");
        const exerciseWithSameTitleFound = await exercises.findOne({
            title: req.body.generalData.title,
        });

        if (exerciseWithSameTitleFound)
            return { err: "Există deja un exercițiu cu același nume.", status: 400 };

        const { insertedId: exerciseId } = await exercises.insertOne(
            Object.assign(
                {
                    author: `${userData.name} ${userData.surname}`,
                    datePublished: new Date(),
                    sentSolutions: 0,
                },
                req.body.generalData,
                omitKey(["hint", "officialSolution"], req.body.contentData),
                req.body.inputData
            )
        );

        await exercisesHidden.insertOne({
            exerciseId,
            hint: req.body.contentData.hint,
            officialSolution: Buffer.from(req.body.contentData.officialSolution, "ascii").toString(
                "base64"
            ),
            tests: req.body.testsData,
        });

        return { err: null, status: 200 };
    });

    if (dbErr) return res.status(status).json({ ok: false, err: dbErr });

    return res.status(200).json({ ok: true, err: null });
};
