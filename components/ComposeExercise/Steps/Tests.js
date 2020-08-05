import { useContext } from "react";
import { FieldContext } from "../StepsDisplayer";

import IconBubble from "../../utils/IconBubble";
import InputArea from "../../utils/InputArea";

export default function Tests() {
    const { testsData, setTestsData } = useContext(FieldContext);
    console.log("%c old state", "color: orange", testsData);

    return (
        <>
            <div className="tests-part">
                <div className="tests-primary-data">
                    <h2>Teste create: {testsData.length}</h2>
                    <p>Număr de teste minime permise: 1</p>
                    <p>Număr de teste maxime permise: 10</p>
                </div>

                <div className="tests">
                    {testsData.map((testData, i) => (
                        <Test
                            key={`test_${i}`}
                            number={i + 1}
                            setTestsData={setTestsData}
                            defaultInputValues={[testData.input, testData.expectedOutput]}
                        />
                    ))}
                </div>
                {testsData.length < 10 && (
                    <IconBubble
                        text="+"
                        className="icon-bubble--big-button-add-test"
                        onClick={() =>
                            testsData.length < 10 &&
                            setTestsData({ type: "add", input: "", expectedOutput: "" })
                        }
                    />
                )}
            </div>

            <style jsx>{`
                .tests-part {
                    margin-left: -20px;
                }
                .tests-primary-data {
                    margin-left: 20px;
                    margin-bottom: 40px;
                }
                .tests {
                    display: inline-flex;
                    flex-wrap: wrap;
                    vertical-align: middle;
                    margin-right: 25px;
                }

                :global(.icon-bubble--big-button-add-test) {
                    width: 100px !important;
                    height: 100px !important;
                    font-size: 5em;
                    vertical-align: middle;
                    background-color: var(--accent-primary) !important;
                    color: var(--text-primary) !important;
                }

                :global(.icon-bubble--big-button-add-test:hover) {
                    transform: scale(0.95);
                }
                 {
                    /* TODO: fix + add button going below when adding new test */
                }
            `}</style>
        </>
    );
}

function Test({ number, setTestsData, defaultInputValues }) {
    return (
        <>
            <div className="test">
                <header>
                    <h3>Testul {number}</h3>
                    {number !== 1 && (
                        <IconBubble
                            icon="trash"
                            accent="failure-primary"
                            onClick={() => setTestsData({ type: "remove", number: number - 1 })}
                        />
                    )}
                </header>

                <InputArea
                    title="Date de intrare"
                    inputType="multiline"
                    inputProps={{ required: true, defaultValue: defaultInputValues[0] }}
                />
                <InputArea
                    title="Date de ieșire așteptate"
                    inputType="multiline"
                    inputProps={{ required: true, defaultValue: defaultInputValues[1] }}
                />
            </div>
            <style jsx>{`
                .test {
                    flex: 1 0 auto;
                    max-width: 600px;
                    min-width: 300px;
                    background-color: var(--background-secondary);
                    border-radius: 25px;
                    padding: 20px;
                    box-shadow: var(--box-shadow);
                    margin: 0 20px 40px;
                    animation: slideFromRight 300ms ease forwards;
                }

                @keyframes slideFromRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-bottom: 15px;
                    border-bottom: 2px solid var(--accent-primary);
                    margin-bottom: 25px;
                }
            `}</style>
        </>
    );
}
