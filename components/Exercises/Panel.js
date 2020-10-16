import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { CapitolURLContext } from "./Grades";

export default function ExercisesPanel({ title, children, accent, grade }) {
    return (
        <div className="exercises-container__exercises-panel">
            <h3>{title}</h3>
            <p>{children}</p>
            <Wave accent={accent} />
            <ButtonStart grade={grade} />
            <style jsx>{`
                .exercises-container__exercises-panel {
                    width: 45%;
                    height: auto;
                    background-color: var(--background-secondary);
                    box-shadow: var(--box-shadow);
                    display: inline-block;
                    margin: 40px 30px;
                    color: var(--text-primary);
                    border-radius: 10px;
                    position: relative;
                    z-index: 2;
                    overflow: hidden;
                    padding: 30px 40px;
                    animation: comeIn 300ms ease;
                }

                h3 {
                    text-align: left;
                    position: relative;
                    margin-bottom: 10px;
                }

                p {
                    position: relative;
                    text-align: left;
                    margin-bottom: 30px;
                }

                :global(.exercises-container__exercises-panel:hover
                        .exercises-container__wave-svg) {
                    transform: scaleX(2.5);
                }

                @media screen and (max-width: 1024px) {
                    .exercises-container__exercises-panel {
                        width: 90%;
                        margin-left: 0;
                        margin-right: 0;
                    }
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
        </div>
    );
}

function ButtonStart({ grade }) {
    const capitolURL = useContext(CapitolURLContext);
    return (
        <>
            <Link href={`/exercitii/${grade}/${capitolURL}`}>
                <button className={`button--primary`}>
                    Incepe
                    <FontAwesomeIcon icon="external-link-alt" />
                </button>
            </Link>
            <style jsx>{`
                button {
                    display: block;
                    background-color: var(
                        --accent-${grade === "ix" ? "primary" : grade === "x" ? "secondary" : "tertiary"}
                    );
                }
            `}</style>
        </>
    );
}

function Wave({ accent }) {
    return (
        <svg
            viewBox="-100 0 676 303"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="exercises-container__wave-svg"
            preserveAspectRatio="none"
        >
            <path
                fill={`var(--accent-${accent})`}
                d="M262.31 156.616C322.332 159.935 414.419 64.5863 439.555 0H663C670.18 0 676 5.82031 676 13V290C676 297.18 670.18 303 663 303H0.141602C6.132 272.528 112.902 148.352 262.31 156.616Z"
            />

            <style jsx>{`
                svg {
                    width: 100%;
                    height: 100%;
                    opacity: 0.5;
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: -1;
                    transition: transform 500ms ease;
                }
            `}</style>
        </svg>
    );
}
