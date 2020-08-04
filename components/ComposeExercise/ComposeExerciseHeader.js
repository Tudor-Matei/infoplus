import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stepTitles from "./stepTitles";
import { useContext, useCallback, useState } from "react";
import { UpdateStepContext, FieldContext } from "./StepsDisplayer";
import { ComposeExercisesViewContext } from "../../pages/exercitii/compuse-de-mine";
import checkFieldsValidity from "../../utils/checkFieldsValidity";
import omitKey from "../../utils/omitKey";

function StepIndicators({ step }) {
    return stepTitles.map((_, i) => (
        <div
            key={`compose-step__${i}`}
            className={`compose-exercise-steps__step ${step === i + 1 ? "step--current" : ""}`}
        >
            {i + 1}
        </div>
    ));
}

export default function ComposeExerciseHeader({ step }) {
    const updateView = useContext(ComposeExercisesViewContext);
    const [error, setError] = useState("");

    return (
        <>
            <header>
                <div className="compose-exercise-steps__title-part">
                    <div className="compose-exercise-steps__step step--current">{step}</div>
                    <h2>{stepTitles[step - 1]}</h2>
                </div>
                <div className="compose-exercise-steps__steps-part">
                    <StepIndicators step={step} />
                    <h4
                        className="compose-exercise-steps__abort"
                        onClick={() => updateView({ type: "normal" })}
                    >
                        Renunță
                    </h4>
                </div>
            </header>
            <div className="sub-header">
                <div className="error-part">
                    {error && (
                        <>
                            <FontAwesomeIcon
                                icon="times-circle"
                                color="var(--accent-quaternary)"
                                style={{ verticalAlign: "middle" }}
                            />
                            <p className="error-message">{error}</p>
                        </>
                    )}
                </div>
                <BackNextButtons step={step} setError={setError} />
            </div>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    align-items: center;
                    border-bottom: 2px solid var(--accent-primary);
                    position: relative;
                }

                h2,
                h4 {
                    display: inline-block;
                    vertical-align: middle;
                }

                h2 {
                    color: var(--text-primary);
                }

                .error-message {
                    text-align: left;
                }

                .compose-exercise-steps__title-part {
                    margin-right: 20px;
                }

                @media screen and (max-width: 425px) {
                    .compose-exercise-steps__title-part {
                        margin-bottom: 30px;
                    }

                    .compose-exercise-steps__title-part h2 {
                        font-size: var(--font-small);
                    }
                }

                :global(.compose-exercise-steps__step) {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 30px;
                    font-weight: bold;
                    background-color: var(--background-quaternary);
                    opacity: 0.3;
                    color: var(--accent-primary);
                    display: inline-block;
                    margin-right: 15px;
                    transition: opacity 300ms linear;
                }

                :global(.step--current) {
                    opacity: 1;
                }

                .compose-exercise-steps__abort {
                    color: var(--text-tertiary);
                    cursor: pointer;
                    transition: color 300ms linear;
                }

                .compose-exercise-steps__abort:hover {
                    color: var(--text-primary);
                }

                .sub-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;
                    margin-bottom: 40px;
                }

                .error-part {
                    margin-bottom: 5px;
                }

                .error-message {
                    display: inline-block;
                    padding-left: 10px;
                }

                @media screen and (max-width: 768px) {
                    .sub-header {
                        flex-direction: column-reverse;
                    }

                    .error-message {
                        margin-top: 15px;
                    }
                }
            `}</style>
        </>
    );
}

function getFieldGroupForStep(step) {
    return arguments[step] || console.error("invalid step stupid");
}

function isDataFromStepValid(step, fields) {
    switch (step) {
        case 1:
            return checkFieldsValidity({
                fields: omitKey("category", fields),
                minimumLengthForEachField: {
                    title: 3,
                    source: 5,
                },
                customValidation: { forFields: ["title"], validator: /[^a-zA-Z0-9 ]/ },
            });

        case 2:
            return checkFieldsValidity({
                fields,
                minimumLengthForEachField: {
                    content: 10,
                    hints: 5,
                    mentions: 5,
                    officialSolution: 10,
                },
            });
    }
}

function BackNextButtons({ step, setError }) {
    const updateStep = useContext(UpdateStepContext);
    const { generalData, contentData, inputData } = useContext(FieldContext);

    const incrementStepValidated = useCallback(() => {
        const errors = isDataFromStepValid(
            step,
            getFieldGroupForStep(step, generalData, contentData, inputData)
        );
        if (errors) return setError(errors);

        setError("");
        updateStep({ type: "increment" });
    }, [step, generalData, contentData, inputData]);

    return (
        <>
            <div className="back-next-buttons">
                <button
                    className="button--tertiary"
                    onClick={() => step !== 1 && updateStep({ type: "decrement" })}
                    disabled={step === 1}
                >
                    <FontAwesomeIcon icon="arrow-left" style={{ marginRight: "10px" }} /> Înapoi
                </button>
                <button
                    className="button--primary"
                    onClick={() => step !== 5 && incrementStepValidated()}
                    disabled={step === 5}
                >
                    Înainte <FontAwesomeIcon icon="arrow-right" />
                </button>
            </div>
            <style jsx>{`
                .button--tertiary {
                    margin-right: 10px;
                    transition: 300ms linear;
                    transition-property: opacity, color;
                }
            `}</style>
        </>
    );
}
