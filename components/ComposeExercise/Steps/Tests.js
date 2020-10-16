import { useContext, useEffect, useRef } from "react";
import { FieldContext } from "../StepsDisplayer";

import IconBubble from "../../utils/IconBubble";
import InputArea from "../../utils/InputArea";
import { testsDataStepBoundaries } from "../../../utils/lengthBoundariesForFields";

export default function Tests() {
  const { testsData, setTestsData } = useContext(FieldContext);

  return (
    <>
      <div className="tests-part">
        <div className="tests-primary-data">
          <h2>Teste create: {testsData.length}</h2>
          <p>Număr de teste minime permise: 1</p>
          <p>Număr de teste maxime permise: 10</p>
        </div>

        <div className="tests">
          {testsData.map(({ input, expectedOutput }, i) => (
            <Test key={`test_${i}`} number={i + 1} setTestsData={setTestsData} inputValues={[input, expectedOutput]} />
          ))}
          {testsData.length < 10 && (
            <IconBubble
              text="+"
              className="icon-bubble--big-button-add-test"
              onClick={() => setTestsData({ type: "add", input: "", expectedOutput: "" })}
            />
          )}
        </div>
      </div>

      <style jsx>{`
        .tests-part {
          margin-left: -20px;
          color: var(--text-primary);
        }
        .tests-primary-data {
          margin-left: 20px;
          margin-bottom: 40px;
        }
        .tests {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
        }

        :global(.icon-bubble--big-button-add-test) {
          width: 100px !important;
          height: 100px !important;
          font-size: 5em;
          vertical-align: middle;
          background-color: var(--accent-primary) !important;
          color: var(--text-primary) !important;
          margin-left: 25px;
        }

        :global(.icon-bubble--big-button-add-test:hover) {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}

function Test({ number, setTestsData, inputValues }) {
  return (
    <>
      <div className="test">
        <header>
          <h3>Testul {number}</h3>
          {number !== 1 && (
            <IconBubble
              icon="trash"
              accent="failure-primary"
              onClick={() => setTestsData({ type: "remove", number })}
            />
          )}
        </header>
        <InputArea title="Date de intrare">
          <textarea
            name="input"
            required
            minLength={testsDataStepBoundaries.input[0]}
            maxLength={testsDataStepBoundaries.input[1]}
            value={inputValues[0]}
            cols="30"
            rows="10"
            onChange={({ target: { value } }) => setTestsData({ type: "populate", number, inputType: "input", value })}
          ></textarea>
        </InputArea>

        <InputArea title="Date de ieșire așteptate">
          <textarea
            name="expectedOutput"
            required
            minLength={testsDataStepBoundaries.expectedOutput[0]}
            maxLength={testsDataStepBoundaries.expectedOutput[1]}
            value={inputValues[1]}
            cols="30"
            rows="10"
            onChange={({ target: { value } }) =>
              setTestsData({ type: "populate", number, inputType: "expectedOutput", value })
            }
          ></textarea>
        </InputArea>
      </div>
      <style jsx>{`
        .test {
          flex: 1 0 auto;
          max-width: 600px;
          min-width: 300px;
          background-color: var(--background-secondary);
          border-radius: 25px;
          padding: 20px;
          box-shadow: var(--box-shadow);
          margin: 0 20px 40px;
          animation: slideFromRight 300ms ease forwards;
        }

        @keyframes slideFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 2px solid var(--accent-primary);
          margin-bottom: 25px;
        }
      `}</style>
    </>
  );
}
