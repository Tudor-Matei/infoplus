import { useState } from "react";
import InputArea from "../utils/InputArea";
import formModal from "../../styles/formModal";
import OverlayDarkener from "../utils/OverlayDarkener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                    <div className="modal__input-panel">
                        <InputArea
                            title="Nume"
                            inputType="text"
                            inputProps={{ minLength: 3, required: true }}
                            eventHandler={(e) => userDetailChanger(e, "name")}
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
                    <div className="modal__input-panel">
                        <InputArea
                            title="Județ"
                            isSelect
                            optionValues={["Alba", "Cluj", "Bistrita-Nasaud"]}
                            eventHandler={(e) => userDetailChanger(e, "county")}
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
                            inputProps={{ required: true }}
                            eventHandler={(e) => userDetailChanger(e, "email")}
                        />
                    </div>
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
                    <div className="modal__buttons-container">
                        <button
                            className="button--tertiary"
                            onClick={showRegisterModalHandler}
                        >
                            Renunță
                        </button>
                        <button
                            type="submit"
                            onClick={() => {
                                if (
                                    Object.values(userDetails).some(
                                        (userDetail) => userDetail === ""
                                    )
                                )
                                    return showErrorMessage(
                                        "Nu ai completat unul sau mai multe câmpuri."
                                    );

                                if (
                                    userDetails.name.length < 3 ||
                                    userDetails.surname.length < 3 ||
                                    userDetails.username.length < 5 ||
                                    userDetails.password.length < 8
                                )
                                    return showErrorMessage(
                                        "Unul sau mai multe câmpuri nu indeplinesc numarul de caractere minim."
                                    );

                                fetch("/api/register", {
                                    method: "POST",
                                    body: JSON.stringify(userDetails),
                                }).then(() => console.log("sent"));
                            }}
                            className="button--primary"
                        >
                            Creează
                        </button>
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

                .modal__input-panels {
                    width: 80%;
                    margin: auto;
                }

                .error-message {
                    margin-top: 20px;
                    margin-right: 60px;
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
                fill="var(--accent-primary)"
            />
        </svg>
    );
}
