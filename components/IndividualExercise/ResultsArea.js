import CheckmarkSolved from "../utils/CheckmarkSolved";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Results({
    totalPointsGained,
    testResults = [],
    toggleResultsComponent,
}) {
    return (
        <>
            <div className="results">
                <div className="results__band"></div>
                <div className="results__points">
                    <p>Total</p>
                    <h2>{totalPointsGained} puncte</h2>
                </div>
                <div className="results__tests">
                    {testResults.map(
                        (
                            { didPass, timeTaken, memoryUsed, failureCode },
                            i
                        ) => (
                            <div
                                className={`results__test ${
                                    !didPass
                                        ? "results__test--failed"
                                        : "results__test--passed"
                                }`}
                                style={{ animationDelay: 200 * (i + 1) + "ms" }}
                                key={`results__test-container_${i + 1}`}
                            >
                                <h3 key={`results__test-number_${i + 1}`}>
                                    Testul {i + 1}
                                </h3>
                                {didPass ? (
                                    <div className="results__details">
                                        <p className="results__seconds--with-border">
                                            <FontAwesomeIcon icon="clock" />
                                            {timeTaken} secunde
                                        </p>
                                        <p>
                                            <FontAwesomeIcon icon="memory" />
                                            {memoryUsed} MB folosiți
                                        </p>
                                        <CheckmarkSolved
                                            key={`results__solved-test_${
                                                i + 1
                                            }`}
                                        />
                                    </div>
                                ) : (
                                    returnElementForFailureCode(failureCode)
                                )}
                            </div>
                        )
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

                    --test-passed: #a7f7ab;
                    --test-failed: #ffa9a9;
                    --test-failed-icon: #ff5e5e;
                }

                .results__band {
                    width: 0;
                    height: 40%;
                    min-height: 100px;
                    max-height: 250px;
                    left: 0;
                    position: absolute;
                    background-color: var(--accent-primary);
                    z-index: -1;
                    animation: slideIn 2500ms ease forwards;
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

                .results__test {
                    width: 100%;
                    padding: 20px 30px;
                    background-color: var(--background-primary);
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    border-radius: 50px;
                    box-shadow: var(--box-shadow);
                    align-items: center;
                    opacity: 0;
                    transform: translateY(-5px) rotateX(69deg);
                    transform-origin: top center;
                    animation: revealIn 500ms ease forwards;
                }

                .results__details {
                    display: flex;
                    align-items: center;
                }

                :global(.results__details svg) {
                    margin-right: 10px;
                }

                .results__seconds--with-border {
                    position: relative;
                    padding-right: 15px;
                }

                .results__seconds--with-border::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    top: 20%;
                    width: 1px;
                    height: 60%;
                    background-color: var(--text-button);
                }

                h3 {
                    font-size: var(--font-smaller);
                }

                .results__test--passed {
                    background-color: var(--test-passed);
                }

                .results__test--failed {
                    background-color: var(--test-failed);
                }

                :global(.results__test--failed svg) {
                    width: 22px !important;
                    height: 22px;
                    background-color: var(--test-failed-icon);
                    border-radius: 50%;
                    padding: 5px;
                }

                .results__test:last-child {
                    border-bottom: none;
                }

                :global(.results__test p > svg) {
                    margin-left: 15px;
                }

                :global(.results__test p) {
                    display: flex;
                    align-items: center;
                }

                :global(.results .checkmark-solved) {
                    margin-right: 0;
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

                    .results__test {
                        flex-direction: column;
                    }

                    .results__test h3 {
                        margin-bottom: 10px;
                    }

                    .results__band {
                        height: 30%;
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

                @keyframes revealIn {
                    from {
                        transform: translateY(-5px) rotateX(69deg);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0) rotateX(0);
                        opacity: 1;
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
                Întoarce-te înapoi
            </button>
            <style jsx>{`
                button {
                    position: absolute;
                    right: 0;
                    margin-right: 65px;
                    width: 200px;
                }
            `}</style>
        </>
    );
}

function returnElementForFailureCode(failureCode) {
    if (failureCode === -1)
        return (
            <p>
                Limită de timp depășită <FontAwesomeIcon icon="clock" />{" "}
            </p>
        );
    else if (failureCode === -2)
        return (
            <p>
                Limită de memorie depășită <FontAwesomeIcon icon="memory" />{" "}
            </p>
        );
    else if (failureCode === -3)
        return (
            <p>
                Eroare cod -3 <FontAwesomeIcon icon="times-circle" />{" "}
            </p>
        );
}
