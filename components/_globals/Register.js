import { useState } from "react";
import InputArea from "../utils/InputArea";
import formModal from "../../styles/formModal";
import OverlayDarkener from "../utils/OverlayDarkener";

export default function Register({ showRegisterModalHandler }) {
    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");
    const [judet, setJudet] = useState("");
    const [numeUtilizator, setNumeUtilizator] = useState("");
    const [email, setEmail] = useState("");
    const [parola, setParola] = useState("");
    return (
        <>
            <OverlayDarkener onClick={showRegisterModalHandler} />
            <div className="modal">
                <div className="modal__title-container">
                    <RegisterModalWave />
                    <h2 className="modal__title">Înregistrează-te</h2>
                </div>
                <div className="modal__input-panels">
                    <div className="modal__input-panel">
                        <InputArea title="Nume" inputType="text" />
                    </div>
                    <div className="modal__input-panel">
                        <InputArea title="Prenume" inputType="text" />
                    </div>
                    <div className="modal__input-panel">
                        <InputArea
                            title="Județ"
                            isSelect
                            optionValues={["Alba", "Cluj", "Bistrita-Nasaud"]}
                        />
                    </div>
                    <div className="modal__input-panel">
                        <InputArea
                            title="Profesie"
                            isSelect
                            optionValues={["Elev", "Profesor"]}
                        />
                    </div>
                    <div className="modal__input-panel">
                        <InputArea title="Nume Utilizator" inputType="text" />
                    </div>
                    <div className="modal__input-panel">
                        <InputArea title="E-mail" inputType="text" />
                    </div>
                    <div className="modal__input-panel modal__input-panel--last">
                        <InputArea title="Parola" inputType="password" />
                    </div>

                    <div className="modal__buttons-container">
                        <button
                            className="button--tertiary"
                            onClick={showRegisterModalHandler}
                        >
                            Renunță
                        </button>
                        <button className="button--primary">Creează</button>
                    </div>
                </div>
            </div>
            <style jsx>{formModal}</style>
            <style jsx>{`
                .modal {
                    width: 50%;
                }

                .modal__input-panel {
                    width: 40%;
                }

                .modal__buttons-container {
                    margin-right: 60px;
                }

                .modal__input-panel--last {
                    width: 85%;
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
