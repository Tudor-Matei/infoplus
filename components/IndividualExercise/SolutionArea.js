import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SolutionArea({ toggleResultsComponent }) {
    return (
        <>
            <div className="solution-area">
                <h3>Incarcă soluția aici</h3>
                <p>
                    Este recomandată verificarea codului într-un program
                    corespunzător înainte de a fi postată, pentru a asigura
                    inexistența erorilor de compilare sau de rezultat.
                </p>
                <textarea cols="30" rows="10"></textarea>

                <SendSolutionButton onClick={toggleResultsComponent} />
            </div>
            <style jsx>{`
                h3,
                p {
                    color: var(--text-primary);
                }

                p {
                    margin-bottom: 50px;
                }

                .solution-area {
                    width: 90%;
                    margin: 0 auto 50px;
                    position: relative;
                    animation: comeIn 300ms ease forwards;
                }

                textarea {
                    min-width: 100%;
                    max-width: 100%;
                    min-height: 400px;
                    background-color: var(--background-secondary);
                    border-radius: 15px;
                    padding: 10px;
                    margin-bottom: 60px;
                    color: var(--text-primary);
                    border: 2px solid var(--accent-primary);
                }

                @keyframes comeIn {
                    from {
                        transform: translateX(15px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}

function SendSolutionButton({ onClick }) {
    return (
        <>
            <button className="button--primary" onClick={onClick}>
                Trimite <FontAwesomeIcon icon="arrow-right" />{" "}
            </button>
            <style jsx>{`
                button {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }
            `}</style>
        </>
    );
}
