import { useState } from "react";
import mainStyling from "../styles/mainStyling";

export default function Cont() {
    const [isTabelActive, toggleTabel] = useState(true);
    const [isExercisesActive, toggleExercises] = useState(false);
    const [isProgressActive, toggleProgress] = useState(false);
    return (
        <>
            <h1 className="details-account">Detalii cont</h1>
            <div className="header-options">
                <h3 className="header-options__h3 header-options__h3--1">
                    Cont
                </h3>
                <h3 className="header-options__h3 header-options__h3--2">
                    Exercitii
                </h3>
                <h3 className="header-options__h3 header-options__h3--3">
                    Progres
                </h3>
                <hr />
            </div>
            <style jsx>{mainStyling}</style>
            <style jsx>{`
                .details-account {
                    font-size: 2rem;
                    text-align: center;
                    margin: 120px 0;
                    color: var(--text-primary);
                }
                .header-options {
                    width: 70%;
                    margin: auto;
                }
                .header-options__h3 {
                    display: inline-block;
                    margin-right: 40px;
                }
            `}</style>
        </>
    );
}

function Tabel() {
    return (
        <div className="tabel-cont">
            <div className="tabel-cont__detalii-cerute">
                <div className="tabel-cont__rand">Nume</div>
                <div className="tabel-cont__rand">Prenume</div>
                <div className="tabel-cont__rand">E-Mail</div>
                <div className="tabel-cont__rand">Telefon</div>
                <div className="tabel-cont__rand">Regiune</div>
            </div>
            <div className="tabel-cont__detalii-cont">
                <div className="tabel-cont__rand">John</div>
                <div className="tabel-cont__rand">Doe</div>
                <div className="tabel-cont__rand">
                    johndoe1234@longexample.com
                </div>
                <div className="tabel-cont__rand">+40012345678</div>
                <div className="tabel-cont__rand">USA</div>
            </div>
        </div>
    );
}
