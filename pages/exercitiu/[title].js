import { useRouter } from "next/router";
import { useState, useContext, useCallback, createContext, useReducer } from "react";

import useComponentDidMount from "../../components/_hooks/componentDidMount";
import ExerciseInfo from "../../components/IndividualExercise/ExerciseInfo";
import SolutionArea from "../../components/IndividualExercise/SolutionArea";
import HeaderInfo from "../../components/IndividualExercise/HeaderInfo";
import Results from "../../components/IndividualExercise/ResultsArea";
import ErrorComponent from "../../components/_globals/ErrorComponent";
import Loading from "../../components/_globals/Loading";

import { getSingleExerciseData, getHiddenExerciseData } from "../../utils/getExerciseData";
import performDatabaseOperation from "../../utils/performDatabaseOperation";
import strippedDownResponses from "../../utils/strippedDownResponses";
import getAuthInfo from "../../utils/getAuthInfo";

import { LoggedInDataContext, ShowAlertContext } from "../_app";

function propsWithError(err) {
    return { props: { exerciseData: null, authenticated: null, userData: null, err } };
}

export async function getServerSideProps({ req, res, params }) {
    if (!/[a-zA-Z0-9]/g.test(params.title))
        return propsWithError("Titlul exercițiului este invalid.");

    const { authenticated, userData, err: authErr } = await getAuthInfo(req, res);
    if (authErr) console.error(authErr); // nu vom stopa randarea paginii, deoarece vom lasa si cei nelogati sa vada exercitiul

    const { data: singleExerciseData, err: singleExerciseErr } = await getSingleExerciseData({
        title: params.title,
        fieldsToExclude: strippedDownResponses.singleExercise,
    });
    if (singleExerciseErr) return propsWithError(singleExerciseErr);

    // TODO: fa in /compile pentru a privatiza testele... sau encripteaza-le
    const { data: tests, err: errGettingTests } = await getHiddenExerciseData({
        exerciseId: singleExerciseData._id,
        fieldsToExclude: { tests: 1, _id: 0 },
    });
    if (errGettingTests) return propsWithError(errGettingTests);

    const { data: userSolutions, err: userSolutionsErr } = authenticated
        ? await performDatabaseOperation(async (db) => {
              const userSolutions = await db
                  .collection("solutions")
                  .find({
                      username: userData.username,
                      exerciseId: singleExerciseData._id,
                  })
                  .project({ _id: 0, exerciseId: 0 })
                  .toArray();

              return { data: userSolutions, err: null };
          })
        : { data: [], err: null };

    if (userSolutionsErr) return propsWithError(userSolutionsErr);

    return {
        props: {
            exerciseData: {
                ...singleExerciseData,
                _id: null,
                exerciseId: singleExerciseData._id.toHexString(),
                tests,
            },
            userSolutions,
            authenticated,
            userData,
            err: null,
        },
    };
}

export const SolutionAreaContext = createContext(null);
export const ExerciseInfoData = createContext(null);
export default function Exercitiu({
    exerciseData,
    userSolutions: userSolutionsProp,
    authenticated,
    userData,
    err,
}) {
    const [needsResultsComponent, setResultsComponent] = useState(false);
    const toggleResultsComponent = useCallback(() => setResultsComponent(!needsResultsComponent), [
        needsResultsComponent,
    ]);
    const [isLoading, setLoading] = useState(false);
    const [userSolutions, setUserSolutions] = useReducer(
        (state, action) => [...state, action.value],
        userSolutionsProp
    );

    const [exerciseStats, updateExerciseStats] = useReducer(
        (state, action) => ({ ...state, [action.type]: action.value }),
        {
            isSolved: userSolutions.some(({ testsPoints }) => testsPoints === 100),
            sentSolutions: exerciseData.sentSolutions,
            needsHint: userSolutions.length > 1,
            userSolutions: userSolutions.length,
        }
    );
    const [testsStats, updateTestsStats] = useReducer(
        (state, action) => ({ ...state, [action.type]: action.value }),
        {
            testsResults: [],
            testsPoints: 0,
        }
    );

    // TODO: move reducers to own file

    const [hiddenExerciseData, setHiddenExerciseData] = useReducer(
        (_, action) => ({ ...action.value }),
        null
    );

    // TODO: transforma in useReducer
    const modifyAlert = useContext(ShowAlertContext);
    const router = useRouter();
    const { isAuthenticated: isAuthenticatedFromState } = useContext(LoggedInDataContext);

    useComponentDidMount(() => {
        if (err)
            modifyAlert({
                isVisible: true,
                props: { type: 0, children: err },
                customToggleHandler: () => router.push("/exercitii"),
            });
    });
    if (err) return null;

    return (
        <>
            <HeaderInfo
                title={exerciseData.title}
                isSolved={exerciseStats.isSolved}
                difficulty={exerciseData.difficulty}
                authorName={exerciseData.author}
                maxExecutionTime={exerciseData.maxExecutionTime / 1000}
                maxMemoryConsumption={exerciseData.maxMemory}
                source={exerciseData.source}
                sentSolutions={Number(exerciseStats.sentSolutions).toLocaleString()}
            />
            <ExerciseInfoData.Provider
                value={{
                    exerciseId: exerciseData.exerciseId,
                    hiddenExerciseData,
                    setHiddenExerciseData,
                    exerciseStats,
                    userSolutions,
                }}
            >
                <ExerciseInfo
                    needsHint={exerciseStats.needsHint}
                    userSolutions={exerciseStats.userSolutions}
                    officialSolution={exerciseStats.isSolved}
                    dataInput={{
                        toInput: exerciseData.inputData,
                        toOutput: exerciseData.outputData,
                    }}
                    mentions={exerciseData.mentions.split("\n")}
                    inputExample={{
                        input: exerciseData.exampleInputData,
                        output: exerciseData.exampleOutputData,
                    }}
                >
                    {exerciseData.content}
                </ExerciseInfo>
            </ExerciseInfoData.Provider>
            {!authenticated && !isAuthenticatedFromState ? (
                <ErrorComponent>Pentru a trimite soluții, trebuie să vă logați.</ErrorComponent>
            ) : isLoading ? (
                <Loading style={{ marginTop: "60px" }} />
            ) : needsResultsComponent ? (
                /* 
                CODURI:
                * -1 limita de timp
                * -2 limita de memorie
                * -3 alte erori
                */
                <Results
                    toggleResultsComponent={toggleResultsComponent}
                    testsResults={testsStats.testsResults}
                    testsPoints={testsStats.testsPoints}
                />
            ) : (
                <SolutionAreaContext.Provider
                    value={{
                        setLoading,
                        testsStats,
                        updateTestsStats,
                        exerciseStats,
                        updateExerciseStats,
                        setUserSolutions,
                        exerciseId: exerciseData.exerciseId,
                        tests: exerciseData.tests,
                        maxExecutionTime: exerciseData.maxExecutionTime,
                        maxMemory: exerciseData.maxMemory,
                        userData,
                    }}
                >
                    <SolutionArea toggleResultsComponent={toggleResultsComponent} />
                </SolutionAreaContext.Provider>
            )}
        </>
    );
}
