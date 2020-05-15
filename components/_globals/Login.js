import { useState, useContext } from "react";
import formModal from "../../styles/formModal";

import OverlayDarkener from "../utils/OverlayDarkener";
import SubmitButton from "../utils/SubmitButton";
import InputAreas from "../utils/InputAreas";
import inputAreaLoginData from "../utils/inputAreaLoginData";

import { LoginModalHandler } from "../Home/Main";

export default function Login() {
    const [userDetails, setUserDetail] = useState({
        username: "",
        password: "",
    });
    const updateDetails = (e, fieldName) =>
        setUserDetail({ ...userDetails, [fieldName]: e.target.value });

    const [errorMessage, setErrorMessage] = useState("");
    const showErrorMessage = (error) => setErrorMessage(error);

    const showLoginModalHandler = useContext(LoginModalHandler);

    return (
        <>
            <OverlayDarkener onClick={showLoginModalHandler} />
            <div className="modal modal--login">
                <div className="modal__title-container">
                    <LoginModalWave />
                    <h2 className="modal__title">Logheaza-te</h2>
                </div>
                <div className="modal__input-panels">
                    <InputAreas updateDetails={updateDetails} inputAreaData={inputAreaLoginData} />

                    <div className="modal__buttons-container">
                        <button className="button--tertiary" onClick={showLoginModalHandler}>
                            Renunță
                        </button>
                        <SubmitButton
                            userData={{
                                username: userDetails.username,
                                password: userDetails.password,
                            }}
                            showErrorMessage={showErrorMessage}
                            buttonTitle="Logare"
                            type="login"
                        />
                        {errorMessage !== "" && (
                            <p className="error-message">
                                {errorMessage} <FontAwesomeIcon icon="times-circle" />{" "}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <style jsx>{formModal}</style>
            <style jsx>{`
                .modal {
                    width: 40%;
                    max-height: 81%;
                }

                :global(.modal__input-panel-group) {
                    flex-direction: column;
                }
                :global(.modal--login .modal__input-panel) {
                    margin-bottom: 20px;
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
