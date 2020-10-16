import { useState, useContext, useReducer, useCallback, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formModal from "../../styles/formModal";

import OverlayDarkener from "./OverlayDarkener";
import InputAreas from "../utils/InputAreas";
import inputAreaRegisterData from "../utils/inputAreaRegisterData";
import SubmitButton from "../utils/SubmitButton";

import { RegisterModalHandler } from "../Home/Main";
import { registerBoundaries } from "../../utils/lengthBoundariesForFields";
import submit from "../../utils/submit";

export default function Register() {
  const [userDetails, setUserDetail] = useReducer((state, action) => ({ ...state, [action.type]: action.value }), {
    name: "",
    surname: "",
    county: "Alba",
    profession: "Elev",
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const showRegisterModalHandler = useContext(RegisterModalHandler);

  const modalRef = useRef();

  const submitRegisterData = useCallback((e) => {
    e.preventDefault();
    setSubmitDisabled(true);

    submit({
      to: "http://localhost:3000/api/register",
      fieldValues: userDetails,
      fieldOptions: { lengthBoundariesForEachField: registerBoundaries },
    })
      .then(({ ok = false, error = "A apărut o eroare internă, vă rugam să ne scuzați." }) => {
        if (!ok) {
          createAlert({ ofType: "error", saying: error });
          setSubmitDisabled(false);
          setTimeout(() => modalRef.current.scrollBy(0, modalRef.current.scrollHeight), 0);

          return;
        }

        createAlert({ ofType: "success" });
        showRegisterModalHandler(false);
        setAuthenticated(true);
      })
      .catch((error) => {
        setSubmitDisabled(false);
        setTimeout(() => modalRef.current.scrollBy(0, modalRef.current.scrollHeight), 0);

        if (error?.fromFieldsValidity) {
          setErrorMessage(error.message);
          return;
        }

        setErrorMessage("A apărut o eroare internă, vă rugăm să ne scuzați.");
        console.error(error);
      });
  });

  return (
    <>
      <OverlayDarkener onClick={showRegisterModalHandler} />
      <div className="modal modal--register" ref={modalRef}>
        <div className="modal__title-container">
          <RegisterModalWave />
          <h2 className="modal__title">Înregistrează-te</h2>
        </div>
        <form onSubmit={submitRegisterData}>
          <div className="modal__input-panels">
            <InputAreas
              inputAreaData={inputAreaRegisterData}
              onChange={({ target: { name, value } }) => setUserDetail({ type: name, value })}
            />
            <div className="modal__buttons-container">
              <button
                className="button--primary"
                type="submit"
                disabled={isSubmitDisabled}
                onClick={submitRegisterData}
              >
                Logare
              </button>
              <button className="button--tertiary" onClick={showRegisterModalHandler}>
                Renunță
              </button>
            </div>
            {errorMessage && (
              <p className="error-message">
                {errorMessage} <FontAwesomeIcon icon="times-circle" />{" "}
              </p>
            )}
          </div>
        </form>
      </div>

      <style jsx>{formModal}</style>
      <style jsx>{`
        .modal {
          width: 50%;
        }

        .modal__buttons-container {
          margin-top: 20px;
        }

        .modal__input-panels {
          display: flex;
          flex-wrap: wrap;
        }

        :global(.modal--register .input-area) {
          margin: 20px 10px;
          flex: 2 0 200px;
        }

        :global(.modal--register .input-area:last-child),
        .modal__buttons-container {
          flex-basis: 100%;
        }

        .button--primary {
          background-color: var(--accent-secondary);
        }
      `}</style>
    </>
  );
}

function RegisterModalWave() {
  return (
    <svg
      viewBox="0 0 646 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="modal__wave"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z"
        fill="var(--accent-secondary)"
      />
    </svg>
  );
}
