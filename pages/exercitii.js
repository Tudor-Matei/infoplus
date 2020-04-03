import { useState } from "react";
import {
    ExercisesGradeIX,
    ExercisesGradeX,
    ExercisesGradeXI
} from "../components/Exercises/ExercisesGrades";

export default function Exercitii() {
    const [state, setState] = useState({
        isGradeIXActive: true,
        isGradeXActive: false,
        isGradeXIActive: false
    });

    const changeGrade = grade =>
        setState({
            isGradeIXActive: grade === "isGradeIXActive",
            isGradeXActive: grade === "isGradeXActive",
            isGradeXIActive: grade === "isGradeXIActive"
        });

    return (
        <>
            <HeaderGrades parentState={state} changeGrade={changeGrade} />
            <div className="exercises-container">
                {state.isGradeIXActive && <ExercisesGradeIX />}
                {state.isGradeXActive && <ExercisesGradeX />}
                {state.isGradeXIActive && <ExercisesGradeXI />}
            </div>
            <style jsx>{`
                .exercises-container {
                    text-align: center;
                    margin-bottom: 40px;
                }
            `}</style>
        </>
    );
}

function HeaderGrades({ parentState, changeGrade }) {
    return (
        <div className="header-grades">
            {["IX", "X", "XI"].map(grade => (
                <h3
                    key={`grade_${grade}`}
                    className={`header-grades__heading-${grade.toLowerCase()} ${
                        parentState[`isGrade${grade}Active`]
                            ? "header-grades__heading--active"
                            : ""
                    }`}
                    onClick={() => changeGrade(`isGrade${grade}Active`)}
                >
                    Clasa {grade}
                </h3>
            ))}

            <style jsx>{`
                .header-grades {
                    width: 70%;
                    margin: 120px auto 40px;
                    display: flex;
                }

                h3 {
                    width: 33.3%;
                    position: relative;
                    padding-bottom: 15px;
                    padding-top: 15px;
                    color: var(--text-primary);
                    z-index: 2;
                    text-align: center;
                    cursor: pointer;
                    transition: color 300ms linear;
                }

                h3::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    z-index: -1;
                    transition-property: border-top-left-radius,
                        border-top-right-radius, height;
                    transition-duration: 300ms;
                    transition-timing-function: ease;
                }

                h3:hover,
                .header-grades__heading--active {
                    color: var(--text-button);
                }

                h3:hover::before,
                .header-grades__heading--active::before {
                    height: 100%;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }

                .header-grades__heading-ix::before {
                    background-color: var(--accent-primary);
                }

                .header-grades__heading-x::before {
                    background-color: var(--accent-secondary);
                }

                .header-grades__heading-xi::before {
                    background-color: var(--accent-tertiary);
                }

                @media screen and (max-width: 1024px) {
                    .header-grades {
                        width: 90%;
                    }
                }
            `}</style>
        </div>
    );
}
