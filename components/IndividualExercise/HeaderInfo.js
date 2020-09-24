import CheckmarkSolved from "../utils/CheckmarkSolved";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import difficultyText from "../../utils/difficultyText";

export default function HeaderInfo({
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
                <h3 className="header-info-exercise__difficulty">{difficultyText(difficulty)}</h3>
            </div>

            <hr />

            <div className="header-info-exercise__secondary-details">
                <div className="header-info-exercise__secondary-detail">
                    <div className="header-info-exercise__profile-picture"></div>
                    <p>
                        Postată de: <span className="underlined">{authorName}</span>
                    </p>
                </div>
                <div className="header-info-exercise__secondary-detail">
                    <FontAwesomeIcon icon="clock" />
                    <p>Timp maxim de execuție: {maxExecutionTime} secunde</p>
                </div>
                <div className="header-info-exercise__secondary-detail">
                    <FontAwesomeIcon
                        icon="memory"
                        className="header-info-exercise__icon--needs-media-query"
                    />
                    <p>Memorie maximă: {maxMemoryConsumption} MB</p>
                </div>
                <div className="header-info-exercise__secondary-detail">
                    <FontAwesomeIcon icon="code-branch" />
                    <p>Sursă: {source}</p>
                </div>
                <div className="header-info-exercise__secondary-detail">
                    <FontAwesomeIcon icon="upload" />
                    <p className="header-info-exercise__secondary-details--no-border">
                        Soluții trimise: {sentSolutions}
                    </p>
                </div>
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
                    margin: 140px auto;
                    color: var(--text-primary);
                }

                .header-info-exercise__difficulty {
                    color: var(--text-button);
                    padding: 4px 10px;
                    border-radius: 5px;
                }

                hr {
                    margin-top: 15px;
                    margin-bottom: 5px;
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
                }

                .header-info-exercise__secondary-detail {
                    display: inline-flex;
                    vertical-align: middle;
                    align-items: center;
                    margin-top: 10px;
                    margin-right: 15px;
                }

                .header-info-exercise__secondary-detail:first-child {
                    padding-left: 0;
                }

                .header-info-exercise__secondary-details p {
                    padding-right: 15px;
                    position: relative;
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
                    margin-right: 10px;
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
