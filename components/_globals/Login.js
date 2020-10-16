import { useState, useContext, useCallback, useReducer, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import formModal from "../../styles/formModal";
import OverlayDarkener from "./OverlayDarkener";
import InputAreas from "../utils/InputAreas";
import inputAreaLoginData from "../utils/inputAreaLoginData";

import { LoggedInDataContext, LoginModalHandler, ShowAlertContext } from "../../pages/_app";
import { loginBoundaries } from "../../utils/lengthBoundariesForFields";
import submit from "../../utils/submit";
import genericReducer from "../utils/genericReducer";

export default function Login({ cancelDisabled = false }) {
  const [userDetails, setUserDetail] = useReducer(genericReducer, { username: "", password: "" });

  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const showLoginModalHandler = useContext(LoginModalHandler);
  const { setAuthenticated } = useContext(LoggedInDataContext);
  const createAlert = useContext(ShowAlertContext);

  const modalRef = useRef();

  const submitLoginData = useCallback((e) => {
    e.preventDefault();
    console.log(e.target);
    setSubmitDisabled(true);
    submit({
      to: "http://localhost:3000/api/login",
      fieldValues: userDetails,
      fieldOptions: { lengthBoundariesForEachField: loginBoundaries },
    })
      .then(({ ok = false, error = "A apărut o eroare internă, vă rugam să ne scuzați." }) => {
        if (!ok) {
          createAlert({ ofType: "error", saying: error });
          setSubmitDisabled(false);
          return;
        }

        createAlert({ ofType: "success" });
        showLoginModalHandler();
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
      <OverlayDarkener onClick={showLoginModalHandler} />
      <div className="modal modal--login" ref={modalRef}>
        <div className="modal__title-container">
          <LoginModalWave />
          <h2 className="modal__title">Loghează-te</h2>
        </div>
        <div className="modal__input-panels">
          <form onSubmit={submitLoginData}>
            <InputAreas
              className="modal__input-panel"
              inputAreaData={inputAreaLoginData}
              onChange={({ target: { name, value } }) => setUserDetail({ type: name, value })}
            />
            <div className="modal__buttons-container">
              <button className="button--primary" type="submit" disabled={isSubmitDisabled} onClick={submitLoginData}>
                Logare
              </button>
              {!cancelDisabled && (
                <button className="button--tertiary" type="button" onClick={showLoginModalHandler}>
                  Renunță
                </button>
              )}
            </div>
          </form>
          {errorMessage && (
            <p className="error-message">
              {errorMessage} <FontAwesomeIcon icon="times-circle" />{" "}
            </p>
          )}
        </div>
      </div>
      <style jsx>{formModal}</style>
      <style jsx>{`
        .modal {
          width: 50%;
          max-height: 81%;
        }

        .modal__buttons-container {
          margin-top: 30px;
        }

        :global(.modal--login .input-area) {
          margin: 30px 10px;
        }

        :global(.modal--login .button--primary) {
          background-color: var(--accent-primary);
        }
      `}</style>
    </>
  );
}

function LoginModalWave() {
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
        fill="var(--accent-primary)"
      />
    </svg>
  );
}
