import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExercisesDetails() {
    return (
        <div className="exercises-account">
            <SolvedExercises />
            <UnsolvedExercises />

            <style jsx>{`
                .exercises-account {
                    width: 70%;
                    height: auto;
                    display: flex;
                    justify-content: space-between;
                    margin: 30px auto 150px;
                    animation: comeIn 300ms ease;
                }

                @keyframes comeIn {
                    from {
                        transform: translateX(15px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @media screen and (max-width: 930px) {
                    .exercises-account {
                        flex-direction: column;
                    }
                }

                @media screen and (max-width: 768px) {
                    .exercises-account {
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    );
}

function ExercisesPanel({ title, amountOfExercises, children, solvedState }) {
    return (
        <div className="exercises-account__panel">
            <div className="exercises-account__title-container">
                <h3 className="exercises-account__exercises-title">
                    {title}
                    <FontAwesomeIcon
                        icon="external-link-alt"
                        className="exercises-account__icon"
                    />
                </h3>
                <h3
                    className={`exercises-account__exercises-amount exercises-amount--${solvedState}`}
                >
                    {amountOfExercises}
                </h3>
            </div>
            <hr />
            <ul className="exercises-account__details">{children}</ul>
            <style jsx>{`
                .exercises-account__panel {
                    width: 45%;
                    min-height: 100%;
                    background-color: var(--background-secondary);
                    border-radius: 20px;
                    padding: 45px;
                    color: var(--text-primary);
                }

                .exercises-account__title-container {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }

                .exercises-account__exercises-title {
                    cursor: pointer;
                }

                :global(.exercises-account__icon) {
                    height: 12px;
                    margin-left: 10px;
                    vertical-align: initial;
                }

                .exercises-account__details {
                    padding-left: 17px;
                }

                .exercises-amount--solved {
                    color: var(--accent-primary);
                }

                .exercises-amount--unsolved {
                    color: var(--accent-secondary);
                }

                @media screen and (max-width: 930px) {
                    .exercises-account__panel {
                        width: 100%;
                        margin-bottom: 50px;
                    }
                }
            `}</style>
        </div>
    );
}

function SolvedExercises() {
    return (
        <>
            <ExercisesPanel
                title="Rezolvate"
                amountOfExercises={470}
                solvedState="solved"
            >
                <li>
                    Ultima problema rezolvata:{" "}
                    <span className="underlined">27 decembrie</span>
                </li>
                <li>
                    Cea mai activa perioada:{" "}
                    <span className="underlined">
                        1 ianuarie - 27 februarie
                    </span>
                </li>
                <li>
                    Cel mai ridicat grad de dificultate al unei probleme
                    rezolvate:{" "}
                    <span className="underlined type--challenging">
                        PROVOCATOR
                    </span>
                </li>
            </ExercisesPanel>
            <style jsx>{`
                li {
                    padding: 15px 0;
                }

                li span {
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}

function UnsolvedExercises() {
    return (
        <>
            <ExercisesPanel
                title="Nerezolvate"
                amountOfExercises={291}
                solvedState="unsolved"
            >
                <li>
                    Ultima problema nerezolvata:{" "}
                    <span className="underlined">27 decembrie</span>
                </li>
                <li>
                    Cel mai ridicat grad de dificultate al unei probleme
                    nerezolvate:{" "}
                    <span className="underlined type--hard">DIFICIL</span>
                </li>
            </ExercisesPanel>
            <style jsx>{`
                li {
                    padding: 15px 0;
                }

                li span {
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}
