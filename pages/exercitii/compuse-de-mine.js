import { createContext, useReducer } from "react";

import ExercisesComposedByMe from "../../components/ComposeExercise/ExercisesComposedByMe";
import StepsDisplayer from "../../components/ComposeExercise/StepsDisplayer";
import { composeExercisesView } from "../../components/ComposeExercise/reducers";
import HasAuthentication from "../../components/utils/HasAuthentication";
import getAuthInfo from "../../utils/getAuthInfo";
import strippedDownResponses from "../../utils/strippedDownResponses";
import { getMultipleExercisesData } from "../../utils/getExerciseData";
export const ComposeExercisesViewContext = createContext(null);

function exitWith(err) {
    return { props: { authenticated: false, userData: null, err } };
}

export async function getServerSideProps({ req, res }) {
    const { authenticated, userData, err } = await getAuthInfo(req, res);
    if (!authenticated) return exitWith(err);

    const { data: exercisesData, err: exercisesDataErr } = await getMultipleExercisesData({
        lookAfter: { author: `${userData.name} ${userData.surname}` },
        fieldsToExclude: strippedDownResponses.compactExercise,
    });

    if (exercisesDataErr)
        return {
            props: {
                authenticated: true,
                exercisesData: [],
                err: exercisesDataErr === "Nu au fost găsite exerciții de acest tip" ? null : err,
            },
        };

    return { props: { authenticated: true, exercisesData, err } };
}

export default function CompuseDeMine({ authenticated, exercisesData, err }) {
    const [isComposeExercisesOpen, updateView] = useReducer(
        composeExercisesView.reducer,
        composeExercisesView.initialState
    );

    return (
        <HasAuthentication authState={{ authenticated, err }}>
            <div className="composed-by-me">
                <ComposeExercisesViewContext.Provider value={updateView}>
                    {!isComposeExercisesOpen ? (
                        <ExercisesComposedByMe exercisesData={exercisesData} />
                    ) : (
                        <StepsDisplayer />
                    )}
                </ComposeExercisesViewContext.Provider>
            </div>
            <style jsx>{`
                .composed-by-me {
                    width: 90%;
                    margin: auto;
                    padding: 150px 0;
                }
            `}</style>
        </HasAuthentication>
    );
}
