import Exercise from "../../components/ExercisesList/Exercise";
import PrimaryComposeHeader from "./PrimaryHeader";
import { useCallback } from "react";
import ErrorComponent from "../_globals/ErrorComponent";

export default function ExercisesComposedByMe({ exercisesData }) {
    const solutionsAttemptedTotal = useCallback(() => {
        return exercisesData.reduce((amount, { sentSolutions }) => amount + sentSolutions, 0);
    }, [exercisesData]);
    return (
        <>
            <div className="exercises-composed-by-me">
                <PrimaryComposeHeader
                    exercisesComposedByMe={exercisesData.length}
                    solutionsAttemptedTotal={solutionsAttemptedTotal()}
                />
                {exercisesData.length !== 0 ? (
                    exercisesData.map(
                        ({ title, datePublished, sentSolutions, difficulty, content }, i) => (
                            <Exercise
                                title={title}
                                datePublished={datePublished}
                                sentSolutions={sentSolutions}
                                difficulty={difficulty}
                                key={`own-exercise_${i}`}
                                compact
                            >
                                {content}
                            </Exercise>
                        )
                    )
                ) : (
                    <ErrorComponent>Nu ai compus exerciții până acum.</ErrorComponent>
                )}
            </div>
            <style jsx>{`
                .exercises-composed-by-me {
                    display: flex;
                    align-content: center;
                    flex-wrap: wrap;
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
