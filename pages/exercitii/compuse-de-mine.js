import { useState } from "react";

import ExercisesComposedByMe from "../../components/ComposeExercise/ExercisesComposedByMe";
import ComposeExerciseSteps from "../../components/ComposeExercise/ComposeExerciseSteps";

export default function CompuseDeMine() {
    const [isComposeExercisesOpen, setComposeExercisesView] = useState(true);
    return (
        <>
            <div className="composed-by-me">
                {!isComposeExercisesOpen ? (
                    <ExercisesComposedByMe setComposeExercisesView={setComposeExercisesView} />
                ) : (
                    <ComposeExerciseSteps setComposeExercisesView={setComposeExercisesView} />
                )}
            </div>
            <style jsx>{`
                .composed-by-me {
                    width: 90%;
                    margin: auto;
                    padding: 150px 0;
                }
            `}</style>
        </>
    );
}
