import { FieldContext } from "../StepsDisplayer";
import { useContext } from "react";
import InputArea from "../../utils/InputArea";
import { inputDataStepFields } from "../../../utils/lengthBoundariesForFields";

export default function InputData() {
    const { inputData, setInputData } = useContext(FieldContext);

    return (
        <>
            <InputArea
                title="Date de intrare"
                inputType="multiline"
                eventHandler={({ target: { value } }) => setInputData({ type: "inputData", value })}
                inputProps={{
                    required: true,
                    minLength: inputDataStepFields.inputData[0],
                    maxLength: inputDataStepFields.inputData[1],
                    defaultValue: inputData.inputData,
                }}
            />
            <InputArea
                title="Date de ieșire"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setInputData({ type: "outputData", value })
                }
                inputProps={{
                    required: true,
                    minLength: inputDataStepFields.outputData[0],
                    maxLength: inputDataStepFields.outputData[1],
                    defaultValue: inputData.outputData,
                }}
            />
            <InputArea
                title="Exemplu date de intrare"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setInputData({ type: "exampleInputData", value })
                }
                inputProps={{
                    required: true,
                    minLength: inputDataStepFields.exampleInputData[0],
                    maxLength: inputDataStepFields.exampleInputData[1],
                    defaultValue: inputData.exampleInputData,
                }}
            />
            <InputArea
                title="Exemplu date de ieșire"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setInputData({ type: "exampleOutputData", value })
                }
                inputProps={{
                    required: true,
                    minLength: inputDataStepFields.exampleOutputData[0],
                    maxLength: inputDataStepFields.exampleOutputData[1],
                    defaultValue: inputData.exampleOutputData,
                }}
            />
        </>
    );
}
