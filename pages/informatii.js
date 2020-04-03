import "../configs/icons";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Informatii() {
    return (
        <>
            <section className="main">
                <PanouLink titlu="Exerciții" link="/exercitii" tip="1" />
                <PanouLink titlu="Resurse" link="/resurse" tip="2" />
                <PanouLink
                    titlu="Detalii despre site"
                    link="/detalii-site"
                    tip="3"
                />
            </section>
            <Wave />
            <style jsx>{`
                .main {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    position: relative;
                    z-index: 2;
                }
            `}</style>
        </>
    );
}

function PanouLink({ titlu, link, tip }) {
    return (
        <>
            <Link href={link}>
                <div
                    className={`main__panou-link main__panou-link--tip-${tip}`}
                >
                    <h2 className="main__heading-panou">{titlu}</h2>
                    <div className="main__icon-sageata">
                        <FontAwesomeIcon icon="arrow-right" />
                    </div>
                </div>
            </Link>
            <style jsx>{`
                .main__panou-link {
                    width: 80%;
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 15px;
                    border-bottom: 2px solid var(--background-tertiary);
                    cursor: pointer;
                    margin: 20px 0;
                    transition: border-bottom-color 300ms linear;
                }

                .main__heading-panou {
                    color: var(--text-primary);
                }

                :global(.main__icon-sageata svg) {
                    width: 30px !important;
                    height: 30px;
                }

                .main__icon-sageata {
                    transition: transform 300ms ease;
                }

                .main__panou-link:hover .main__icon-sageata {
                    transform: translateX(10px);
                }

                .main__panou-link--tip-1 .main__icon-sageata {
                    color: var(--accent-primary);
                }

                .main__panou-link--tip-1:hover {
                    border-bottom-color: var(--accent-primary);
                }

                .main__panou-link--tip-2 .main__icon-sageata {
                    color: var(--accent-secondary);
                }

                .main__panou-link--tip-2:hover {
                    border-bottom-color: var(--accent-secondary);
                }

                .main__panou-link--tip-3 .main__icon-sageata {
                    color: var(--accent-tertiary);
                }

                .main__panou-link--tip-3:hover {
                    border-bottom-color: var(--accent-tertiary);
                }
            `}</style>
        </>
    );
}

function Wave() {
    return (
        <svg
            viewBox="0 -100 1800 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path d="M443.59 350.818C126.104 369.501 86.0836 140.46 -3 18.8826V643H1920V313.549C1862.56 247.957 1742.79 0 1449.8 0C1022.3 0 840.448 327.463 443.59 350.818Z" />
            <style jsx>
                {`
                    svg {
                        position: absolute;
                        bottom: 0;
                        fill: var(--background-secondary);
                        width: 100%;
                        height: 100%;
                    }
                `}
            </style>
        </svg>
    );
}
