import InputArea from "../../utils/InputArea";
import chapters from "../../../utils/chapters";
import { useContext, useRef } from "react";
import { FieldContext } from "../StepsDisplayer";
import { generalDataStepBoundaries } from "../../../utils/lengthBoundariesForFields";

export default function GeneralData() {
  return (
    <>
      <div className="general-data-step">
        <InputFields />
      </div>

      <style jsx>{`
        .general-data-step {
          display: flex;
          justify-content: space-between;
        }

        @media screen and (max-width: 425px) {
          .general-data-step {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}

function InputFields() {
  const { generalData, setGeneralData } = useContext(FieldContext);
  const { current: difficulties } = useRef(["Ușor", "Mediu", "Greu", "Dificil"]);

  return (
    <>
      <div className="input-field">
        <InputArea title="Titlu" subtitle="Poate conține doar litere și cifre.">
          <input
            required
            minLength={generalDataStepBoundaries.title[0]}
            maxLength={generalDataStepBoundaries.title[1]}
            defaultValue={generalData.title}
            onChange={({ target: { value } }) => setGeneralData({ type: "title", value })}
          />
        </InputArea>
        <CategoryInputs generalData={generalData} />
      </div>
      <div className="input-field">
        <InputArea title="Dificultate">
          <select
            name="Dificultate"
            title="Dificultate"
            value={difficulties[generalData.difficulty - 1]}
            onChange={({ target: { selectedIndex } }) =>
              setGeneralData({ type: "difficulty", value: selectedIndex + 1 })
            }
          >
            {difficulties.map((difficulty, i) => (
              <option key={`input-field__difficulty-${i}`}>{difficulty}</option>
            ))}
          </select>
        </InputArea>

        <InputArea
          title="Timp maxim de execuție"
          subtitle="Introduceți timpul maxim de execuție în milisecunde (100 millisecunde = 0.1 secunde)."
        >
          <input
            type="number"
            name="maxExecutionTime"
            title="Timp maxim de execuție"
            required
            minLength={generalDataStepBoundaries.maxExecutionTime[0]}
            maxLength={generalDataStepBoundaries.maxExecutionTime[1]}
            defaultValue={generalData.maxExecutionTime}
            onChange={({ target: { value } }) => setGeneralData({ type: "maxExecutionTime", value: parseInt(value) })}
          />
        </InputArea>

        <InputArea title="Memorie maximă permisă" subtitle="Memoria maximă permisă va fi exprimată în MB.">
          <input
            type="number"
            name="maxMemory"
            title="Memorie maximă permisă"
            required
            minLength={generalDataStepBoundaries.maxMemory[0]}
            maxLength={generalDataStepBoundaries.maxMemory[1]}
            defaultValue={generalData.maxMemory}
            onChange={({ target: { value } }) => setGeneralData({ type: "maxMemory", value: parseInt(value) })}
          />
        </InputArea>

        <InputArea title="Sursă">
          <input
            required
            minLength={generalDataStepBoundaries.source[0]}
            maxLength={generalDataStepBoundaries.source[1]}
            defaultValue={generalData.source}
            onChange={({ target: { value } }) => setGeneralData({ type: "source", value })}
          />
        </InputArea>
      </div>

      <style jsx>{`
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
          margin-top: 21px;
        }

        @media screen and (max-width: 425px) {
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
      <InputArea title="Clasă">
        <select
          name="Clasă"
          title="Clasă"
          value={generalData.grade.toUpperCase()}
          onChange={({ target: { value: grade } }) => {
            setGeneralData({
              type: "multiple",
              updateTheseFields() {
                const uglifiedGrade = grade.toLowerCase();
                return {
                  grade: uglifiedGrade,
                  category: [chapters[uglifiedGrade][0].titleAlias, "0"],
                  subcategory: "0",
                };
              },
            });
          }}
        >
          <option value="IX">IX</option>
          <option value="X">X</option>
          <option value="XI">XI</option>
        </select>
      </InputArea>

      <InputArea title="Categorie">
        <select
          name="Categorie"
          title="Categorie"
          onChange={({ target: { selectedIndex } }) => {
            setGeneralData({
              type: "multiple",
              updateTheseFields() {
                return {
                  category: [chapters[generalData.grade][selectedIndex].titleAlias, `${selectedIndex}`],
                  subcategory: "0",
                };
              },
            });
          }}
        >
          {chapters[generalData.grade].map(({ title }, i) => (
            <option key={`categorie_${i}`}>{title}</option>
          ))}
        </select>
      </InputArea>

      <InputArea
        title="Subcategorie"
        optionValues={chapters[generalData.grade][generalData.category[1]].subchapters}
        onChange={({ target: { selectedIndex } }) => setGeneralData({ type: "subcategory", value: `${selectedIndex}` })}
        inputProps={{ value: generalData.subcategory }}
      >
        <select name="Subcategorie" title="Subcategorie">
          {chapters[generalData.grade][generalData.category[1]].subchapters.map((subchapter, i) => (
            <option key={`subcategorie_${i}`}>{subchapter}</option>
          ))}
        </select>
      </InputArea>
    </>
  );
}
