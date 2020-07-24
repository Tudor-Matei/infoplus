import { useState, useReducer } from "react";
import InputArea from "../utils/InputArea";
import { reducer, initialState } from "./reducer";
import chapters from "../../utils/chapters";
import ComposeExerciseHeader from "./ComposeExerciseHeader";
export default function ComposeExerciseSteps({ setComposeExercisesView }) {
    const [step, setStep] = useState(1);

    const [state, updateField] = useReducer(reducer, initialState);

    // const [tests, setTests] = useState([
    //     {
    //         id: 1,
    //         inputData: "",
    //         expectedOutput: "",
    //     },
    // ]);

    return (
        <>
            <div className="compose-exercise-steps">
                <ComposeExerciseHeader
                    step={step}
                    setStep={setStep}
                    setComposeExercisesView={setComposeExercisesView}
                />
                {step === 1 && <GeneralDataStep generalData={state} updateField={updateField} />}
            </div>
            <style jsx>{`
                .compose-exercise-steps {
                    animation: fadeFromBottom 300ms ease forwards;
                }

                @keyframes fadeFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </>
    );
}

function GeneralDataStep({ generalData, updateField }) {
    return (
        <>
            <div className="general-data-step">
                <div className="input-field">
                    <InputArea
                        title="Titlu"
                        subtitle="Poate conține doar litere și cifre."
                        eventHandler={({ target: { value } }) =>
                            updateField({ type: "title", value })
                        }
                        inputProps={{
                            required: true,
                            minLength: 3,
                            defaultValue: generalData.title,
                        }}
                    />
                    <CategoryInputs generalData={generalData} updateField={updateField} />
                </div>
                <div className="input-field">
                    <InputArea
                        title="Dificultate"
                        isSelect
                        optionValues={["Ușor", "Mediu", "Greu", "Dificil"]}
                        eventHandler={({ target: { selectedIndex } }) =>
                            updateField({ type: "difficulty", value: selectedIndex + 1 })
                        }
                    />
                    <InputArea
                        title="Timp maxim de execuție"
                        subtitle="Introduceți timpul maxim de execuție în milisecunde (100 millisecunde = 0.1 secunde)."
                        eventHandler={({ target: { value } }) =>
                            updateField({ type: "maxExecutionTime", value })
                        }
                        inputType="number"
                        inputProps={{ required: true, minLength: 2 }}
                    />
                    <InputArea
                        title="Memorie maximă permisă"
                        subtitle="Memoria maximă permisă va fi exprimată în MB."
                        eventHandler={({ target: { value } }) =>
                            updateField({ type: "maxMemory", value })
                        }
                        inputType="number"
                        inputProps={{ required: true, minLength: 1 }}
                    />
                    <InputArea
                        title="Sursă"
                        eventHandler={({ target: { selectedIndex } }) =>
                            updateField({ type: "difficulty", value: selectedIndex + 1 })
                        }
                        inputProps={{ required: true, minLength: 5 }}
                    />
                </div>
            </div>

            <style jsx>{`
                .general-data-step {
                    display: flex;
                    justify-content: space-between;
                }

                .input-field {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .input-field:first-child {
                    margin-right: 50px;
                }
                .input-field:nth-child(2) {
                    margin-top: 20px;
                }

                @media screen and (max-width: 425px) {
                    .general-data-step {
                        flex-direction: column;
                    }

                    .input-field:first-child {
                        border-bottom: 2px solid var(--accent-primary);
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </>
    );
}

function CategoryInputs({ generalData, updateField }) {
    return (
        <>
            <InputArea
                title="Clasă"
                isSelect
                optionValues={["ix", "x", "xi"]}
                eventHandler={({ target: { value: grade } }) => {
                    updateField({
                        type: "multiple",
                        updateTheseFields() {
                            return {
                                grade,
                                category: { title: chapters[grade][0].titleAlias, index: 0 },
                                subcategory: "0",
                            };
                        },
                    });
                }}
            />
            <InputArea
                title="Categorie"
                isSelect
                optionValues={chapters[generalData.grade].map(({ title }) => title)}
                eventHandler={({ target: { selectedIndex } }) => {
                    updateField({
                        type: "multiple",
                        updateTheseFields() {
                            return {
                                category: {
                                    title: chapters[generalData.grade][selectedIndex].titleAlias,
                                    index: selectedIndex,
                                },
                                subcategory: "0",
                            };
                        },
                    });
                }}
                inputProps={{ required: true, minLength: 3 }}
            />
            <InputArea
                title="Subcategorie"
                isSelect
                optionValues={chapters[generalData.grade][generalData.category.index].subchapters}
                eventHandler={({ target: { selectedIndex } }) =>
                    updateField({ type: "subcategory", value: `${selectedIndex}` })
                }
                inputProps={{ value: generalData.subcategory }}
            />
        </>
    );
}

/*
 * TODOS:
 * hash contents with key (officialSolution, hint etc so no more unnecessary db queries)
 * build more from figma
 */
