import { useContext } from "react";
import { FieldContext } from "../StepsDisplayer";
import InputArea from "../../utils/InputArea";
import { contentDataStepBoundaries } from "../../../utils/lengthBoundariesForFields";

export default function Content() {
  const { contentData, setContentData } = useContext(FieldContext);
  return (
    <>
      <InputArea title="Enunțul exercițiului">
        <textarea
          name="content"
          required
          minLength={contentDataStepBoundaries.content[0]}
          maxLength={contentDataStepBoundaries.content[1]}
          defaultValue={contentData.content}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setContentData({ type: "content", value })}
        ></textarea>
      </InputArea>
      <InputArea title="Observații">
        <textarea
          name="mentions"
          required
          minLength={contentDataStepBoundaries.mentions[0]}
          maxLength={contentDataStepBoundaries.mentions[1]}
          defaultValue={contentData.mentions}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setContentData({ type: "mentions", value })}
        ></textarea>
      </InputArea>
      <InputArea title="Indicii">
        <textarea
          name="hint"
          required
          minLength={contentDataStepBoundaries.hint[0]}
          maxLength={contentDataStepBoundaries.hint[1]}
          defaultValue={contentData.hint}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setContentData({ type: "hint", value })}
        ></textarea>
      </InputArea>
      <InputArea title="Soluția oficială">
        <textarea
          name="officialSolution"
          required
          minLength={contentDataStepBoundaries.officialSolution[0]}
          maxLength={contentDataStepBoundaries.officialSolution[1]}
          defaultValue={contentData.officialSolution}
          cols="30"
          rows="10"
          onChange={({ target: { value } }) => setContentData({ type: "officialSolution", value })}
        ></textarea>
      </InputArea>
    </>
  );
}
