import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formModal from "../../styles/formModal";

import OverlayDarkener from "../utils/OverlayDarkener";
import InputAreas from "../utils/InputAreas";
import inputAreaRegisterData from "../utils/inputAreaRegisterData";
import SubmitButton from "../utils/SubmitButton";

import { RegisterModalHandler } from "../Home/Main";

export default function Register() {
    const [userDetails, setUserDetail] = useState({
        name: "",
        surname: "",
        county: "Alba",
        profession: "Elev",
        username: "",
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState(false);
    const showErrorMessage = (error) => setErrorMessage(error);
    const updateDetails = (e, fieldName) =>
        setUserDetail({ ...userDetails, [fieldName]: e.target.value });

    const showRegisterModalHandler = useContext(RegisterModalHandler);

    return (
        <>
            <OverlayDarkener onClick={showRegisterModalHandler} />
            <div className="modal">
                <div className="modal__title-container">
                    <RegisterModalWave />
                    <h2 className="modal__title">Înregistrează-te</h2>
                </div>
                <form className="modal__input-panels" onSubmit={() => false}>
                    <InputAreas
                        updateDetails={updateDetails}
                        inputAreaData={inputAreaRegisterData}
                    />
                    <div className="modal__buttons-container">
                        <button className="button--tertiary" onClick={showRegisterModalHandler}>
                            Renunță
                        </button>

                        <SubmitButton
                            userDetails={userDetails}
                            fieldOptions={{
                                minimumLengthForEachField: {
                                    name: 3,
                                    surname: 3,
                                    username: 5,
                                    password: 8,
                                },
                                hasEmail: true,
                            }}
                            showErrorMessage={showErrorMessage}
                            buttonTitle="Creează"
                            type="register"
                        />
                    </div>
                    {errorMessage && (
                        <p className="error-message">
                            {errorMessage} <FontAwesomeIcon icon="times-circle" />{" "}
                        </p>
                    )}
                </form>
            </div>
            <style jsx>{formModal}</style>
            <style jsx global>{`
                .modal {
                    width: 50%;
                }

                .modal__input-panel:nth-child(odd) {
                    margin-right: 15px;
                }

                .modal__input-panel:nth-child(even) {
                    margin-left: 15px;
                }

                .modal__input-panel.modal__input-panel--last {
                    margin-right: 0;
                    margin-left: 0;
                }
                @media screen and (max-width: 825px) {
                    .modal__input-panel:nth-child(n) {
                        margin-left: 0;
                        margin-right: 0;
                    }
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
