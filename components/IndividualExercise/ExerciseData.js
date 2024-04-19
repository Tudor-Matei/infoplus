import { useCallback, useContext, useReducer, useRef, useState } from "react";
import ExerciseInfo from "./ExerciseInfo";
import HeaderInfo from "./HeaderInfo";
import Results from "./ResultsArea";
import SolutionArea from "./SolutionArea";

import { LoggedInDataContext } from "../../pages/_app";
import { ExerciseInfoData, SolutionAreaContext } from "../../pages/exercitiu/[title]";
import chapters from "../../utils/chapters";
import ErrorComponent from "../_globals/ErrorComponent";
import Loading from "../_globals/Loading";
import { exerciseStatsReducer, hiddenExerciseDataReducer, testsStatsReducer, userSolutionsReducer } from "./reducers";

export default function ExerciseData({ exerciseData, userSolutions: userSolutionsProp, authenticated, userData }) {
  const [needsResultsComponent, setResultsComponent] = useState(false);
  const toggleResultsComponent = useCallback(
    () => setResultsComponent(!needsResultsComponent),
    [needsResultsComponent]
  );

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
