import Exercise from "../../components/ExercisesList/Exercise";
import PrimaryComposeHeader from "./PrimaryHeader";

export default function ExercisesComposedByMe({ setComposeExercisesView }) {
    return (
        <>
            <div className="exercises-composed-by-me">
                <PrimaryComposeHeader
                    exercisesComposedByMe={483}
                    solutionsAttemptedTotal={37192}
                    setComposeExercisesView={setComposeExercisesView}
                />
                {Array(5).fill(
                    <Exercise
                        title="ScriereEcran"
                        datePublished="21 mai 2017"
                        sentSolutions={294}
                        difficulty={1}
                        exerciseId={1}
                        compact
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque totam omnis
                        corporis ab magnam aspernatur iste molestiae illo velit vitae qui magni
                        recusandae, doloribus libero provident nihil iusto quibusdam repellat!
                    </Exercise>
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
