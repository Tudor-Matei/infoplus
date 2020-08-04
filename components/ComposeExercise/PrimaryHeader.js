import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComposeExercisesViewContext } from "../../pages/exercitii/compuse-de-mine";
import { useContext } from "react";

export default function PrimaryComposeHeader({ exercisesComposedByMe, solutionsAttemptedTotal }) {
    const updateView = useContext(ComposeExercisesViewContext);
    return (
        <>
            <header>
                <button
                    className="button--primary"
                    onClick={() => updateView({ type: "compose_exercises" })}
                >
                    Compune exercițiu
                    <FontAwesomeIcon icon="plus" />
                </button>
                <BulletDetail icon="pen">
                    Exerciții compuse de tine: <b>{exercisesComposedByMe}</b>
                </BulletDetail>
                <BulletDetail icon="upload">
                    Soluții trimise la exercițiile tale: <b>{solutionsAttemptedTotal}</b>
                </BulletDetail>
            </header>

            <style jsx>{`
                header {
                    width: 100%;
                    height: auto;
                    margin: 20px auto;
                    padding-bottom: 15px;
                    border-bottom: 2px solid var(--accent-primary);
                }

                button {
                    padding: 0 20px;
                    text-transform: initial;
                }

                @media screen and (max-width: 920px) {
                    button {
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </>
    );
}

function BulletDetail({ icon, children }) {
    return (
        <>
            <div className="bullet-detail">
                <div className="bullet-detail__bullet-icon">
                    <FontAwesomeIcon
                        icon={icon}
                        color="var(--accent-primary)"
                        style={{ height: "14px" }}
                    />
                </div>
                {children}
            </div>
            <style jsx>{`
                .bullet-detail {
                    padding-left: 15px;
                    margin-left: 15px;
                    display: inline-block;
                    vertical-align: middle;
                    position: relative;
                    color: var(--text-primary);
                }

                .bullet-detail::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 7px;
                    width: 1px;
                    height: 50%;
                    background-color: var(--background-quaternary);
                }

                .bullet-detail__bullet-icon {
                    width: 27px;
                    height: 27px;
                    border-radius: 50%;
                    margin-right: 10px;
                    background-color: var(--background-quaternary);
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                }
                @media screen and (max-width: 594px) {
                    .bullet-detail {
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </>
    );
}
