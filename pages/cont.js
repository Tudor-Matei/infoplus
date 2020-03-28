import { useState, useEffect } from "react";

import AccountDetails from "../components/Account/Details";
import ExercisesDetails from "../components/Account/Exercises";

export default function Cont() {
    const [state, setState] = useState({
        isTabelActive: true,
        isExercisesActive: false,
        isProgressActive: false
    });
    const changeCategory = category =>
        setState({
            isTabelActive: category === "isTabelActive",
            isExercisesActive: category === "isExercisesActive",
            isProgressActive: category === "isProgressActive"
        });

    return (
        <>
            <h1 className="details-account">Detalii cont</h1>
            <HeaderOptionsDetails
                parentState={state}
                changeCategory={changeCategory}
            />
            {state.isTabelActive && <AccountDetails />}
            {state.isExercisesActive && <ExercisesDetails />}
            <style jsx>{`
                .details-account {
                    text-align: center;
                    margin: 120px 0;
                    color: var(--text-primary);
                }
            `}</style>
        </>
    );
}

function HeaderOptionsDetails({ parentState, changeCategory }) {
    return (
        <div className="header-options">
            <h3
                className={`header-options__h3 ${
                    parentState.isTabelActive
                        ? "header-options__h3--active"
                        : ""
                }`}
                onClick={() => changeCategory("isTabelActive")}
            >
                Cont
            </h3>
            <h3
                className={`header-options__h3 ${
                    parentState.isExercisesActive
                        ? "header-options__h3--active"
                        : ""
                }`}
                onClick={() => changeCategory("isExercisesActive")}
            >
                Exercitii
            </h3>
            <h3
                className={`header-options__h3 ${
                    parentState.isProgressActive
                        ? "header-options__h3--active"
                        : ""
                }`}
                onClick={() => changeCategory("isProgressActive")}
            >
                Progres
            </h3>
            <hr />

            <style jsx>{`
                .header-options {
                    width: 70%;
                    margin: auto;
                }

                .header-options__h3 {
                    display: inline-block;
                    padding: 0 40px 10px;
                    margin-right: 20px;
                    color: var(--text-primary);
                    opacity: 0.7;
                    border-bottom: 0px solid var(--accent-primary);
                    transition-property: color, opacity, transform;
                    transition-duration: 300ms;
                    transition-timing-function: ease;
                    cursor: pointer;
                }

                .header-options__h3:hover:not(.header-options__h3--active) {
                    opacity: 1;
                    transform: translateY(-5px);
                }

                .header-options__h3--active {
                    border-bottom-width: 3px;
                    opacity: 1;
                    margin-bottom: -2px;
                }

                hr {
                    margin-top: 0;
                }

                @media screen and (max-width: 768px) {
                    .header-options {
                        width: 90%;
                    }
                    .header-options__h3 {
                        font-size: var(--font-smaller);
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            `}</style>
        </div>
    );
}
