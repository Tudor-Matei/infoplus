import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useContext, useState } from "react";
import { ExerciseInfoData } from "../../pages/exercitiu/[title]";

import { DataPanelContext, ShowAlertContext } from "../../pages/_app";
import IconBubble from "../utils/IconBubble";
import decideColourFromPoints from "./decideColourFromPoints";
export default function ExerciseInfo({
    needsHint,
    userSolutions,
    officialSolution,
    dataInput = {},
    mentions = [],
    inputExample = {},
    children,
}) {
    return (
        <>
            <div className="exercise-info">
                <HeaderTitleExercise
                    needsHint={needsHint}
                    userSolutions={userSolutions}
                    officialSolution={officialSolution}
                />
                <p className="exercise-info__description">{children}</p>
                <h3 className="exercise-info__data-input">
                    Date de intrare: <span>{dataInput.toInput}</span>
                </h3>
                <h3 className="exercise-info__data-input">
                    Date de ieșire: <span>{dataInput.toOutput}</span>
                </h3>
                <HeaderSection title="Observații" />
                <ul className="exercise-info__important-data">
                    {mentions.map((mention, i) => (
                        <li key={`important-mention_${i}`}>{mention}</li>
                    ))}
                </ul>
                <HeaderSection title="Exemplu" />
                <h3 className="exercise-info__input-example">
                    Intrare <FontAwesomeIcon icon="arrow-left" />
                </h3>
                <code>{inputExample.input}</code>
                <h3 className="exercise-info__input-example">
                    Ieșire <FontAwesomeIcon icon="arrow-right" />
                </h3>
                <code>{inputExample.output}</code>
                <HeaderSection title="Soluție" />
            </div>
            <style jsx>{`
                .exercise-info {
                    width: 90%;
                    margin: auto;
                    color: var(--text-primary);
                }

                .exercise-info__description {
                    margin-bottom: 30px;
                    line-height: 30px;
                }

                .exercise-info__data-input {
                    color: var(--accent-secondary);
                }

                .exercise-info__data-input span {
                    color: var(--text-primary);
                    font-weight: normal;
                }

                .exercise-info__important-data {
                    font-size: var(--font-smaller);
                    padding-left: 20px;
                    line-height: 30px;
                }

                .exercise-info__input-example {
                    margin: 10px 0;
                }

                :global(.exercise-info__input-example svg) {
                    width: 15px !important;
                    margin-left: 7px;
                    margin-bottom: 2px;
                    height: 15px !important;
                }

                code {
                    display: block;
                    white-space: pre-line;
                    padding: 10px;
                    width: 100%;
                    background-color: var(--background-secondary);
                    border: 2px solid var(--accent-primary);
                    border-radius: 15px;
                    margin-bottom: 40px;
                }
            `}</style>
        </>
    );
}

function HeaderSection({ title, children = "" }) {
    return (
        <>
            <div className="header-section">
                <h2>{title}</h2>
                {children}
                <hr />
            </div>

            <style jsx>{`
                .header-section {
                    margin-top: 50px;
                }

                h2 {
                    display: inline-block;
                    margin-right: 30px;
                    vertical-align: middle;
                }

                hr {
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
            `}</style>
        </>
    );
}

function UserSolution({ name, surname, username, datePublished, testsPoints, solution }) {
    return (
        <>
            <div
                className="user-solution"
                style={{ backgroundColor: `var(--${decideColourFromPoints(testsPoints)})` }}
            >
                <div className="user-solution__datum">
                    <IconBubble className="user-solution__icon" icon="user" /> {name} {surname} (
                    {username})
                </div>
                <div className="user-solution__datum">
                    <IconBubble className="user-solution__icon" icon="calendar" /> {datePublished}
                </div>

                <h3>{testsPoints} puncte</h3>
            </div>
            <style jsx>{`
                .user-solution {
                    padding: 20px;
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                    color: var(--text-button);
                    box-shadow: var(--box-shadow);
                }

                .user-solution:last-child {
                    margin-bottom: 0;
                }

                :global(.user-solution__icon) {
                    margin-right: 10px;
                }

                .user-solution__datum {
                    margin-right: 20px;
                    padding-right: 20px;
                    position: relative;
                }

                .user-solution__datum::after {
                    content: "";
                    position: absolute;
                    top: 10px;
                    right: 0;
                    width: 1px;
                    height: 50%;
                    bottom: 0;
                    background-color: var(--text-button);
                }

                h3 {
                    align-self: flex-end;
                }

                @media screen and (max-width: 825px) {
                    .user-solution {
                        flex-direction: column;
                        align-items: center;
                    }

                    .user-solution__datum {
                        padding: 0 0 20px;
                        margin: 0 0 20px;
                        min-width: 270px;
                    }

                    .user-solution__datum::after {
                        top: auto;
                        right: auto;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                    }

                    h3 {
                        align-self: auto;
                    }
                }

                @media screen and (max-width: 425px) {
                    .user-solution {
                        align-items: flex-start;
                    }

                    .user-solution__datum {
                        min-width: auto;
                    }
                }
            `}</style>
        </>
    );
}

function HiddenExerciseDataButton({ whatToGet, children }) {
    const setPanelData = useContext(DataPanelContext);
    const createAlert = useContext(ShowAlertContext);
    const { exerciseId, hiddenExerciseData, setHiddenExerciseData, userSolutions } = useContext(
        ExerciseInfoData
    );

    const [isDisabled, setDisabled] = useState(false);

    const fetchHiddenExerciseData = useCallback(() => {
        if (whatToGet === "userSolutions")
            return setPanelData({
                value: userSolutions.map((userSolution, i) => (
                    <UserSolution key={`userSolution_${i}`} {...userSolution} />
                )),
            });

        if (!hiddenExerciseData) {
            setDisabled(true);

            // TODO: deci te rog eu cu encriptari, poate un endpoint sau ceva care se ocupa doar cu decriptari

            return fetch("/api/exercises/hiddenData", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    exerciseId,
                    fieldsToExclude: { officialSolution: 1, hint: 1, _id: 0 },
                }),
            })
                .then((r) => r.json())
                .then(({ data, err }) => {
                    if (err) {
                        createAlert({ ofType: "error", saying: err });
                        return;
                    }
                    setHiddenExerciseData({ value: data });
                    setPanelData({
                        value:
                            whatToGet === "officialSolution" ? (
                                <code>{data[whatToGet]}</code>
                            ) : (
                                data[whatToGet]
                            ),
                    });
                    setDisabled(false);
                });
        }

        return setPanelData({
            value:
                whatToGet === "officialSolution" ? (
                    <code>{hiddenExerciseData[whatToGet]}</code>
                ) : (
                    hiddenExerciseData[whatToGet]
                ),
        });
    }, [hiddenExerciseData, whatToGet, userSolutions]);

    return (
        <>
            <button
                className="button--outline"
                disabled={isDisabled}
                onClick={fetchHiddenExerciseData}
            >
                {children}
            </button>
            <style jsx>{`
                button {
                    display: inline-block;
                    margin-right: 30px;
                    margin-top: 20px;
                }
            `}</style>
        </>
    );
}

function HeaderTitleExercise({ needsHint, userSolutions, officialSolution }) {
    return (
        <HeaderSection title="Enunțul exercițiului">
            {needsHint && (
                <HiddenExerciseDataButton whatToGet="hint">Indiciu</HiddenExerciseDataButton>
            )}
            {userSolutions ? (
                <HiddenExerciseDataButton whatToGet="userSolutions">
                    Soluțiile tale: {userSolutions}
                </HiddenExerciseDataButton>
            ) : null}
            {officialSolution && (
                <HiddenExerciseDataButton whatToGet="officialSolution">
                    Soluția oficială
                </HiddenExerciseDataButton>
            )}
        </HeaderSection>
    );
}
