import performDatabaseOperation from "./performDatabaseOperation";
import formatMonth from "./formatMonth";

function exercisesNotFound() {
    return { data: null, err: "Nu au fost găsite exerciții de acest tip." };
}

function exerciseNotFound() {
    return { data: null, err: "Nu s-a găsit exercițiu care să aibă id-ul acesta." };
}

export function getMultipleExercisesData({ chapter, subchapterIndex, fieldsToExclude = {} }) {
    if (!chapter || !subchapterIndex) return exercisesNotFound();

    return performDatabaseOperation(async (db, closeConnection) => {
        const exercisesDataArray = await db
            .collection("exercises")
            .find({ category: [chapter, subchapterIndex] })
            .project(fieldsToExclude)
            .toArray();

        closeConnection();

        if (!exercisesDataArray.length) return exercisesNotFound();
        for (const exerciseData of exercisesDataArray)
            exerciseData.datePublished = formatDate(exerciseData.datePublished);

        return { data: exercisesDataArray, err: null };
    });
}

export function getSingleExerciseData({ exerciseId, fieldsToExclude = {} }) {
    if (!exerciseId) return exerciseNotFound();

    return performDatabaseOperation(async (db, closeConnection) => {
        const exerciseData = await db
            .collection("exercises")
            .findOne({ exerciseId }, { projection: fieldsToExclude });
        closeConnection();

        if (!exerciseData) return exerciseNotFound();

        exerciseData.datePublished = formatDate(exerciseData.datePublished);

        return { data: exerciseData, err: null };
    });
}

function formatDate(badDate) {
    const goodDate = new Date(badDate);
    return `${goodDate.getDate()} ${formatMonth(
        goodDate.getMonth() + 1
    )} ${goodDate.getFullYear()}`;
}
