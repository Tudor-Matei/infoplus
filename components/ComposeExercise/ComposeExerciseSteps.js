import stepTitles from "../../utils/stepTitles";
import { useState } from "react";

export default function ComposeExerciseSteps({ setComposeExercisesView }) {
    const [step, setStep] = useState(1);

    return (
        <>
            <div className="compose-exercise-steps">
                <ComposeExerciseHeader
                    step={step}
                    setComposeExercisesView={setComposeExercisesView}
                />
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

function ComposeExerciseHeader({ step, setComposeExercisesView }) {
    return (
        <>
            <header>
                <div className="compose-exercise-steps__title-part">
                    <div className="compose-exercise-steps__step">{step}</div>
                    <h2>{stepTitles[step - 1]}</h2>
                </div>
                <div className="compose-exercise-steps__steps-part">
                    <h3
                        className="compose-exercise-steps__abort"
                        onClick={() => setComposeExercisesView(false)}
                    >
                        Renunță
                    </h3>
                    {stepTitles.map((_, i) => (
                        <div
                            key={`compose-step__${i}`}
                            className={`compose-exercise-steps__step ${
                                step === i + 1 ? "step--curent" : ""
                            }`}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </header>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-between;
                }

                h2,
                h3 {
                    color: var(--text-primary);
                    display: inline-block;
                    vertical-align: middle;
                }

                .compose-exercise-steps__step {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 30px;
                    font-weight: bold;
                    background-color: var(--background-quaternary);
                    color: var(--accent-primary);
                    display: inline-block;
                    margin-right: 15px;
                }
            `}</style>
        </>
    );
}
