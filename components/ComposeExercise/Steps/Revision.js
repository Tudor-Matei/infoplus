import { useContext, useCallback, useRef } from "react";
import { FieldContext } from "../StepsDisplayer";
import stepLabels from "../stepLabels";
import chapters from "../../../utils/chapters";
import difficultyText from "../../../utils/difficultyText";
import Accordion from "../../_globals/Accordion";
import IconBubble from "../../utils/IconBubble";
import abortableFetch from "../../../utils/abortableFetch";
import { ShowAlertContext } from "../../../pages/_app";
import { ComposeExercisesViewContext } from "../../../pages/exercitii/compuse-de-mine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Revision() {
    const { generalData, contentData, inputData, testsData } = useContext(FieldContext);
    const updateView = useContext(ComposeExercisesViewContext);
    const createAlert = useContext(ShowAlertContext);
    const abortRef = useRef(null);

    const formattedGeneralData = useCallback(() => {
        const uglyTitleAlias = generalData.category.titleAlias;
        const uglyChapter = chapters[generalData.grade].find(
            ({ category }) => category === uglyTitleAlias
        );

        return {
            ...generalData,
            maxExecutionTime: `${generalData.maxExecutionTime} milisecunde`,
            maxMemory: `${generalData.maxMemory} MB`,
            grade: generalData.grade.toUpperCase(),
            difficulty: difficultyText(generalData.difficulty),
            category: uglyChapter.title,
            subcategory: uglyChapter.subchapters[generalData.subcategory],
        };
    }, [generalData]);

    const submitExerciseData = useCallback(() => {
        const { data, abort } = abortableFetch("/api/publishExercise", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ generalData, contentData, inputData, testsData }),
        });

        if (!abortRef.current) abortRef.current = abort;
        data.then((r) => r.json()).then(
            ({ ok = false, err = "A apărut o eroare internă, vă rugăm să ne scuzați." }) => {
                if (!ok) {
                    createAlert({ ofType: "error", saying: err });
                    return;
                }

                createAlert({
                    ofType: "success",
                    onClose: () => updateView({ type: "normal" }),
                });
            }
        );
    }, [generalData, contentData, inputData, testsData]);

    return (
        <>
            <h2>Așa arată exercițiul tău</h2>
            <div className="exercise-data-panel">
                <Accordion className="accordion--revision" title="Informații generale">
                    <DataCategory type="generalData" data={formattedGeneralData()} />
                </Accordion>
                <Accordion
                    className="accordion--revision"
                    borderAccent="secondary"
                    title="Conținutul exercițiului"
                >
                    <DataCategory type="contentData" data={contentData} />
                </Accordion>
                <Accordion
                    className="accordion--revision"
                    borderAccent="tertiary"
                    title="Date de intrare/ieșire"
                >
                    <DataCategory type="inputData" data={inputData} />
                </Accordion>
                <Accordion title="Teste" className="accordion--revision" borderAccent="quaternary">
                    <TestsCategory testsData={testsData} />
                </Accordion>
            </div>
            <div className="publish-button">
                <button onClick={submitExerciseData} className="button--primary">
                    Publică <FontAwesomeIcon icon="arrow-right" color="var(--text-button)" />
                </button>
            </div>
            <style jsx>{`
                .exercise-data-panel {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    color: var(--text-primary);
                }

                h2 {
                    margin-bottom: 20px;
                    color: var(--text-primary);
                }

                :global(.accordion--revision) {
                    flex: 1 0 350px;
                    margin: 15px;
                }

                .publish-button {
                    text-align: right;
                    padding: 10px 20px;
                }

                .publish-buttons button {
                    display: inline-block;
                }

                @media screen and (max-width: 425px) {
                    h2 {
                        font-size: var(--font-small);
                    }

                    :global(.accordion--revision) {
                        flex-basis: 200px;
                    }

                    :global(.accordion--revision h3) {
                        font-size: var(--font-smaller);
                    }
                }
            `}</style>
        </>
    );
}

function DataCategory({ type, data = {} }) {
    return (
        <>
            <ul>
                {Object.values(data).map((datum, i) => (
                    <li key={`${type}_${i}`}>
                        <span key={`${type}-span_${i}`}>{stepLabels[type][i]}:</span>
                        <p key={`${type}-p_${i}`}>{datum}</p>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                ul {
                    padding-left: 25px;
                }

                li {
                    color: var(--text-primary);
                }

                span {
                    font-weight: bold;
                    color: var(--text-primary);
                    margin-right: 4px;
                }

                p {
                    display: inline-block;
                }
            `}</style>
        </>
    );
}

function TestsCategory({ testsData }) {
    return (
        <>
            {testsData.map(({ input, expectedOutput }, i) => (
                <div className="test" key={`test_${i}`}>
                    <h3>Testul {i + 1}</h3>
                    <IconBubble icon="sign-in-alt" className="revision-test__icon" />
                    <p>Date de intrare</p>
                    <pre>{input}</pre>
                    <IconBubble icon="sign-out-alt" className="revision-test__icon" />
                    <p>Date de ieșire așteptate</p>
                    <pre>{expectedOutput}</pre>
                </div>
            ))}
            <style jsx>{`
                .test {
                    margin: 10px 0;
                }

                :global(.revision-test__icon) {
                    margin-right: 5px;
                }

                h3 {
                    margin-top: 25px;
                    margin-bottom: 5px;
                }

                p {
                    display: inline-block;
                    margin-top: 15px;
                }

                p:first-child {
                    margin-top: 10px;
                }

                pre {
                    margin-top: 10px;
                }
            `}</style>
        </>
    );
}
