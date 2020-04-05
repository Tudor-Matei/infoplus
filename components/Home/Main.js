import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Register from "../globals/Register";
import Login from "../globals/Login";
import Link from "next/link";
import { useState } from "react";

export default function Main() {
    const [registerModalVisible, showRegisterModal] = useState(false);
    const showRegisterModalHandler = () =>
        showRegisterModal(!registerModalVisible);

    const [loginModalVisible, showLoginModal] = useState(false);
    const showLoginModalHandler = () => showLoginModal(!loginModalVisible);

    return (
        <section className="main">
            {registerModalVisible && (
                <Register showRegisterModalHandler={showRegisterModalHandler} />
            )}
            {loginModalVisible && (
                <Login showLoginModalHandler={showLoginModalHandler} />
            )}
            <div className="main__content-panel">
                <h1 className="main__primary-heading">infoplus</h1>
                <div className="main__bullets">
                    <BulletTitle title="Simplu" icon="check" i="1" />
                    <BulletTitle title="Rapid" icon="bolt" i="2" />
                    <BulletTitle title="Intuitiv" icon="lightbulb" i="3" />
                </div>
                <div className="main__buttons">
                    <div className="main__button-sign-in">
                        <Button
                            type="button--primary"
                            title="Logheaza-te"
                            icon="sign-in-alt"
                            link=""
                            onClick={showLoginModalHandler}
                        />
                        <p
                            onClick={showRegisterModalHandler}
                            className="main__button-make-account"
                        >
                            Nu ai cont? <a href="#">Fa-ti unul!</a>
                        </p>
                    </div>
                    <Button
                        type="button--secondary"
                        title="Vezi mai multe"
                        icon="ellipsis-h"
                        link="/informatii"
                    />
                </div>
            </div>
            <Wave />
            <style jsx>{`
                .main {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: var(--text-primary);
                    transition: color 300ms ease;
                }

                .main__content-panel {
                    text-align: center;
                    position: relative;
                    z-index: 10;
                    color: var(--text-primary);
                    transition: color 300ms ease;
                }

                .main__primary-heading {
                    font-size: var(--font-larger);
                    font-weight: 800;
                }

                .main__bullets {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    justify-content: space-around;
                    margin: 0 0 80px;
                }

                .main__bullet {
                    display: flex;
                    margin: 0 30px;
                }

                .main__buttons {
                    display: flex;
                    justify-content: space-around;
                }

                @media screen and (max-width: 520px) {
                    .main__content-panel {
                        margin: 70px 30px 10px;
                    }

                    .main__primary-heading {
                        font-size: var(--font-large);
                    }

                    .main__bullets {
                        display: inline-flex;
                        flex-direction: column;
                        align-items: flex-start;
                        margin-bottom: 40px;
                    }

                    .main__buttons {
                        flex-direction: column;
                        align-items: center;
                        display: inline-flex;
                        margin-bottom: 40px;
                    }

                    .main__button-sign-in {
                        margin-bottom: 40px;
                    }
                }

                .main__button-make-account {
                    margin-top: 10px;
                }
            `}</style>
        </section>
    );
}

function BulletTitle({ title, icon, i }) {
    return (
        <div className="main__bullet">
            <div className="main__icon-bubble">
                <FontAwesomeIcon
                    icon={icon}
                    className={`main__bullet-icon--${i}`}
                />
            </div>
            <h3 className="main__tertiary-heading">{title}</h3>

            <style jsx>{`
                .main__tertiary-heading {
                    font-weight: lighter;
                }

                .main__icon-bubble {
                    width: 30px;
                    height: 30px;
                    background-color: var(--background-quaternary);
                    transition: background-color 300ms ease;
                    border-radius: 50%;
                    margin-right: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .main__bullet {
                    margin: 30px 20px 0;
                    display: flex;
                }

                :global(.main__bullet-icon--1, .main__bullet-icon--2, .main__bullet-icon--3) {
                    width: 15px;
                    height: 15px;
                }

                :global(.main__bullet-icon--1) {
                    color: var(--accent-primary);
                    transition: color 300ms ease;
                }

                :global(.main__bullet-icon--2) {
                    color: var(--accent-secondary);
                    transition: color 300ms ease;
                }

                :global(.main__bullet-icon--3) {
                    color: var(--accent-tertiary);
                    transition: color 300ms ease;
                }
                @media screen and (max-width: 520px) {
                    .main__bullet {
                        margin-left: 0;
                    }
                }
            `}</style>
        </div>
    );
}

function Button({ type, title, icon, link, onClick = null }) {
    return (
        <Link href={link}>
            <button className={type} onClick={onClick}>
                {title}
                <FontAwesomeIcon icon={icon} />
            </button>
        </Link>
    );
}

function Wave() {
    return (
        <>
            <svg
                width="100%"
                height="45%"
                viewBox="0 0 1900 280"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="main__svg"
            >
                <path d="M-2.75467 71.103C-2.75467 71.103 783.533 -88.536 1204.24 71.103C1624.94 230.742 1917.25 57.323 1917.25 57.323V480.003H-2.75467V71.103Z" />
            </svg>
            <svg
                width="100%"
                height="45%"
                viewBox="0 0 1920 280"
                xmlns="http://www.w3.org/2000/svg"
                className="main__svg"
            >
                <g opacity="0.1">
                    <path d="M1189.37 157.172C1211.4 153.28 1226.11 132.265 1222.22 110.233C1218.33 88.2007 1197.31 73.4952 1175.28 77.3872C1153.25 81.2791 1138.54 102.295 1142.43 124.327C1146.32 146.359 1167.34 161.064 1189.37 157.172Z" />
                    <path d="M1029.12 267.755C1051.15 263.863 1065.86 242.848 1061.97 220.816C1058.07 198.784 1037.06 184.078 1015.03 187.97C992.995 191.862 978.289 212.878 982.181 234.91C986.073 256.942 1007.09 271.647 1029.12 267.755Z" />
                    <path d="M854.199 141.445L950.52 117.49L923.295 212.701L854.199 141.445Z" />
                    <path d="M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z" />
                    <path d="M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z" />
                    <path d="M1595.61 250.991L1574.98 323.12L1647.11 343.746L1667.74 271.616L1595.61 250.991Z" />
                    <path d="M1476.7 281.047L1404.56 301.788L1425.31 373.924L1497.44 353.182L1476.7 281.047Z" />
                    <path d="M1121.14 308.839L1156.61 401.6L1058.74 386.106L1121.14 308.839Z" />
                    <path d="M1228.02 270.824L1294.27 306.047L1329.5 239.795L1263.24 204.571L1228.02 270.824Z" />
                    <path d="M1736.65 225.044C1758.69 221.152 1773.39 200.137 1769.5 178.105C1765.61 156.073 1744.59 141.367 1722.56 145.259C1700.53 149.151 1685.82 170.167 1689.72 192.199C1693.61 214.231 1714.62 228.936 1736.65 225.044Z" />
                    <path d="M1500.54 228.156C1522.57 224.264 1537.28 203.249 1533.38 181.217C1529.49 159.185 1508.48 144.479 1486.44 148.371C1464.41 152.263 1449.71 173.279 1453.6 195.311C1457.49 217.343 1478.51 232.048 1500.54 228.156Z" />
                    <path d="M864.402 307.951L853.986 382.238L928.273 392.655L938.69 318.367L864.402 307.951Z" />
                    <path d="M1839.45 171.57L1938.45 178.642L1883.07 260.727L1839.45 171.57Z" />

                    <path d="M444.099 244.604C422.067 248.496 407.361 269.512 411.253 291.544C415.145 313.576 436.161 328.281 458.193 324.389C480.225 320.498 494.93 299.482 491.038 277.45C487.146 255.418 466.131 240.713 444.099 244.604Z" />
                    <path d="M604.35 134.021C582.318 137.913 567.612 158.929 571.504 180.961C575.396 202.993 596.412 217.698 618.444 213.806C640.476 209.915 655.181 188.899 651.289 166.867C647.397 144.835 626.382 130.13 604.35 134.021Z" />
                    <path d="M779.272 260.332L682.951 284.287L710.176 189.076L779.272 260.332Z" />
                    <path d="M37.8615 150.786L58.4868 78.6562L-13.6427 58.0309L-34.268 130.16L37.8615 150.786Z" />
                    <path d="M156.772 120.73L228.907 99.9885L208.165 27.8531L136.03 48.5947L156.772 120.73Z" />
                    <path d="M512.335 92.9375L476.862 0.176514L574.727 15.6706L512.335 92.9375Z" />
                    <path d="M405.45 130.953L339.198 95.7295L303.975 161.982L370.227 197.205L405.45 130.953Z" />
                    <path d="M132.933 173.62C110.901 177.512 96.1952 198.528 100.087 220.56C103.979 242.592 124.995 257.297 147.027 253.405C169.059 249.514 183.764 228.498 179.872 206.466C175.98 184.434 154.965 169.729 132.933 173.62Z" />
                    <path d="M769.068 93.8261L779.485 19.5385L705.197 9.12166L694.781 83.4092L769.068 93.8261Z" />
                    <path d="M277.053 331.526L184.428 295.863L261.365 233.52L277.053 331.526Z" />
                </g>
            </svg>
            <style jsx>
                {`
                    .main__svg {
                        position: absolute;
                        bottom: 0;
                        fill: var(--background-secondary);
                        transition: fill 300ms ease;
                    }

                    @media screen and (max-width: 740px) {
                        .main__svg:last-child {
                            display: none;
                        }
                    }

                    .main__svg g {
                        fill: #626262;
                        transition: fill 300ms ease;
                    }
                `}
            </style>
        </>
    );
}
