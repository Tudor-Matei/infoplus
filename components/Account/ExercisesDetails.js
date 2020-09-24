export default function ExercisesDetails({ solvedFailedExercises }) {
    return (
        <div className="exercises-account">
            <ExercisesPanel
                title="Rezolvate"
                amountOfExercises={solvedFailedExercises[0]}
                solvedState="solved"
            />
            <ExercisesPanel
                title="Nerezolvate"
                amountOfExercises={solvedFailedExercises[1]}
                solvedState="unsolved"
            />

            <style jsx>{`
                .exercises-account {
                    height: auto;
                    display: flex;
                    flex-direction: column;
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
            `}</style>
        </div>
    );
}

function ExercisesPanel({ title, amountOfExercises, solvedState }) {
    return (
        <div className="exercises-account__panel">
            <div className="exercises-account__title-container">
                <h3 className="exercises-account__exercises-title">{title}</h3>
                <h3
                    className={`exercises-account__exercises-amount exercises-amount--${solvedState}`}
                >
                    {amountOfExercises}
                </h3>
            </div>
            <hr />
            <style jsx>{`
                .exercises-account__panel {
                    min-height: 100%;
                    background-color: var(--background-secondary);
                    border-radius: 20px;
                    padding: 30px;
                    margin-bottom: 30px;

                    color: var(--text-primary);
                }

                .exercises-account__title-container {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }

                :global(.exercises-account__icon) {
                    height: 12px;
                    margin-left: 10px;
                    vertical-align: initial;
                }

                .exercises-amount--solved {
                    color: var(--accent-primary);
                }

                .exercises-amount--unsolved {
                    color: var(--accent-secondary);
                }

                }
            `}</style>
        </div>
    );
}
