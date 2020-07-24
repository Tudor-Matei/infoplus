import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stepTitles from "./stepTitles";
import { useState } from "react";

export default function ComposeExerciseHeader({ step, setStep, setComposeExercisesView }) {
    return (
        <>
            <header>
                <div className="compose-exercise-steps__title-part">
                    <div className="compose-exercise-steps__step step--current">{step}</div>
                    <h2>{stepTitles[step - 1]}</h2>
                </div>
                <div className="compose-exercise-steps__steps-part">
                    {stepTitles.map((_, i) => (
                        <div
                            key={`compose-step__${i}`}
                            className={`compose-exercise-steps__step ${
                                step === i + 1 ? "step--current" : ""
                            }`}
                        >
                            {i + 1}
                        </div>
                    ))}

                    <h4
                        className="compose-exercise-steps__abort"
                        onClick={() => setComposeExercisesView(false)}
                    >
                        Renunță
                    </h4>
                </div>
            </header>
            <div className="sub-header">
                <div className="error-part">
                    <FontAwesomeIcon
                        icon="times-circle"
                        color="var(--accent-quaternary)"
                        style={{ verticalAlign: "middle" }}
                    />
                    <p className="error-message">you mom gae</p>
                </div>
                <BackNextButtons step={step} setStep={setStep} />
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

                .compose-exercise-steps__abort {
                    color: var(--text-tertiary);
                    cursor: pointer;
                    transition: color 300ms linear;
                }

                .compose-exercise-steps__abort:hover {
                    color: var(--text-primary);
                }

                .compose-exercise-steps__step {
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

                .compose-exercise-steps__step:last-child {
                    margin-right: 0;
                }

                .step--current {
                    opacity: 1;
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

function BackNextButtons({ step, setStep }) {
    const [isDisabled, setDisabled] = useState(false);

    return (
        <>
            <div className="back-next-buttons">
                <button
                    className="button--tertiary"
                    onClick={() => step !== 1 && setStep((previousStep) => previousStep - 1)}
                    disabled={step === 1 || isDisabled}
                >
                    <FontAwesomeIcon icon="arrow-left" style={{ marginRight: "10px" }} /> Înapoi
                </button>
                <button
                    className="button--primary"
                    onClick={() => step !== 5 && setStep((previousStep) => previousStep + 1)}
                    disabled={step === 5 || isDisabled}
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
