import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Exercise from "../../components/ExercisesList/Exercise";

export async function getStaticPaths() {
    return {
        paths: [
            { params: { clasa: "ix" } },
            { params: { clasa: "x" } },
            { params: { clasa: "xi" } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params: { clasa } }) {
    return {
        props: { clasa },
    };
}

export default function ExercisesList({ clasa }) {
    return (
        <>
            {clasa && <HeaderMainInfo grade={clasa} />}
            <CurrentCategoryTitle
                category="Elemente de bază ale limbajului"
                subcategory="Operatori și expresii"
            />
            {clasa && (
                <>
                    <Exercise
                        title="ScriereEcran"
                        isSolved
                        authorName="Jane Doe"
                        datePublished="21 mai 2017"
                        source="Model Bacalaureat 2009"
                        difficulty={1}
                        grade={clasa}
                        exerciseId="1"
                    >
                        Mollit enim tempor esse magna id pariatur exercitation.
                        Sint est aute cupidatat dolor adipisicing amet ea ut
                        deserunt nulla do eiusmod aliqua nulla. Duis tempor
                        ullamco dolore sit adipisicing dolore voluptate anim ex
                        officia dolore est occaecat velit voluptate id mollit
                        irure. Ut deserunt voluptate est qui quis labore fugiat
                        sint. Dolor qui culpa est ipsum excepteur irure id est
                        voluptate enim elit quis incididunt dolor.
                    </Exercise>
                    <Exercise
                        title="ScriereEcran"
                        authorName="Jane Doe"
                        datePublished="21 mai 2017"
                        source="Model Bacalaureat 2009"
                        difficulty={3}
                        grade={clasa}
                        exerciseId="2"
                    >
                        Mollit enim tempor esse magna id pariatur exercitation.
                        Sint est aute cupidatat dolor adipisicing amet ea ut
                        deserunt nulla do eiusmod aliqua nulla. Duis tempor
                        ullamco dolore sit adipisicing dolore voluptate anim ex
                        officia dolore est occaecat velit voluptate id mollit
                        irure. Ut deserunt voluptate est qui quis labore fugiat
                        sint. Dolor qui culpa est ipsum excepteur irure id est
                        voluptate enim elit quis incididunt dolor.
                    </Exercise>

                    <Exercise
                        title="ScriereEcran"
                        authorName="Jane Doe"
                        datePublished="21 mai 2017"
                        source="Model Bacalaureat 2009"
                        difficulty={4}
                        grade={clasa}
                        isSolved
                        exerciseId="2"
                    >
                        Mollit enim tempor esse magna id pariatur exercitation.
                        Sint est aute cupidatat dolor adipisicing amet ea ut
                        deserunt nulla do eiusmod aliqua nulla. Duis tempor
                        ullamco dolore sit adipisicing dolore voluptate anim ex
                        officia dolore est occaecat velit voluptate id mollit
                        irure. Ut deserunt voluptate est qui quis labore fugiat
                        sint. Dolor qui culpa est ipsum excepteur irure id est
                        voluptate enim elit quis incididunt dolor.
                    </Exercise>
                </>
            )}
        </>
    );
}

function HeaderMainInfo({ grade }) {
    return (
        <div className="header-main-info">
            <div className="header-main-info__buttons">
                <select>
                    <option>Subcategorii</option>
                </select>
                <FilterButton />
            </div>
            <h2>Clasa {grade.toUpperCase()}</h2>
            <style jsx>{`
                .header-main-info {
                    margin: 160px auto 15px;
                    padding-bottom: 15px;
                    border-bottom: 5px solid var(--accent-primary);
                    width: 90%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                h2 {
                    color: var(--text-primary);
                }

                select {
                    width: 150px;
                    height: 35px;
                    background-color: transparent;
                    border: 1px solid var(--background-quaternary);
                    border-radius: 50px;
                    margin-right: 30px;
                    color: var(--text-primary);
                    font-family: "Red Hat Display";
                    padding: 0 15px;
                    cursor: pointer;
                    transition: background-color 300ms ease;
                }

                select:hover {
                    background-color: var(--background-secondary);
                }
                select:focus {
                    outline: none;
                }

                @media screen and (max-width: 560px) {
                    .header-main-info {
                        flex-direction: column-reverse;
                        align-items: flex-start;
                        margin-top: 120px;
                    }

                    h2 {
                        margin-bottom: 15px;
                    }

                    .header-main-info__buttons {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                    }
                }
            `}</style>
        </div>
    );
}

function CurrentCategoryTitle({ category, subcategory }) {
    return (
        <div className="current-category">
            <h2>{category}</h2>
            <p>{subcategory}</p>
            <style jsx>{`
                .current-category {
                    width: 90%;
                    margin: 0 auto 120px;
                    color: var(--text-primary);
                }

                p {
                    font-size: var(--font-small);
                }

                @media screen and (max-width: 560px) {
                    .current-category {
                        margin-bottom: 60px;
                    }

                    h2 {
                        font-size: var(--font-small);
                    }
                    p {
                        font-size: var(--font-smaller);
                    }
                }
            `}</style>
        </div>
    );
}

function FilterButton() {
    return (
        <button className="button--outline">
            Filtrați <FontAwesomeIcon icon="filter" />
        </button>
    );
}
