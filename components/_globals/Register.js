import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InputArea from "../utils/InputArea";
import formModal from "../../styles/formModal";
import OverlayDarkener from "../utils/OverlayDarkener";

import checkFieldsValidity from "../../utils/checkFieldsValidity";

export default function Register({ showRegisterModalHandler }) {
    const [userDetails, setUserDetail] = useState({
        name: "",
        surname: "",
        county: "Alba",
        profession: "Elev",
        username: "",
        email: "",
        password: "",
    });
    const userDetailChanger = ({ target }, userDetail) =>
        setUserDetail({ ...userDetails, [userDetail]: target.value });

    const [errorMessage, setErrorMessage] = useState("");
    const showErrorMessage = (error) => setErrorMessage(error);

    return (
        <>
            <OverlayDarkener onClick={showRegisterModalHandler} />
            <div className="modal">
                <div className="modal__title-container">
                    <RegisterModalWave />
                    <h2 className="modal__title">Înregistrează-te</h2>
                </div>
                <form className="modal__input-panels" onSubmit={() => false}>
                    <div className="modal__input-panel-group">
                        <div className="modal__input-panel">
                            <InputArea
                                title="Nume"
                                inputType="text"
                                inputProps={{ minLength: 3, required: true }}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "name")
                                }
                            />
                        </div>
                        <div className="modal__input-panel">
                            <InputArea
                                title="Prenume"
                                inputType="text"
                                inputProps={{ minLength: 3, required: true }}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "surname")
                                }
                            />
                        </div>
                    </div>
                    <div className="modal__input-panel-group">
                        <div className="modal__input-panel">
                            <InputArea
                                title="Județ"
                                isSelect
                                optionValues={[
                                    "Alba",
                                    "Cluj",
                                    "Bistrita-Nasaud",
                                ]}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "county")
                                }
                            />
                        </div>
                        <div className="modal__input-panel">
                            <InputArea
                                title="Profesie"
                                isSelect
                                optionValues={["Elev", "Profesor"]}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "profession")
                                }
                            />
                        </div>
                    </div>
                    <div className="modal__input-panel-group">
                        <div className="modal__input-panel">
                            <InputArea
                                title="Nume Utilizator"
                                inputType="text"
                                inputProps={{ minLength: 5, required: true }}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "username")
                                }
                            />
                        </div>
                        <div className="modal__input-panel">
                            <InputArea
                                title="E-mail"
                                inputType="email"
                                inputProps={{
                                    required: true,
                                }}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "email")
                                }
                            />
                        </div>
                    </div>
                    <div className="modal__input-panel-group">
                        <div className="modal__input-panel modal__input-panel--last">
                            <InputArea
                                title="Parola"
                                inputType="password"
                                inputProps={{ minLength: 8, required: true }}
                                eventHandler={(e) =>
                                    userDetailChanger(e, "password")
                                }
                            />
                        </div>
                    </div>

                    <div className="modal__buttons-container">
                        <button
                            className="button--tertiary"
                            onClick={showRegisterModalHandler}
                        >
                            Renunță
                        </button>
                        <SubmitButton
                            userDetails={userDetails}
                            showErrorMessage={showErrorMessage}
                        />
                    </div>
                    {errorMessage !== "" && (
                        <p className="error-message">
                            {errorMessage}{" "}
                            <FontAwesomeIcon icon="times-circle" />{" "}
                        </p>
                    )}
                </form>
            </div>
            <style jsx>{formModal}</style>
            <style jsx>{`
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

function SubmitButton({ userDetails, showErrorMessage }) {
    const [isDisabled, setDisabled] = useState(false);
    const Router = useRouter();

    return (
        <>
            <button
                type="submit"
                disabled={isDisabled}
                onClick={(e) => {
                    e.preventDefault();
                    setDisabled(true);

                    const errorMessage = checkFieldsValidity({
                        fields: userDetails,
                        minimumLengthForEachField: {
                            name: 3,
                            surname: 3,
                            username: 5,
                            password: 8,
                        },
                        hasEmail: true,
                    });

                    if (errorMessage !== false) {
                        setDisabled(false);
                        return showErrorMessage(errorMessage);
                    }

                    fetch("/api/register", {
                        method: "POST",
                        body: JSON.stringify(userDetails),
                    })
                        .then((r) => r.json())
                        .then((r) => {
                            alert(JSON.stringify(r));
                            // if (ok) Router.push("/cont");
                            // else {
                            //     setDisabled(false);
                            //     return showErrorMessage(
                            //         "A aparut o eroare interna, va rog sa ne scuzati."
                            //     );
                            // }
                        });
                }}
                className="button--primary"
            >
                Creează
            </button>
            <style jsx>{`
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
