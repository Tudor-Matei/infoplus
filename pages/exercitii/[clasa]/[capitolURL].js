import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Exercise from "../../../components/ExercisesList/Exercise";
import {
    exercisesGradeIX,
    exercisesGradeX,
    exercisesGradeXI,
} from "../../../utils/exercisesGradesData";

import { useState, useContext, useEffect, useRef } from "react";
import { ShowAlertContext } from "../../_app";
import Loading from "../../../components/utils/Loading";
import abortableFetch from "../../../utils/abortableFetch";
import { getMultipleExercisesData } from "../../../utils/getExerciseData";
import NotFound from "../../../components/utils/NotFound";
import strippedDownResponses from "../../../utils/strippedDownResponses";

function getChapterData(grade, capitolURL) {
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
    const { data, err } = await getMultipleExercisesData({
        chapter: capitolURL,
        subchapterIndex: "0",
        fieldsToExclude: strippedDownResponses.exercisesList,
    });

    return {
        props: {
            clasa,
            capitol: { title: capitol.title, url: capitolURL },
            subchapters: capitol.subchapters,
            exercises: { data, err },
        },
    };
}

export default function ExercisesList({ clasa, capitol, subchapters, exercises }) {
    const [subchapter, setSubchapter] = useState(subchapters[0]);
    const [exercisesList, setNewExercisesList] = useState(exercises);
    const [isLoading, changeLoaderState] = useState(false);
    const modifyAlert = useContext(ShowAlertContext);

    useEffect(() => {
        if (exercisesList.err && exercisesList.err !== "Nu au fost găsite exerciții de acest tip.")
            modifyAlert({
                isVisible: true,
                props: {
                    type: 0,
                    children: exercisesList.err,
                },
            });
    }, [exercisesList]);

    return (
        <>
            <HeaderMainInfo
                grade={clasa}
                subchapters={subchapters}
                chapterData={{ grade: clasa, chapter: capitol.url, subchapters }}
                setSubchapter={setSubchapter}
                setNewExercisesList={setNewExercisesList}
                changeLoaderState={changeLoaderState}
            />
            <CurrentCategoryTitle category={capitol.title} subcategory={subchapter} />
            {isLoading ? (
                <Loading />
            ) : exercisesList.data ? (
                exercisesList.data.map(
                    ({ exerciseId, title, difficulty, author, datePublished, source, content }) => (
                        <Exercise
                            key={`exercise_${title}`}
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
                <NotFound icon="times">Nu au fost găsite exerciții de acest tip.</NotFound>
            )}
        </>
    );
}

function HeaderMainInfo({
    chapterData: { grade, chapter, subchapters },
    setSubchapter,
    setNewExercisesList,
    changeLoaderState,
}) {
    const abortRef = useRef();
    const modifyAlert = useContext(ShowAlertContext);

    const onChange = (e) => {
        if (!subchapters.includes(e.target.value)) return location.reload();
        if (abortRef.current) abortRef.current.abort();

        setSubchapter(e.target.value);
        changeLoaderState(true);

        const { data, abort } = abortableFetch("/api/exercises", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chapter,
                subchapterIndex: JSON.stringify(e.target.selectedIndex),
            }),
        });

        abortRef.current = { abort };
        data.then((r) => (r ? r.json() : null))
            .then((exercises) => {
                // so it doesn't deactivate the loader because a new fetch request has been initiated
                if (exercises === null) return;
                abortRef.current = null;

                setTimeout(() => {
                    setNewExercisesList(exercises);
                    changeLoaderState(false);
                }, 500);
            })
            .catch((e) => {
                console.error(e);
                modifyAlert({
                    isVisible: true,
                    props: {
                        type: 0,
                        children: "A apărut o eroare internă, vă rugăm să ne scuzați.",
                    },
                });
            });
    };

    return (
        <div className="header-main-info">
            <div className="header-main-info__buttons">
                <select onChange={onChange}>
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
                    margin: 0 auto 80px;
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
