import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState, useCallback } from "react";

import { SolutionAreaContext } from "../../pages/exercitiu/[title]";
import isEmpty from "validator/lib/isEmpty";
import { ShowAlertContext } from "../../pages/_app";
import { useRouter } from "next/router";
import formatMonth from "../../utils/formatMonth";
import omitKey from "../../utils/omitKey";

export default function SolutionArea({ toggleResultsComponent }) {
  const [solution, setSolution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const writeSolution = useCallback(({ target: { value } }) => setSolution(value), [solution]);

  return (
    <>
      <div className="solution-area">
        <h3>Incarcă soluția aici</h3>
        <p>
          Este recomandată verificarea codului într-un program corespunzător înainte de a fi postată, pentru a asigura
          inexistența erorilor de compilare sau de rezultat.
        </p>
        <textarea cols="30" rows="10" maxLength="50000" value={solution} onChange={writeSolution}></textarea>

        <div className="send-solution">
          <SendSolutionButton
            setErrorMessage={setErrorMessage}
            solution={solution}
            toggleResultsComponent={toggleResultsComponent}
          />
          {errorMessage && (
            <p className="error-message">
              {errorMessage} <FontAwesomeIcon icon="times-circle" />
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        h3,
        p:not(.error-message) {
          color: var(--text-primary);
        }

        p {
          margin-bottom: 50px;
        }

        .send-solution {
          text-align: right;
          height: 100px;
        }

        .error-message {
          margin-bottom: 0;
        }

        .solution-area {
          width: 90%;
          margin: 0 auto 50px;
          position: relative;
          animation: comeIn 300ms ease forwards;
        }

        textarea {
          min-width: 100%;
          max-width: 100%;
          min-height: 400px;
          background-color: var(--background-secondary);
          border-radius: 15px;
          padding: 10px;
          margin-bottom: 25px;
          color: var(--text-primary);
          border: 2px solid var(--accent-primary);
        }

        @keyframes comeIn {
          from {
            transform: translateX(15px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

function SendSolutionButton({ solution, setErrorMessage, toggleResultsComponent }) {
  const {
    setLoading,
    updateTestsStats,
    exerciseStats,
    updateExerciseStats,
    exerciseId,
    userData,
    tests,
    setUserSolutions,
    maxExecutionTime,
    maxMemory,
  } = useContext(SolutionAreaContext);

  const createAlert = useContext(ShowAlertContext);
  const router = useRouter();

  const sendSolution = useCallback(() => {
    if (isEmpty(solution)) return setErrorMessage("Nici o soluție nu a fost introdusă.");

    setLoading(true);
    sendToCompile({ solution, tests, maxExecutionTime, maxMemory })
      .then((compileResponse) => {
        const { executionWasAllowed, totalPointsGained } = handleCompileResponse(compileResponse, {
          userData,
          router,
          setLoading,
          setUserSolutions,
          updateExerciseStats,
          updateTestsStats,
          createAlert,
          toggleResultsComponent,
        });

        if (executionWasAllowed) {
          if (!userData) {
            createAlert({
              ofType: "error",
              saying:
                "Nu sunteți autentificat. Probabil tocmai ce v-ați autentificat. Apăsați pe 'OK' pentru a reîncărca pagina.",
              onClose: () => router.reload(),
            });
            return;
          }
          uploadSentSolution(solution, totalPointsGained, exerciseId, userData, setUserSolutions)
            .then(({ ok }) => {
              console.log("Incarcare solutie --", ok ? "OK" : ":(");
              updateExerciseStats({
                type: "sentSolutions",
                value: exerciseStats.sentSolutions + 1,
              });
              updateExerciseStats({
                type: "userSolutions",
                value: exerciseStats.userSolutions + 1,
              });
            })
            .catch(console.error);
        }
      })
      .catch((err) => handleCompileError(err, setLoading, createAlert));
  }, [solution]);

  return (
    <>
      <button className="button--primary" style={{ marginBottom: "20px" }} onClick={sendSolution}>
        Trimite <FontAwesomeIcon icon="arrow-right" />
      </button>
    </>
  );
}

function uploadSentSolution(solution, testsPoints, exerciseId, userData, setUserSolutions) {
  const date = new Date();
  const body = {
    exerciseId,
    ...omitKey(["id", "iat", "exp"], userData),
    datePublished: `${date.getDate()} ${formatMonth(date.getMonth() + 1)} ${date.getFullYear()}`,
    solution: btoa(solution),
    testsPoints,
  };

  return fetch("/api/publishSolution", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((response) => {
    setUserSolutions({ value: body });
    return response;
  });
}

function sendToCompile({ solution, tests, maxExecutionTime, maxMemory }) {
  return fetch("http://localhost:3001/compile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      code: btoa(solution),
      maxExecutionTime,
      maxMemory,
      ...tests,
    }),
  }).then((r) => r.json());
}

function handleCompileResponse(
  { wasAllowed = true, data: results = [], err = "lol nu ti-am dat voe sa exekuti codu hahahhgfskml" },
  { router, setLoading, createAlert, updateExerciseStats, updateTestsStats, toggleResultsComponent }
) {
  setLoading(false);

  if (err || !wasAllowed) {
    createAlert({
      ofType: "error",
      saying: err,
      onClose: err ? () => router.push("/exercitii") : null,
    });
    return { executionWasAllowed: false, totalPointsGained: null };
  }
  const totalPointsGained = calculateTotalPointsGained(results);
  updateTestsStats({ type: "testsPoints", value: totalPointsGained });
  updateTestsStats({ type: "testsResults", value: results });

  if (totalPointsGained === 100) updateExerciseStats({ type: "isSolved", value: true });
  toggleResultsComponent();
  return { executionWasAllowed: true, totalPointsGained };
}

function handleCompileError(err, setLoading, createAlert) {
  console.error(err);
  setLoading(false);
  createAlert({
    ofType: "error",
    saying: "Stai otara ca nu am deschis serveru de compilare inca, sau o fi o eroare. Incearca imd",
  });
}

function calculateTotalPointsGained(testsResults) {
  const numberOfPointsPerTest = 100 / testsResults.length;
  const points = testsResults.reduce(
    (points, { isCorrect = false }) => (isCorrect ? points + numberOfPointsPerTest : points),
    0
  );
  return points >= 99 ? 100 : Math.ceil(points);
}
