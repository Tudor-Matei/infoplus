import HeaderInfo from "../../components/IndividualExercise/HeaderInfo";
import ExerciseInfo from "../../components/IndividualExercise/ExerciseInfo";
import SolutionArea from "../../components/IndividualExercise/SolutionArea";
import Results from "../../components/IndividualExercise/ResultsArea";

import { useState, useContext } from "react";
import { getSingleExerciseData } from "../../utils/getExerciseData";
import { ShowAlertContext } from "../_app";
import useComponentDidMount from "../../components/_hooks/componentDidMount";
import { useRouter } from "next/router";
import strippedDownResponses from "../../utils/strippedDownResponses";

function propsWithError(err) {
    return { props: { data: null, err } };
}

export async function getServerSideProps({ params }) {
    if (isNaN(params.id)) return propsWithError("Id-ul este invalid.");

    const { data, err } = await getSingleExerciseData({
        exerciseId: parseInt(params.id),
        fieldsToExclude: strippedDownResponses.singleExercise,
    });

    if (err) return propsWithError(err);

    return { props: { exerciseData: data, err: null } };
}

export default function Exercitiu({ exerciseData, err }) {
    const [needsResultsComponent, setResultsComponent] = useState(false);
    const toggleResultsComponent = () => setResultsComponent(!needsResultsComponent);
    const modifyAlert = useContext(ShowAlertContext);
    const router = useRouter();

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
                isSolved
                difficulty={exerciseData.difficulty}
                authorName={exerciseData.author}
                maxExecutionTime={exerciseData.maxExecutionTime / 1000}
                maxMemoryConsumption={exerciseData.maxMemory}
                source={exerciseData.source}
                sentSolutions={Number(exerciseData.sentSolutions).toLocaleString()}
            />
            <ExerciseInfo
                needsHint
                userSolutions={2}
                officialSolution
                dataInput={{
                    toInput: exerciseData.inputData,
                    toOutput: exerciseData.outputData,
                }}
                importantData={exerciseData.mentions.split("\\n ")}
                inputExample={{
                    input: exerciseData.exampleInputData,
                    output: exerciseData.exampleOutputData,
                }}
            >
                {exerciseData.content}
            </ExerciseInfo>
            {needsResultsComponent ? (
                /* 
                CODURI:
                * -1 limita de timp
                * -2 limita de memorie
                * -3 alte erori
                */
                <Results
                    toggleResultsComponent={toggleResultsComponent}
                    totalPointsGained={75}
                    testResults={[
                        {
                            didPass: true,
                            timeTaken: 0.11,
                            memoryUsed: 0.25,
                            failureCode: null,
                        },
                        {
                            didPass: false,
                            timeTaken: 0.11,
                            memoryUsed: 0.25,
                            failureCode: -1,
                        },
                        {
                            didPass: true,
                            timeTaken: 0.11,
                            memoryUsed: 0.25,
                            failureCode: null,
                        },
                        {
                            didPass: false,
                            timeTaken: 0.11,
                            memoryUsed: 0.25,
                            failureCode: -2,
                        },
                        {
                            didPass: false,
                            timeTaken: 0.11,
                            memoryUsed: 0.25,
                            failureCode: -3,
                        },
                    ]}
                />
            ) : (
                <SolutionArea toggleResultsComponent={toggleResultsComponent} />
            )}
        </>
    );
}
