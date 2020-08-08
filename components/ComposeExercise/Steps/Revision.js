import { useContext, useCallback } from "react";
import { FieldContext } from "../StepsDisplayer";
import stepLabels from "../stepLabels";
import chapters from "../../../utils/chapters";
import difficultyText from "../../../utils/difficultyText";
import Accordion from "../../utils/Accordion";
import IconBubble from "../../utils/IconBubble";
function TestsCategory({ testsData }) {
    return (
        <>
            {testsData.map(({ input, expectedOutput }, i) => (
                <div className="test">
                    <h3>Testul {i + 1}</h3>
                    <p>
                        <IconBubble icon="sign-in-alt" className="revision-test__icon" /> Date de
                        intrare
                    </p>
                    <pre>{input}</pre>
                    <p>
                        <IconBubble icon="sign-out-alt" className="revision-test__icon" /> Date de
                        ieșire așteptate
                    </p>
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

export default function Revision() {
    const { generalData, contentData, inputData, testsData } = useContext(FieldContext);

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

            <style jsx>{`
                .exercise-data-panel {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }

                h2 {
                    margin-bottom: 20px;
                }

                :global(.accordion--revision) {
                    flex: 1 0 350px;
                    margin: 15px;
                }
            `}</style>
        </>
    );
}
