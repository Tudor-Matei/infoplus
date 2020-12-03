import { getMultipleExercisesData } from "../../../utils/getExerciseData";
import strippedDownResponses from "../../../utils/strippedDownResponses";

export default async (req, res) => {
  if (!req.body || !req.body.chapter || !req.body.chapterIndex || !req.body.subchapterIndex)
    return res.status(404).json({ data: null, err: "Nu au fost găsite exerciții de acest tip." });

  const { data, err } = await getMultipleExercisesData({
    lookAfter: { category: [req.body.chapter, `${req.body.chapterIndex}`], subcategory: req.body.subchapterIndex },
    fieldsToExclude: strippedDownResponses.exercisesList,
  });

  if (err) return res.status(err !== "Nu au fost găsite exerciții de acest tip." ? 500 : 404).json({ data: null, err });

  return res.status(200).json({ data, err: null });
};
