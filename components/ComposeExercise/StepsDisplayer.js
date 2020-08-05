import { useReducer, useMemo, createContext } from "react";
import { steps, fields, tests } from "./reducers";
import ComposeExerciseHeader from "./ComposeExerciseHeader";

import GeneralData from "./Steps/GeneralData";
import Content from "./Steps/Content";
import InputData from "./Steps/InputData";
import Tests from "./Steps/Tests";

export const UpdateStepContext = createContext(null);
export const FieldContext = createContext(null);

function CurrentStep({ step }) {
    switch (step) {
        case 1:
            return <GeneralData />;
        case 2:
            return <Content />;
        case 3:
            return <InputData />;
        case 4:
            return <Tests />;
        // case 5: return <GeneralData />
    }
}

export default function StepsDisplayer() {
    const [step, updateStep] = useReducer(steps.reducer, 4);
    const [generalData, setGeneralData] = useReducer(fields.reducer, fields.generalDataPart);
    const [contentData, setContentData] = useReducer(fields.reducer, fields.contentPart);
    const [inputData, setInputData] = useReducer(fields.reducer, fields.inputDataPart);
    const [testsData, setTestsData] = useReducer(tests.reducer, tests.initalState);
    console.log("%c tests data state from main component", "color: gold", testsData);
    return (
        <>
            <div className="compose-exercise-steps">
                <FieldContext.Provider
                    value={{
                        generalData,
                        setGeneralData,
                        contentData,
                        setContentData,
                        inputData,
                        setInputData,
                        testsData,
                        setTestsData,
                    }}
                >
                    <UpdateStepContext.Provider value={updateStep}>
                        <ComposeExerciseHeader step={step} />
                    </UpdateStepContext.Provider>

                    {useMemo(
                        () => (
                            <CurrentStep step={step} />
                        ),
                        [step]
                    )}
                </FieldContext.Provider>
            </div>
            <style jsx>{`
                .compose-exercise-steps {
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

/*
 * TODOS:
 * hash contents with key (officialSolution, hint etc so no more unnecessary db queries)
 * build more from figma
 */
