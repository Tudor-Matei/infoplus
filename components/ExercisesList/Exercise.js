import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import CheckmarkSolved from "../utils/CheckmarkSolved";
import difficultyText from "../utils/difficultyText";

export default function Exercise({
    className = "",
    title,
    isSolved = false,
    children,
    authorName,
    datePublished,
    source,
    difficulty,
    exerciseId,
}) {
    return (
        <div className={`exercise ${className}`}>
            <h2>{title}</h2>
            {isSolved && <CheckmarkSolved />}
            <p className="exercise__description">{children}</p>

            <div className="exercise__details-and-button">
                <div className="exercise__details">
                    <div className="exercise__author-profile-picture"></div>
                    <p>{authorName}</p> &#8226;
                    <p>{datePublished}</p> &#8226;
                    <p>{source}</p> &#8226;
                    <p className="exercise__difficulty">{difficultyText(difficulty)}</p>
                </div>

                <ButtonSolve href={`/exercitiu/${exerciseId}`} difficulty={difficulty} />
            </div>

            <style jsx>{`
                .exercise {
                    /* prettier-ignore */ 
                    border-bottom: 5px solid var(--difficulty-${difficulty});
                }
                .exercise__difficulty {
                    /* prettier-ignore */
                    color: var(--difficulty-${difficulty});
                }
            `}</style>

            <style jsx>{`
                .exercise {
                    width: 90%;
                    margin: 100px auto;
                    background-color: var(--background-secondary);
                    box-shadow: var(--box-shadow);
                    padding: 30px;
                    border-radius: 20px;
                    /* prettier-ignore */
                    border-bottom: 5px solid var(--difficulty-${difficulty});
                    transition: background-color 300ms ease;
                }

                h2 {
                    display: inline-block;
                    vertical-align: sub;
                    color: var(--text-primary);
                }

                .exercise__description {
                    color: var(--text-primary);
                    max-height: 150px;
                    margin-top: 10px;
                    overflow-y: auto;
                }

                .exercise__details-and-button {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 50px;
                }

                .exercise__details {
                    color: var(--text-tertiary);
                    margin-right: 20px;
                }

                .exercise__details p {
                    margin: 10px 7px;
                    display: inline-block;
                    
                }

                .exercise__author-profile-picture {
                    width: 30px;
                    height: 30px;
                    background-color: var(--background-tertiary);
                    border-radius: 50%;
                    margin-right: 7px;
                    display: inline-block;
                    vertical-align: middle;
                }

                .exercise__difficulty {
                    font-weight: bold;
                }

                @media screen and (max-width: 560px){
                    
                    .exercise__details-and-button {
                        flex-direction: column-reverse;
                    }

                    .exercise__details {
                        margin-top: 20px;
                    }

                    h2 {
                        font-size: var(--font-small);
                    }
                }

            `}</style>
        </div>
    );
}

function ButtonSolve({ href, difficulty }) {
    return (
        <>
            <Link href={href}>
                <button className="button--primary">
                    Rezolvă <FontAwesomeIcon icon="arrow-right" />
                </button>
            </Link>
            <style jsx>{`
                .button--primary {
                    /* prettier-ignore */
                    background-color: var(--difficulty-${difficulty});
                }
                `}</style>
        </>
    );
}
