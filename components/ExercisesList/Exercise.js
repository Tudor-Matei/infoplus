import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Exercise({
    title,
    isSolved,
    description,
    authorName,
    datePublished,
    source,
    difficulty,
    grade
}) {
    const difficultyText =
        difficulty === 1
            ? "UȘOR"
            : difficulty === 2
            ? "MEDIU"
            : difficulty === 3
            ? "PROVOCATOR"
            : "DIFICIL";
    return (
        <div className="exercise">
            <h2>{title}</h2>
            {isSolved && <CheckmarkSolved />}
            <p className="exercise__description">{description}</p>
            <div className="exercise__details">
                <div className="exercise__author-profile-picture"></div>
                <p>{authorName}</p> &#8226;
                <p>{datePublished}</p> &#8226;
                <p>{source}</p> &#8226;
                <p className="exercise__difficulty">{difficultyText}</p>
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
                    margin: auto;
                    background-color: var(--background-secondary);
                    box-shadow: var(--box-shadow);
                    padding: 30px;
                    border-radius: 20px;
                    /* prettier-ignore */
                    border-bottom: 5px solid var(--difficulty-${difficulty});
                }

                h2 {
                    display: inline-block;
                    margin-right: 15px;
                    margin-bottom: 10px;
                    vertical-align: middle;
                    color: var(--text-primary);
                }

                .exercise__description {
                    color: var(--text-primary);
                    max-height: 200px;
                }

                .exercise__details {
                    color: var(--text-tertiary);
                    display: flex;
                    margin-top: 60px;
                }

                .exercise__difficulty {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}

function CheckmarkSolved() {
    return (
        <>
            <FontAwesomeIcon icon="check" className="checkmark-solved" />
            <style jsx global>{`
                .checkmark-solved {
                    display: inline-block;
                    color: var(--accent-primary);
                }
            `}</style>
        </>
    );
}
