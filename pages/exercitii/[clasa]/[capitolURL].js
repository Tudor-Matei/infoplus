import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Exercise from "../../../components/ExercisesList/Exercise";
import {
    exercisesGradeIX,
    exercisesGradeX,
    exercisesGradeXI,
} from "../../../components/utils/exercisesGradesData";
import performDatabaseOperation from "../../../utils/performDatabaseOperation";

import { useState, useContext } from "react";
import toReturnForExercisesList from "../../../utils/toReturnForExercisesList";
import { ShowAlertContext } from "../../_app";
import useComponentDidMount from "../../../components/_hooks/componentDidMount";
import formatMonth from "../../../utils/formatMonth";

function getChapterData(grade = "ix", capitolURL) {
    if (grade === "ix")
        return exercisesGradeIX.find(
            ({ capitolURL: capitolURLExercise }) => capitolURL === capitolURLExercise
        );
    else if (grade === "x")
        return exercisesGradeX.find(
            ({ capitolURL: capitolURLExercise }) => capitolURL === capitolURLExercise
        );
    else if (grade === "xi")
        return exercisesGradeXI.find(
            ({ capitolURL: capitolURLExercise }) => capitolURL === capitolURLExercise
        );
}

export async function getStaticPaths() {
    return {
        paths: exercisesGradeIX
            .map(({ grade, capitolURL }) => ({
                params: { clasa: grade, capitolURL },
            }))
            .concat(
                exercisesGradeX.map(({ grade, capitolURL }) => ({
                    params: { clasa: grade, capitolURL },
                }))
            )
            .concat(
                exercisesGradeXI.map(({ grade, capitolURL }) => ({
                    params: { clasa: grade, capitolURL },
                }))
            ),
        fallback: false,
    };
}

export async function getStaticProps({ params: { clasa, capitolURL } }) {
    const capitol = getChapterData(clasa, capitolURL);
    const { data, err } = await performDatabaseOperation(async (db, closeConnection) => {
        const exercisesData = await db
            .collection("exercises")
            .find({ category: ["elemente-de-baza", "0"] })
            .project(toReturnForExercisesList)
            .toArray();

        if (!exercisesData) {
            closeConnection();
            return { data: null, err: "Nu au fost găsite exerciții în această subcategorie..." };
        }
        closeConnection();
        // TODO: daca autentificat -> preia date sa vada daca a rezolvat problema

        for (const exerciseData of exercisesData) {
            const datePublished = new Date(exerciseData.datePublished);
            exerciseData.datePublished = `${datePublished.getDate()} ${formatMonth(
                datePublished.getMonth() + 1
            )} ${datePublished.getFullYear()}`;
        }
        return {
            data: exercisesData,
            err: null,
        };
    });

    return {
        props: {
            clasa,
            capitol: capitol.title,
            subchapters: capitol.subchapters,
            exercises: { data, err },
        },
    };
}

export default function ExercisesList({ clasa, capitol, subchapters, exercises: { data, err } }) {
    const [subchapter, setSubchapter] = useState(subchapters[0]);
    const modifyAlert = useContext(ShowAlertContext);
    useComponentDidMount(() => {
        if (err)
            return modifyAlert({
                isVisible: true,
                props: {
                    type: 0,
                    children: err,
                },
            });
    });

    return (
        <>
            {clasa && (
                <HeaderMainInfo
                    grade={clasa}
                    subchapters={subchapters}
                    setSubchapter={setSubchapter}
                />
            )}
            <CurrentCategoryTitle
                category={capitol ? capitol : "Se incarcă..."}
                subcategory={subchapter}
            />
            {clasa && data ? (
                data.map(
                    ({ exerciseId, title, difficulty, author, datePublished, source, content }) => (
                        <Exercise
                            key={`exercise_${exerciseId}`}
                            title={title}
                            isSolved
                            authorName={author}
                            datePublished={datePublished}
                            source={source}
                            difficulty={difficulty}
                            grade={clasa}
                            exerciseId={exerciseId}
                        >
                            {content}
                        </Exercise>
                    )
                )
            ) : (
                <p>{err}</p>
            )}
        </>
    );
}

function HeaderMainInfo({ grade, subchapters, setSubchapter }) {
    return (
        <div className="header-main-info">
            <div className="header-main-info__buttons">
                <select onChange={({ target: { value } }) => setSubchapter(value)}>
                    {subchapters.map((subchapter) => (
                        <option key={`subchapter__${subchapter}`}>{subchapter}</option>
                    ))}
                </select>
                <FilterButton />
            </div>
            <h2>Clasa {grade.toUpperCase()}</h2>
            <style jsx>{`
                .header-main-info {
                    margin: 160px auto 15px;
                    padding-bottom: 10px;
                    border-bottom: 5px solid var(--accent-primary);
                    width: 90%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                h2 {
                    color: var(--text-primary);
                }

                select {
                    height: 35px;
                    background-color: transparent;
                    border: 1px solid var(--background-quaternary);
                    border-radius: 50px;
                    margin-bottom: 5px;
                    margin-right: 30px;
                    color: var(--text-primary);
                    font-family: "Red Hat Display";
                    padding: 0 15px;
                    cursor: pointer;
                    transition: background-color 300ms ease;
                }

                select:hover {
                    background-color: var(--background-secondary);
                }
                select:focus {
                    outline: none;
                }

                @media screen and (max-width: 825px) {
                    .header-main-info {
                        flex-direction: column-reverse;
                        align-items: flex-start;
                        margin-top: 120px;
                    }

                    h2 {
                        margin-bottom: 15px;
                    }

                    .header-main-info__buttons {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
}

function CurrentCategoryTitle({ category, subcategory }) {
    return (
        <div className="current-category">
            <h2>{category}</h2>
            <p>{subcategory}</p>
            <style jsx>{`
                .current-category {
                    width: 90%;
                    margin: 0 auto 120px;
                    color: var(--text-primary);
                }

                p {
                    font-size: var(--font-small);
                }

                @media screen and (max-width: 560px) {
                    .current-category {
                        margin-bottom: 60px;
                    }

                    h2 {
                        font-size: var(--font-small);
                    }
                    p {
                        font-size: var(--font-smaller);
                    }
                }
            `}</style>
        </div>
    );
}

function FilterButton() {
    return (
        <button className="button--outline">
            Filtrați <FontAwesomeIcon icon="filter" />
        </button>
    );
}
