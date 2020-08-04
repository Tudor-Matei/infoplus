import { useContext } from "react";
import { FieldContext } from "../StepsDisplayer";
import InputArea from "../../utils/InputArea";

export default function Content() {
    const { contentData, setContentData } = useContext(FieldContext);
    return (
        <>
            <InputArea
                title="Enunțul exercițiului"
                inputType="multiline"
                eventHandler={({ target: { value } }) => setContentData({ type: "content", value })}
                inputProps={{ required: true, minLength: 10, defaultValue: contentData.content }}
            />
            <InputArea
                title="Observații"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setContentData({ type: "mentions", value })
                }
                inputProps={{ required: true, minLength: 5, defaultValue: contentData.mentions }}
            />
            <InputArea
                title="Indicii"
                inputType="multiline"
                eventHandler={({ target: { value } }) => setContentData({ type: "hints", value })}
                inputProps={{ required: true, minLength: 5, defaultValue: contentData.hints }}
            />
            <InputArea
                title="Soluția oficială"
                inputType="multiline"
                eventHandler={({ target: { value } }) =>
                    setContentData({ type: "officialSolution", value })
                }
                inputProps={{
                    required: true,
                    minLength: 10,
                    defaultValue: contentData.officialSolution,
                }}
            />
        </>
    );
}
