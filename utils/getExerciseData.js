import performDatabaseOperation from "./performDatabaseOperation";
import formatDate from "./formatDate";
import { ObjectId } from "mongodb";

function exercisesNotFound() {
    return { data: null, err: "Nu au fost găsite exerciții de acest tip." };
}

function exerciseNotFound() {
    return { data: null, err: "Nu s-a găsit acest tip de exercițiu." };
}

export function getMultipleExercisesData({ lookAfter = {}, fieldsToExclude = {} }) {
    return performDatabaseOperation(async (db) => {
        const exercisesDataArray = await db
            .collection("exercises")
            .find(lookAfter)
            .project(fieldsToExclude)
            .toArray();

        if (!exercisesDataArray.length) return exercisesNotFound();
        for (const exerciseData of exercisesDataArray)
            exerciseData.datePublished = formatDate(exerciseData.datePublished);

        return { data: exercisesDataArray, err: null };
    });
}

export function getSingleExerciseData({ title, fieldsToExclude = {} }) {
    if (!title) return exerciseNotFound();

    return performDatabaseOperation(async (db) => {
        const exerciseData = await db
            .collection("exercises")
            .findOne({ title }, { projection: fieldsToExclude });

        if (!exerciseData) return exerciseNotFound();

        exerciseData.datePublished = formatDate(exerciseData.datePublished);
        return { data: exerciseData, err: null };
    });
}

export function getHiddenExerciseData({ exerciseId, fieldsToExclude = {} }) {
    if (!exerciseId) return exerciseNotFound();
    return performDatabaseOperation(async (db) => {
        const exerciseData = await db
            .collection("exercises_hidden")
            .findOne({ exerciseId: ObjectId(exerciseId) }, { projection: fieldsToExclude });

        if (!exerciseData) return exerciseNotFound();

        return { data: exerciseData, err: null };
    });
}
