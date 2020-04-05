import CheckmarkSolved from "../../components/utils/CheckmarkSolved";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import difficultyText from "../../components/utils/difficultyText";

export default function Exercitiu() {
    return (
        <HeaderInfoExercise
            title="ScriereEcran"
            isSolved
            difficulty={1}
            authorName="Jane Doe"
            maxExecutionTime={0.1}
            maxMemoryConsumption={4}
            source="Model bacalaureat 2009"
            sentSolutions={291}
        />
    );
}

function HeaderInfoExercise({
    title,
    isSolved = false,
    difficulty,
    authorName,
    maxExecutionTime,
    maxMemoryConsumption,
    source,
    sentSolutions,
}) {
    return (
        <div className="header-info-exercise">
            <div className="header-info-exercise__main-details">
                <h2 className="header-info-exercise__title">
                    {title}
                    {isSolved && <CheckmarkSolved />}
                </h2>
                <h3 className="header-info-exercise__difficulty">
                    {difficultyText(difficulty)}
                </h3>
            </div>

            <hr />

            <div className="header-info-exercise__secondary-details">
                <div className="header-info-exercise__profile-picture"></div>
                <p>
                    Postată de: <span className="underlined">{authorName}</span>
                </p>
                <FontAwesomeIcon icon="clock" />
                <p>Timp maxim de execuție: {maxExecutionTime} secunde</p>
                <FontAwesomeIcon
                    icon="memory"
                    className="header-info-exercise__icon--needs-media-query"
                />
                <p>Memorie maximă: {maxMemoryConsumption} MB</p>
                <FontAwesomeIcon icon="code-branch" />
                <p>Sursă: {source}</p>
                <FontAwesomeIcon icon="upload" />
                <p className="header-info-exercise__secondary-details--no-border">
                    Soluții trimise: {sentSolutions}
                </p>
            </div>
            <style jsx>{`
                .header-info-exercise__difficulty {
                    /* prettier-ignore */
                    background-color: var(--difficulty-${difficulty});
                }

                hr {
                    /* prettier-ignore */
                    border-color: var(--difficulty-${difficulty});
                }
            `}</style>
            <style jsx>{`
                .header-info-exercise {
                    width: 90%;
                    margin: 160px auto;
                    color: var(--text-primary);
                }

                .header-info-exercise__difficulty {
                    color: var(--text-button);
                    padding: 4px 10px;
                    border-radius: 5px;
                }

                hr {
                    margin-top: 25px;
                    margin-bottom: 15px;
                }

                .header-info-exercise__main-details {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .header-info-exercise__title {
                    margin-bottom: -8.5px;
                }

                .header-info-exercise__profile-picture {
                    width: 30px;
                    height: 30px;
                    background-color: var(--background-tertiary);
                    border-radius: 50%;
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: text-top;
                }

                .header-info-exercise__secondary-details p {
                    display: inline-block;
                    padding-right: 15px;
                    margin-top: 10px;
                    position: relative;
                    vertical-align: middle;
                }

                .header-info-exercise__secondary-details p::after {
                    content: "";
                    position: absolute;
                    right: 0;
                    top: 6px;
                    width: 1px;
                    height: 50%;
                    background-color: var(--text-tertiary);
                }

                :global(.header-info-exercise__secondary-details svg) {
                    margin: 10px 15px 0;
                    vertical-align: middle;
                }

                .header-info-exercise__secondary-details--no-border::after {
                    display: none;
                }

                @media screen and (max-width: 425px) {
                    .header-info-exercise__main-details {
                        flex-direction: column-reverse;
                        align-items: flex-start;
                    }
                }

                @media screen and (max-width: 363px) {
                    :global(svg.header-info-exercise__icon--needs-media-query) {
                        margin-left: 0;
                    }
                }
            `}</style>
        </div>
    );
}
