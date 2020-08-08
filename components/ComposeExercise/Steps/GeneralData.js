import InputArea from "../../utils/InputArea";
import chapters from "../../../utils/chapters";
import { useContext } from "react";
import { FieldContext } from "../StepsDisplayer";

export default function GeneralData() {
    const { generalData, setGeneralData } = useContext(FieldContext);

    return (
        <>
            <div className="general-data-step">
                <div className="input-field">
                    <InputArea
                        title="Titlu"
                        subtitle="Poate conține doar litere și cifre."
                        eventHandler={({ target: { value } }) =>
                            setGeneralData({ type: "title", value })
                        }
                        inputProps={{
                            required: true,
                            minLength: 3,
                            defaultValue: generalData.title,
                        }}
                    />
                    <CategoryInputs generalData={generalData} />
                </div>
                <div className="input-field">
                    <InputArea
                        title="Dificultate"
                        isSelect
                        optionValues={["Ușor", "Mediu", "Greu", "Dificil"]}
                        eventHandler={({ target: { selectedIndex } }) =>
                            setGeneralData({ type: "difficulty", value: selectedIndex + 1 })
                        }
                        inputProps={{ required: true }}
                    />
                    <InputArea
                        title="Timp maxim de execuție"
                        subtitle="Introduceți timpul maxim de execuție în milisecunde (100 millisecunde = 0.1 secunde)."
                        eventHandler={({ target: { value } }) =>
                            setGeneralData({ type: "maxExecutionTime", value: parseInt(value) })
                        }
                        inputType="number"
                        inputProps={{
                            required: true,
                            minLength: 2,
                            defaultValue: generalData.maxExecutionTime,
                        }}
                    />
                    <InputArea
                        title="Memorie maximă permisă"
                        subtitle="Memoria maximă permisă va fi exprimată în MB."
                        eventHandler={({ target: { value } }) =>
                            setGeneralData({ type: "maxMemory", value: parseInt(value) })
                        }
                        inputType="number"
                        inputProps={{
                            required: true,
                            minLength: 1,
                            defaultValue: generalData.maxMemory,
                        }}
                    />
                    <InputArea
                        title="Sursă"
                        eventHandler={({ target: { value } }) =>
                            setGeneralData({ type: "source", value })
                        }
                        inputProps={{
                            required: true,
                            minLength: 5,
                            defaultValue: generalData.source,
                        }}
                    />
                </div>
            </div>

            <style jsx>{`
                .general-data-step {
                    display: flex;
                    justify-content: space-between;
                }

                .input-field {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .input-field:first-child {
                    margin-right: 50px;
                }
                .input-field:nth-child(2) {
                    margin-top: 20px;
                }

                @media screen and (max-width: 425px) {
                    .general-data-step {
                        flex-direction: column;
                    }

                    .input-field:first-child {
                        border-bottom: 2px solid var(--accent-primary);
                        padding-bottom: 20px;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </>
    );
}

function CategoryInputs({ generalData }) {
    const { setGeneralData } = useContext(FieldContext);
    return (
        <>
            <InputArea
                title="Clasă"
                isSelect
                optionValues={["IX", "X", "XI"]}
                eventHandler={({ target: { value: grade } }) => {
                    setGeneralData({
                        type: "multiple",
                        updateTheseFields() {
                            return {
                                grade: grade.toLowerCase(),
                                category: { title: chapters[grade][0].titleAlias, index: 0 },
                                subcategory: "0",
                            };
                        },
                    });
                }}
            />
            <InputArea
                title="Categorie"
                isSelect
                optionValues={chapters[generalData.grade].map(({ title }) => title)}
                eventHandler={({ target: { selectedIndex } }) => {
                    setGeneralData({
                        type: "multiple",
                        updateTheseFields() {
                            return {
                                category: {
                                    title: chapters[generalData.grade][selectedIndex].titleAlias,
                                    index: selectedIndex,
                                },
                                subcategory: "0",
                            };
                        },
                    });
                }}
                inputProps={{ required: true, minLength: 3 }}
            />
            <InputArea
                title="Subcategorie"
                isSelect
                optionValues={chapters[generalData.grade][generalData.category.index].subchapters}
                eventHandler={({ target: { selectedIndex } }) =>
                    setGeneralData({ type: "subcategory", value: `${selectedIndex}` })
                }
                inputProps={{ value: generalData.subcategory }}
            />
        </>
    );
}
