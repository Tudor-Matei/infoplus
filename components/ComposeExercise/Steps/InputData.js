import { FieldContext } from "../StepsDisplayer";
import { useContext } from "react";
import InputArea from "../../utils/InputArea";
import { inputDataStepBoundaries } from "../../../utils/lengthBoundariesForFields";

export default function InputData() {
  const { inputData, setInputData } = useContext(FieldContext);

  return (
    <>
      <InputArea title="Date de intrare">
        <textarea
          name="inputData"
          required
          minLength={inputDataStepBoundaries.inputData[0]}
          minLength={inputDataStepBoundaries.inputData[1]}
          defaultValue={inputData.inputData}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setInputData({ type: "inputData", value })}
        ></textarea>
      </InputArea>

      <InputArea title="Date de ieșire">
        <textarea
          name="outputData"
          required
          minLength={inputDataStepBoundaries.outputData[1]}
          minLength={inputDataStepBoundaries.outputData[0]}
          defaultValue={inputData.outputData}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setInputData({ type: "outputData", value })}
        ></textarea>
      </InputArea>

      <InputArea title="Exemplu date de intrare">
        <textarea
          name="exampleInputData"
          required
          minLength={inputDataStepBoundaries.exampleInputData[1]}
          minLength={inputDataStepBoundaries.exampleInputData[0]}
          defaultValue={inputData.exampleInputData}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setInputData({ type: "exampleInputData", value })}
        ></textarea>
      </InputArea>

      <InputArea title="Exemplu date de ieșire">
        <textarea
          name="exampleOutputData"
          required
          minLength={inputDataStepBoundaries.exampleInputData[1]}
          minLength={inputDataStepBoundaries.exampleInputData[0]}
          defaultValue={inputData.exampleOutputData}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setInputData({ type: "exampleOutputData", value })}
        ></textarea>
      </InputArea>
    </>
  );
}
