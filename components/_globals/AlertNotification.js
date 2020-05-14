import CheckmarkSolved from "../utils/CheckmarkSolved";
import ErrorCircle from "../utils/ErrorCircle";
import OverlayDarkener from "../utils/OverlayDarkener";

export default function AlertNotification({ type, children, alertToggleHandler }) {
    return (
        <>
            <OverlayDarkener onClick={alertToggleHandler} />
            <div className={`alert alert--type-${type}`}>
                <div className="alert__info">
                    {type === 1 ? (
                        <>
                            <h2>Succes!</h2>
                            <CheckmarkSolved />
                        </>
                    ) : (
                        <>
                            <h2>Eroare!</h2>
                            <ErrorCircle />
                        </>
                    )}
                    <p>{children}</p>
                </div>
                <button className="alert__button button--tertiary" onClick={alertToggleHandler}>
                    OK
                </button>

                <style jsx>{`
                    .alert {
                        max-width: 40%;
                        height: fit-content;
                        padding: 30px 30px 20px;
                        border-radius: 20px;
                        position: fixed;
                        margin: auto;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 100;
                        display: flex;
                        flex-direction: column;
                        color: var(--text-button);
                        box-shadow: var(--box-shadow);
                        opacity: 0;
                        transform: scale(0.5);
                        animation: comeIn 300ms ease forwards;
                    }

                    .alert__info {
                        margin-bottom: 20px;
                    }

                    .alert--type-1 {
                        background-color: var(--accent-success);
                    }

                    .alert--type-0 {
                        background-color: var(--accent-failure-secondary);
                    }

                    .alert__button {
                        color: var(--text-button);
                        align-self: flex-end;
                        margin-right: 0;
                        margin-bottom: -10px;
                    }

                    .alert__button:hover {
                        color: var(--accent-quaternary);
                    }

                    h2 {
                        display: inline-block;
                        vertical-align: middle;
                    }

                    @keyframes comeIn {
                        from {
                            transform: scale(0.5);
                            opacity: 0;
                        }
                        60% {
                            transform: scale(1.05);
                            opacity: 0.8;
                        }
                        to {
                            transform: scale(1);
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}
