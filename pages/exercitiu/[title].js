import { useRouter } from "next/router";
import { useState, useContext, useCallback, createContext, useReducer, useRef } from "react";

import useComponentDidMount from "../../components/_hooks/componentDidMount";
import ExerciseInfo from "../../components/IndividualExercise/ExerciseInfo";
import SolutionArea from "../../components/IndividualExercise/SolutionArea";
import HeaderInfo from "../../components/IndividualExercise/HeaderInfo";
import Results from "../../components/IndividualExercise/ResultsArea";
import ErrorComponent from "../../components/_globals/ErrorComponent";
import Loading from "../../components/_globals/Loading";

import { getSingleExerciseData, getHiddenExerciseData } from "../../utils/getExerciseData";
import performDatabaseOperation from "../../utils/performDatabaseOperation";
import getAuthInfo from "../../utils/getAuthInfo";

import { LoggedInDataContext, ShowAlertContext } from "../_app";
import {
  exerciseStatsReducer,
  hiddenExerciseDataReducer,
  testsStatsReducer,
  userSolutionsReducer,
} from "../../components/IndividualExercise/reducers";
import chapters from "../../utils/chapters";

function propsWithError(err) {
  return { props: { exerciseData: null, authenticated: null, userData: null, err } };
}

export async function getServerSideProps({ req, res, params }) {
  if (/[^a-zA-Z0-9]/g.test(params.title)) return propsWithError("Titlul exercițiului este invalid.");

  const { authenticated, userData, err: authErr } = await getAuthInfo(req, res);
  if (authErr) console.error(authErr); // nu vom stopa randarea paginii, deoarece vom lasa si cei nelogati sa vada exercitiul

  const { data: singleExerciseData, err: singleExerciseErr } = await getSingleExerciseData({
    title: params.title,
  });
  if (singleExerciseErr) return propsWithError(singleExerciseErr);

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
export default function Exercitiu({ exerciseData, userSolutions: userSolutionsProp, authenticated, userData, err }) {
  const createAlert = useContext(ShowAlertContext);
  const router = useRouter();

  if (err) {
    useComponentDidMount(() => {
      createAlert({
        ofType: "error",
        saying: err,
        onClose: () => router.push("/exercitii"),
      });
    });
    return null;
  }

  const [needsResultsComponent, setResultsComponent] = useState(false);
  const toggleResultsComponent = useCallback(() => setResultsComponent(!needsResultsComponent), [
    needsResultsComponent,
  ]);
  const [isLoading, setLoading] = useState(false);
  const [userSolutions, setUserSolutions] = useReducer(
    userSolutionsReducer.reducer,
    userSolutionsReducer.initialState(userSolutionsProp)
  );

  const [exerciseStats, updateExerciseStats] = useReducer(
    exerciseStatsReducer.reducer,
    exerciseStatsReducer.initialState({
      isSolved: userSolutions.some(({ testsPoints }) => testsPoints === 100),
      sentSolutions: exerciseData.sentSolutions,
      userSolutions: userSolutions.length,
    })
  );
  const [testsStats, updateTestsStats] = useReducer(testsStatsReducer.reducer, testsStatsReducer.initialState);

  const [hiddenExerciseData, setHiddenExerciseData] = useReducer(
    hiddenExerciseDataReducer.reducer,
    hiddenExerciseDataReducer.initialState
  );

  const { isAuthenticated: isAuthenticatedFromState } = useContext(LoggedInDataContext);
  const { current: correspondingChapter } = useRef(chapters[exerciseData.grade][exerciseData.category[1]]);
  const { current: exerciseLocation } = useRef({
    grade: exerciseData.grade,
    category: correspondingChapter.title,
    subcategory: correspondingChapter.subchapters[exerciseData.subcategory],
  });

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
        exerciseLocation={exerciseLocation}
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
          needsHint={exerciseStats.userSolutions > 1}
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
