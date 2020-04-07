import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExerciseInfo({
    needsHint,
    userSolutions,
    officialSolution,
    dataInput = {},
    importantData = [],
    inputExample = {},
    children,
}) {
    return (
        <>
            <div className="exercise-info">
                <HeaderTitleExercise
                    needsHint={needsHint}
                    userSolutions={userSolutions}
                    officialSolution={officialSolution}
                />
                <p className="exercise-info__description">{children}</p>
                <h3 className="exercise-info__data-input">
                    Date de intrare: <span>{dataInput.toInput}</span>
                </h3>
                <h3 className="exercise-info__data-input">
                    Date de ieșire: <span>{dataInput.toOutput}</span>
                </h3>

                <HeaderSection title="Obvservații" />
                <ul className="exercise-info__important-data">
                    {importantData.map((datum, i) => (
                        <li key={`important-datum_${i}`}>{datum}</li>
                    ))}
                </ul>

                <HeaderSection title="Exemplu" />
                <h3 className="exercise-info__input-example">
                    Intrare <FontAwesomeIcon icon="arrow-left" />
                </h3>
                <code>{inputExample.input}</code>
                <h3 className="exercise-info__input-example">
                    Ieșire <FontAwesomeIcon icon="arrow-right" />
                </h3>
                <code>{inputExample.output}</code>

                <HeaderSection title="Soluție" />
            </div>
            <style jsx>{`
                .exercise-info {
                    width: 90%;
                    margin: auto;
                    color: var(--text-primary);
                }

                .exercise-info__description {
                    margin-bottom: 30px;
                    line-height: 30px;
                }

                .exercise-info__data-input {
                    color: var(--accent-secondary);
                }

                .exercise-info__data-input span {
                    color: var(--text-primary);
                    font-weight: normal;
                }

                .exercise-info__important-data {
                    font-size: var(--font-smaller);
                    padding-left: 20px;
                    line-height: 30px;
                }

                .exercise-info__input-example {
                    margin: 10px 0;
                }

                :global(.exercise-info__input-example svg) {
                    width: 15px !important;
                    margin-left: 7px;
                    margin-bottom: 2px;
                    height: 15px !important;
                }

                code {
                    display: block;
                    white-space: pre-line;
                    padding: 10px;
                    width: 100%;
                    background-color: var(--background-secondary);
                    border: 2px solid var(--accent-primary);
                    border-radius: 15px;
                    margin-bottom: 40px;
                }
            `}</style>
        </>
    );
}

function HeaderSection({ title, children = "" }) {
    return (
        <>
            <div className="header-section">
                <h2>{title}</h2>
                {children}
                <hr />
            </div>

            <style jsx>{`
                .header-section {
                    margin-top: 50px;
                }

                h2 {
                    display: inline-block;
                    margin-right: 30px;
                    vertical-align: middle;
                }

                hr {
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
            `}</style>
        </>
    );
}

function HeaderTitleExercise({ needsHint, userSolutions, officialSolution }) {
    return (
        <>
            <HeaderSection title="Enunțul exercițiului">
                {needsHint && (
                    <button className="button--outline">Indicii</button>
                )}
                {userSolutions && (
                    <button className="button--outline">
                        Soluțiile tale: {userSolutions}
                    </button>
                )}
                {officialSolution && (
                    <button className="button--outline">
                        Soluția oficială
                    </button>
                )}
            </HeaderSection>
            <style jsx>{`
                button {
                    display: inline-block;
                    margin-right: 30px;
                    margin-top: 20px;
                }
            `}</style>
        </>
    );
}
