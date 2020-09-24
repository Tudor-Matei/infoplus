import { useContext } from "react";
import { FieldContext } from "../StepsDisplayer";
import InputArea from "../../utils/InputArea";
import { contentDataStepFields } from "../../../utils/lengthBoundariesForFields";

export default function Content() {
    const { contentData, setContentData } = useContext(FieldContext);
    return (
        <>
            <InputArea
                title="Enunțul exercițiului"
                inputType="multiline"
                eventHandler={({ target: { value } }) => setContentData({ type: "content", value })}
                inputProps={{
                    required: true,
                    minLength: contentDataStepFields.content[0],
                    maxLength: contentDataStepFields.content[1],
                    defaultValue: contentData.content,
                }}
            />
            <InputArea
                title="Observații"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setContentData({ type: "mentions", value })
                }
                inputProps={{
                    required: true,
                    minLength: contentDataStepFields.mentions[0],
                    maxLength: contentDataStepFields.mentions[1],
                    defaultValue: contentData.mentions,
                }}
            />
            <InputArea
                title="Indicii"
                inputType="multiline"
                eventHandler={({ target: { value } }) => setContentData({ type: "hint", value })}
                inputProps={{
                    required: true,
                    minLength: contentDataStepFields.hint[0],
                    maxLength: contentDataStepFields.hint[1],
                    defaultValue: contentData.hint,
                }}
            />
            <InputArea
                title="Soluția oficială"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setContentData({ type: "officialSolution", value })
                }
                inputProps={{
                    required: true,
                    minLength: contentDataStepFields.officialSolution[0],
                    maxLength: contentDataStepFields.officialSolution[1],
                    defaultValue: contentData.officialSolution,
                }}
            />
        </>
    );
}
