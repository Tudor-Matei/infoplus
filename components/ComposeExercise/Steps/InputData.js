import { FieldContext } from "../StepsDisplayer";
import { useContext } from "react";
import InputArea from "../../utils/InputArea";

export default function InputData() {
    const { inputData, setInputData } = useContext(FieldContext);

    return (
        <>
            <InputArea
                title="Date de intrare"
                inputType="multiline"
                eventHandler={({ target: { value } }) => setInputData({ type: "inputData", value })}
                inputProps={{ required: true, defaultValue: inputData.inputData }}
            />
            <InputArea
                title="Date de ieșire"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setInputData({ type: "outputData", value })
                }
                inputProps={{ required: true, defaultValue: inputData.outputData }}
            />
            <InputArea
                title="Exemplu date de intrare"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setInputData({ type: "exampleInputData", value })
                }
                inputProps={{
                    required: true,
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

                    defaultValue: inputData.exampleOutputData,
                }}
            />
        </>
    );
}
