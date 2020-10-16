import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountDetails from "../components/Account/Details";
import ExercisesDetails from "../components/Account/ExercisesDetails";
import Exercise from "../components/ExercisesList/Exercise";

import performDatabaseOperation from "../utils/performDatabaseOperation";
import { ObjectId } from "mongodb";
import LogoutButton from "../components/utils/LogoutButton";
import Link from "next/link";
import getAuthInfo from "../utils/getAuthInfo";
import HasAuthentication from "../components/utils/HasAuthentication";
import strippedDownResponses from "../utils/strippedDownResponses";
import { useMemo } from "react";
import formatDate from "../utils/formatDate";

function exitWith(err) {
    return {
        props: {
            authenticated: false,
            userData: null,
            latestExercisesData: null,
            solvedFailedExercises: null,
            err,
        },
    };
}

function exitOperationWith(err) {
    return {
        props: {
            authenticated: false,
            userData: null,
            latestExercisesData: null,
            solvedFailedExercises: null,
            err,
        },
    };
}

export async function getServerSideProps({ req, res }) {
    const { authenticated, userData, err } = await getAuthInfo(req, res);
    if (!authenticated) return exitWith(err);

    const { data: dataDb, err: errDb } = await performDatabaseOperation(async (db) => {
        const solutions = db.collection("solutions");

        const foundUser = await db.collection("users").findOne({ _id: ObjectId(userData.id) });
        if (!foundUser)
            return exitOperationWith(
                "S-a intâmplat ceva ciudat, aveți datele de autentificare prezente, dar invalide."
            );

        const latestExercisesData =
            (await db
                .collection("exercises")
                .find()
                .limit(5)
                .sort({ datePublished: -1 })
                .project(strippedDownResponses.exercisesList)
                .toArray()) || [];

        for (const latestExercisesDatum of latestExercisesData)
            latestExercisesDatum.datePublished = formatDate(latestExercisesDatum.datePublished);

        return {
            data: {
                authenticated: true,
                userData: {
                    name: foundUser.name,
                    surname: foundUser.surname,
                    county: foundUser.county,
                    profession: foundUser.profession,
                    username: foundUser.username,
                    email: foundUser.email,
                },
                solvedFailedExercises: [
                    (await solutions.countDocuments({
                        username: userData.username,
                        testsPoints: 100,
                    })) || 0,
                    (await solutions.countDocuments({
                        username: userData.username,
                        testsPoints: 0,
                    })) || 0,
                ],
                latestExercisesData,
            },
            err: null,
        };
    });

    return { props: { ...dataDb, err: errDb } };
}

function LatestExercises({ latestExercisesData }) {
    return latestExercisesData.map((datum, i) => (
        <Exercise
            className="exercise--less-margin"
            key={`latest-exercise_${i}`}
            title={datum.title}
            authorName={datum.author}
            datePublished={datum.datePublished}
            difficulty={datum.difficulty}
            source={datum.source}
        >
            {datum.content}
        </Exercise>
    ));
}

export default function Dashboard({
    authenticated,
    userData,
    latestExercisesData,
    solvedFailedExercises,
    err,
}) {
    return (
        <HasAuthentication authState={{ authenticated, err }}>
            <section className="dashboard">
                <div className="dashboard__introduction">
                    <WelcomingMessage name={userData?.name} surname={userData?.surname} />
                    <div className="dashboard__side-info">
                        <div className="dashboard__quick-action-pills">
                            <QuickActionPill icon="external-link-alt" link="/exercitii">
                                Rezolvă exerciții
                            </QuickActionPill>
                            <QuickActionPill icon="sign-in-alt" link="/resurse">
                                Vezi secțiunea "Resurse"
                            </QuickActionPill>
                        </div>
                        <h3>Status exerciții</h3>
                        <ExercisesDetails solvedFailedExercises={solvedFailedExercises} />
                    </div>
                </div>
                <div className="dashboard__heading">
                    <h3>Detaliile contului tău</h3>
                </div>
                {useMemo(
                    () => (
                        <AccountDetails userData={userData} />
                    ),
                    [userData]
                )}

                <div className="exercises-container">
                    <div className="dashboard__heading">
                        <h3>Cele mai noi exerciții</h3>
                    </div>
                    {useMemo(
                        () => (
                            <LatestExercises latestExercisesData={latestExercisesData} />
                        ),
                        [latestExercisesData]
                    )}
                </div>
            </section>

            <style jsx>{`
                .dashboard {
                    width: 100%;
                    height: auto;
                    padding: 130px 0;
                    color: var(--text-primary);
                }

                .dashboard__side-info {
                    padding-left: 30px;
                }

                .dashboard__introduction {
                    display: flex;
                    justify-content: space-evenly;
                    padding: 0 10px;
                    margin-bottom: 70px;
                }

                .dashboard__quick-action-pills {
                    display: flex;
                }

                .dashboard__heading {
                    width: 90%;
                    margin: auto;
                }

                h3 {
                    margin-top: 10px;
                    margin-bottom: 20px;
                }

                .exercise-container {
                    margin-top: 70px;
                }

                :global(.dashboard .exercise--less-margin) {
                    margin-top: 40px;
                    margin-bottom: 40px;
                }

                @media screen and (max-width: 1024px) {
                    .dashboard {
                        padding-top: 100px;
                    }

                    .dashboard__quick-action-pills {
                        flex-direction: column;
                    }
                }

                @media screen and (max-width: 560px) {
                    .dashboard__introduction {
                        flex-direction: column;
                        padding: 0;
                    }

                    .dashboard__side-info {
                        padding-left: 0;
                        width: 80%;
                        margin: 30px auto;
                    }
                }
            `}</style>
        </HasAuthentication>
    );
}

function WelcomingMessage({ name, surname }) {
    return (
        <>
            <div className="dashboard__welcoming-message">
                <div className="dashboard__profile-picture">
                    <InnerCircleSVG className="dashboard__profile-picture-svg" />
                    <OuterCircleSVG className="dashboard__profile-picture-svg" />
                </div>
                <div className="dashboard__title">
                    <h2>
                        Bună ziua, {name} {surname}
                    </h2>

                    <LogoutButton type="anchor" />
                    <FontAwesomeIcon className="dashboard__sign-out-icon" icon="sign-out-alt" />
                </div>
            </div>
            <style jsx>{`
                .dashboard__welcoming-message {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-top: 25px;
                    flex-direction: column;
                    text-align: center;
                }

                .dashboard__profile-picture {
                    min-width: 200px;
                    min-height: 200px;
                    background-color: var(--background-secondary);
                    border-radius: 50%;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                :global(.dashboard__profile-picture-svg) {
                    position: absolute;
                }

                :global(.dashboard__sign-out-icon) {
                    margin-left: 10px;
                }

                .dashboard__title {
                    text-align: center;
                    margin-top: 50px;
                }

                a {
                    font-weight: 300;
                }

                @media screen and (max-width: 768px) {
                    .dashboard__profile-picture {
                        min-width: 150px;
                        min-height: 150px;
                    }
                }
            `}</style>
        </>
    );
}

function QuickActionPill({ icon, link = "/", children }) {
    return (
        <>
            <div className="dashboard__quick-action-pill">
                <div className="dashboard__quick-action-icon">
                    <FontAwesomeIcon icon={icon} color="var(--text-button)" />
                </div>
                <Link href={link}>
                    <a>{children}</a>
                </Link>
            </div>
            <style jsx>{`
                .dashboard__quick-action-pill {
                    padding: 10px 20px;
                    background-color: var(--background-secondary);
                    box-shadow: var(--box-shadow);
                    border-radius: 20px;
                    width: 100%;
                    min-width: 300px;
                    transition: background-color 300ms linear;
                    cursor: pointer;
                    margin-bottom: 20px;
                }

                .dashboard__quick-action-pill:hover {
                    background-color: var(--background-tertiary);
                }

                .dashboard__quick-action-pill:active {
                    transform: translateY(3px);
                }

                .dashboard__quick-action-pill:first-of-type {
                    margin-right: 30px;
                }

                .dashboard__quick-action-icon {
                    width: 30px;
                    height: 30px;
                    background-color: var(--accent-primary);
                    border-radius: 50%;
                    display: inline-flex;
                    vertical-align: middle;
                    justify-content: center;
                    align-items: center;
                    margin-right: 15px;
                }
                a {
                    text-decoration: none;
                }

                @media screen and (max-width: 560px) {
                    .dashboard__quick-action-pill {
                        min-width: auto;
                    }
                }
            `}</style>
        </>
    );
}

function InnerCircleSVG({ className }) {
    return (
        <svg
            className={className}
            width="110%"
            height="110%"
            viewBox="0 0 312 312"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="156"
                cy="156"
                r="154"
                stroke="var(--accent-primary)"
                strokeWidth="4"
                strokeDasharray="24 24"
            />
        </svg>
    );
}

function OuterCircleSVG({ className }) {
    return (
        <svg
            className={className}
            width="125%"
            height="125%"
            viewBox="0 0 358 358"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="179"
                cy="179"
                r="177"
                stroke="var(--accent-primary)"
                strokeWidth="4"
                strokeMiterlimit="3"
                strokeDasharray="10 91"
            />
        </svg>
    );
}
