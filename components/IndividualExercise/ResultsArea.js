import decideColourFromPoints from "./decideColourFromPoints";
import TestResult from "./TestResult";

export default function Results({ testsPoints, testsResults = [], toggleResultsComponent }) {
    return (
        <>
            <div className="results">
                <ResultsBand totalPointsGained={testsPoints} />
                <div className="results__points">
                    <p>Total</p>
                    <h2>{testsPoints} puncte</h2>
                </div>

                <div className="results__tests">
                    {testsResults[0] && !testsResults[0].syntaxError ? (
                        testsResults.map(
                            ({ isCorrect, executionTime, memoryUsed, errorCode }, i) => (
                                <TestResult
                                    key={`test-result__${i}`}
                                    isCorrect={isCorrect}
                                    executionTime={executionTime}
                                    memoryUsed={memoryUsed}
                                    errorCode={errorCode}
                                    testNumber={i + 1}
                                />
                            )
                        )
                    ) : (
                        <CompilationError>{atob(testsResults[0].syntaxError)}</CompilationError>
                    )}
                    <ReturnToSolutionButton onClick={toggleResultsComponent} />
                </div>
            </div>

            <style jsx>{`
                .results {
                    position: relative;
                    display: flex;
                    align-items: center;
                    z-index: 2;
                    color: var(--text-button);
                    margin: 50px 0 80px;
                    padding: 0 65px;
                }

                .results__points {
                    width: 30%;
                    height: 100%;
                    text-align: center;
                }

                .results__tests {
                    width: 70%;
                    height: 100%;
                }

                @media screen and (max-width: 825px) {
                    .results {
                        flex-direction: column;
                    }

                    .results__points,
                    .results__tests {
                        width: 100%;
                    }

                    .results__points {
                        margin: 25px 0 50px;
                    }
                }

                @media screen and (max-width: 576px) {
                    .results__tests {
                        width: 120%;
                    }
                }

                @media screen and (max-width: 375px) {
                    .results__tests {
                        width: 150%;
                    }
                }
            `}</style>
        </>
    );
}

function CompilationError({ children }) {
    return (
        <>
            <div className="results__compilation-error">
                <h3>Eroare de compilare</h3>
                <hr />
                <pre>{children}</pre>
            </div>

            <style jsx>{`
                .results__compilation-error {
                    border-radius: 15px;
                    background-color: var(--accent-failure-secondary);
                    padding: 20px;
                    color: var(--text-button);
                }

                pre {
                    background-color: transparent;
                    color: var(--text-button);
                    white-space: pre-wrap;
                }
            `}</style>
        </>
    );
}

function ResultsBand({ totalPointsGained }) {
    return (
        <>
            <div
                className="results__band"
                style={{
                    backgroundColor: `var(--${decideColourFromPoints(totalPointsGained)})`,
                }}
            ></div>
            <style jsx>{`
                .results__band {
                    width: 0;
                    height: 40%;
                    min-height: 100px;
                    max-height: 250px;
                    left: 0;
                    position: absolute;
                    z-index: -1;
                    animation: slideIn 2500ms ease forwards;
                }

                @media screen and (max-width: 825px) {
                    .results__band {
                        height: 30%;
                    }
                }

                @keyframes slideIn {
                    from {
                        width: 0;
                    }
                    to {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}

function ReturnToSolutionButton({ onClick }) {
    return (
        <>
            <button className="button--tertiary" onClick={onClick}>
                Mergi înapoi
            </button>
            <style jsx>{`
                button {
                    position: absolute;
                    right: 0;
                    margin: 5px 30px 0 0;
                    width: 200px;
                }
            `}</style>
        </>
    );
}
