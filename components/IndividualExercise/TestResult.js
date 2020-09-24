import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CheckmarkSolved from "../utils/CheckmarkSolved";
import ErrorCircle from "../utils/ErrorCircle";

export default function TestResult({
    isCorrect,
    executionTime,
    memoryUsed,
    errorCode,
    testNumber,
}) {
    return (
        <>
            <div
                className={`results__test ${
                    !isCorrect ? "results__test--failed" : "results__test--passed"
                }`}
                style={{ animationDelay: 200 * testNumber + "ms" }}
                key={`results__test-container_${testNumber}`}
            >
                <h3 key={`results__test-number_${testNumber}`}>Testul {testNumber}</h3>
                {!errorCode ? (
                    <div className="results__details">
                        <p className="results__seconds--with-border">
                            <FontAwesomeIcon icon="clock" />
                            {(executionTime / 1000).toPrecision(2)} secunde
                        </p>
                        <p>
                            <FontAwesomeIcon icon="memory" />
                            {memoryUsed} MB folosiți
                        </p>
                        {isCorrect ? (
                            <CheckmarkSolved key={`results__solved-test_${testNumber}`} />
                        ) : (
                            <ErrorCircle />
                        )}
                    </div>
                ) : (
                    returnElementForFailureCode(errorCode)
                )}
            </div>

            <style jsx>{`
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
                    background-color: var(--accent-success);
                }

                .results__test--failed {
                    background-color: var(--accent-failure-secondary);
                }

                :global(.results .error-circle) {
                    margin-right: 0;
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
                    .results__test {
                        flex-direction: column;
                    }

                    .results__test h3 {
                        margin-bottom: 10px;
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
            `}</style>
        </>
    );
}

function returnElementForFailureCode(failureCode) {
    if (failureCode === -1)
        return (
            <p>
                Limită de timp depășită <ErrorCircle icon="clock" />{" "}
            </p>
        );
    else if (failureCode === -2)
        return (
            <p>
                Limită de memorie depășită <ErrorCircle icon="memory" />{" "}
            </p>
        );
    else if (failureCode === -3)
        return (
            <p>
                Eroare cod -3 <ErrorCircle />{" "}
            </p>
        );
}
