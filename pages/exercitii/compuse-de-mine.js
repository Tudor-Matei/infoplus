import { createContext, useReducer } from "react";

import ExercisesComposedByMe from "../../components/ComposeExercise/ExercisesComposedByMe";
import StepsDisplayer from "../../components/ComposeExercise/StepsDisplayer";
import { composeExercisesView } from "../../components/ComposeExercise/reducers";

export const ComposeExercisesViewContext = createContext(null);
export default function CompuseDeMine() {
    const [isComposeExercisesOpen, updateView] = useReducer(
        composeExercisesView.reducer,
        // composeExercisesView.initialState
        true
    );

    return (
        <>
            <div className="composed-by-me">
                <ComposeExercisesViewContext.Provider value={updateView}>
                    {!isComposeExercisesOpen ? <ExercisesComposedByMe /> : <StepsDisplayer />}
                </ComposeExercisesViewContext.Provider>
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
