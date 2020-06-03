import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountDetails from "../components/Account/Details";
import ExercisesDetails from "../components/Account/ExercisesDetails";
import Exercise from "../components/ExercisesList/Exercise";
import { useContext, useState } from "react";
import getTokenInfo from "../utils/getTokenInfo";
import { serialize } from "cookie";
import { ShowAlertContext } from "./_app";

import Router from "next/router";
import useComponentDidMount from "../components/_hooks/componentDidMount";

export async function getServerSideProps({ req, res }) {
    const { data, err } = await getTokenInfo(req.headers["cookie"]);

    //err = 1 -> neautentificat
    if (err === 1) return { props: { authenticated: false, userData: null, err: null } };
    else if (err !== 1 && err) return { props: { authenticated: false, userData: null, err } };

    if (data.newAccessToken)
        res.setHeader(
            "Set-Cookie",
            serialize("_accessToken", data.newAccessToken, {
                sameSite: true,
                path: "/",
            })
        );

    return { props: { authenticated: true, userData: data, err: null } };
}

export default function Dashboard({ authenticated, userData, err }) {
    //we are going to have stuff that's like on the header or an option with "log out" (auth: true)
    // when wee get user data and set it with React Context from SSR routes and login
    const modifyAlert = useContext(ShowAlertContext);

    useComponentDidMount(() => {
        if (!authenticated) Router.push("/");

        if (!err) {
            modifyAlert({
                isVisible: true,
                props: {
                    type: 0,
                    children: err,
                },
                customToggleHandler: () => Router.push("/"),
            });
        }
    });

    return (
        <>
            <section className="dashboard">
                <div className="dashboard__introduction">
                    <WelcomingMessage />
                    <div className="dashboard__side-info">
                        <div className="dashboard__quick-action-pills">
                            <QuickActionPill icon="external-link-alt">
                                Rezolvă exerciții
                            </QuickActionPill>
                            <QuickActionPill icon="sign-in-alt">
                                Vezi secțiunea "Resurse"
                            </QuickActionPill>
                        </div>
                        <h3>Status exerciții</h3>
                        <ExercisesDetails />
                    </div>
                </div>
                <div className="dashboard__heading">
                    <h3>Detaliile contului tău</h3>
                </div>
                <AccountDetails />
                {/* <ProgressDetails /> */}

                <div className="exercises-container">
                    <div className="dashboard__heading">
                        <h3>Cele mai noi exerciții</h3>
                    </div>
                    <Exercise
                        className="exercise--less-margin-top"
                        title="Vrei sa pleci dar numa numa yay"
                        authorName="Your mom"
                        datePublished="your moeeeem"
                        source="my ass"
                        difficulty={3}
                        exerciseId="3291"
                    >
                        numa numa yayyyyeeet
                    </Exercise>
                    <Exercise
                        title="Vrei sa pleci dar numa numa yay"
                        authorName="Your mom"
                        datePublished="your moeeeem"
                        source="my ass"
                        difficulty={3}
                        exerciseId="3291"
                    >
                        numa numa yayyyyeeet
                    </Exercise>
                    <Exercise
                        title="Vrei sa pleci dar numa numa yay"
                        authorName="Your mom"
                        datePublished="your moeeeem"
                        source="my ass"
                        difficulty={3}
                        exerciseId="3291"
                    >
                        numa numa yayyyyeeet
                    </Exercise>
                    <Exercise
                        title="Vrei sa pleci dar numa numa yay"
                        authorName="Your mom"
                        datePublished="your moeeeem"
                        source="my ass"
                        difficulty={3}
                        exerciseId="3291"
                    >
                        numa numa yayyyyeeet
                    </Exercise>
                    <Exercise
                        title="Vrei sa pleci dar numa numa yay"
                        authorName="Your mom"
                        datePublished="your moeeeem"
                        source="my ass"
                        difficulty={3}
                        exerciseId="3291"
                    >
                        numa numa yayyyyeeet
                    </Exercise>
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

                :global(.dashboard .exercise--less-margin-top) {
                    margin-top: 30px;
                }

                @media screen and (max-width: 1024px) {
                    .dashboard {
                        padding-top: 100px;
                    }

                    .dashboard__quick-action-pills {
                        flex-direction: column;
                    }
                }

                @media screen and (max-width: 512px) {
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
        </>
    );
}

function WelcomingMessage() {
    return (
        <>
            <div className="dashboard__welcoming-message">
                <div className="dashboard__profile-picture">
                    <InnerCircleSVG className="dashboard__profile-picture-svg" />
                    <OuterCircleSVG className="dashboard__profile-picture-svg" />
                </div>
                <div className="dashboard__title">
                    <h2>Bună ziua, John Doe</h2>
                    <a href="#">
                        Deloghează-te
                        <FontAwesomeIcon className="dashboard__sign-out-icon" icon="sign-out-alt" />
                    </a>
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

function QuickActionPill({ icon, children }) {
    return (
        <>
            <div className="dashboard__quick-action-pill">
                <div className="dashboard__quick-action-icon">
                    <FontAwesomeIcon icon={icon} color="var(--text-button)" />
                </div>

                {children}
            </div>
            <style jsx>{`
                .dashboard__quick-action-pill {
                    padding: 10px 20px;
                    background-color: var(--background-secondary);
                    box-shadow: var(--box-shadow);
                    border-radius: 20px;
                    width: 100%;
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
