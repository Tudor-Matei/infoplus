import HeaderInfo from "../../components/IndividualExercise/HeaderInfo";
import ExerciseInfo from "../../components/IndividualExercise/ExerciseInfo";
import SolutionArea from "../../components/IndividualExercise/SolutionArea";
import Results from "../../components/IndividualExercise/ResultsArea";

import { useState } from "react";
export default function Exercitiu() {
    const [needsResultsComponent, setResultsComponent] = useState(true);
    const toggleResultsComponent = () =>
        setResultsComponent(!needsResultsComponent);

    return (
        <>
            <HeaderInfo
                title="ScriereEcran"
                isSolved
                difficulty={1}
                authorName="Jane Doe"
                maxExecutionTime={0.1}
                maxMemoryConsumption={4}
                source="Model bacalaureat 2009"
                sentSolutions={291}
            />
            <ExerciseInfo
                needsHint
                userSolutions={2}
                officialSolution
                dataInput={{
                    toInput: "doua numere naturale a si b",
                    toOutput: "suma acestor numere",
                }}
                importantData={[
                    "un test",
                    "doi testi",
                    "trei tresti",
                    "4 chestii",
                ]}
                inputExample={{ input: "24 2", output: "Test 1234 test test" }}
            >
                Incididunt aute ex amet quis sint elit. Do mollit in Lorem eu
                proident elit cupidatat aliquip eu irure exercitation. Laborum
                ex minim nostrud duis cupidatat quis est proident et nulla
                deserunt sint Lorem. Eu exercitation sunt et incididunt eu
                nostrud ad ea velit tempor laborum. Mollit pariatur consectetur
                ad elit. Incididunt aute ex amet quis sint elit. Do mollit in
                Lorem eu proident elit cupidatat aliquip eu irure exercitation.
                Laborum ex minim nostrud duis cupidatat quis est proident et
                nulla deserunt sint Lorem. Eu exercitation sunt et incididunt eu
                nostrud ad ea velit tempor laborum. Mollit pariatur consectetur
                ad elit.
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
