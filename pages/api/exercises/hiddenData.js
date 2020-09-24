import { getHiddenExerciseData } from "../../../utils/getExerciseData";

function exitWithError(err, status, res) {
    return res.status(status).json({ data: null, err });
}

export default async (req, res) => {
    if (!req.body) return exitWithError("Nu au fost găsite date pentru acest exercițiu.", 404, res);

    const { data, err } = await getHiddenExerciseData({
        exerciseId: req.body.exerciseId,
        fieldsToExclude: req.body.fieldsToExclude || {},
    });

    if (err) return exitWithError(err, 404, res);

    return res.status(200).json({ data, err: null });
};
