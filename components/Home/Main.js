import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Register from "../_globals/Register";

import { createContext, useContext, useState } from "react";

import { LoggedInDataContext, ShowLoginContext } from "../../pages/_app";
import ShapesArt from "../_globals/ShapesArt";
import LogoutButton from "../utils/LogoutButton";

const RegisterModalHandler = createContext(null);
export { RegisterModalHandler };

export default function Main() {
  const [registerModalVisible, showRegisterModal] = useState(false);
  const showRegisterModalHandler = () => showRegisterModal(!registerModalVisible);

  const showLoginModal = useContext(ShowLoginContext);
  const { isAuthenticated } = useContext(LoggedInDataContext);

  return (
    <section className="main">
      <RegisterModalHandler.Provider value={showRegisterModalHandler}>
        {registerModalVisible && <Register />}
      </RegisterModalHandler.Provider>
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
              title={!isAuthenticated ? "Logheaza-te" : "Către contul tău"}
              icon={!isAuthenticated ? "sign-in-alt" : "arrow-right"}
              link={!isAuthenticated ? "" : "/dashboard"}
              onClick={!isAuthenticated ? showLoginModal : undefined}
            />
            <p className="main__button-make-account">
              {!isAuthenticated && "Nu ai cont? "}

              {!isAuthenticated ? (
                <a href="#" onClick={showRegisterModalHandler}>
                  Fa-ti unul!
                </a>
              ) : (
                <LogoutButton type="anchor" />
              )}
            </p>
          </div>
          <Button type="button--secondary" title="Către Exerciții" icon="dumbbell" link="/exercitii" />
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
        <FontAwesomeIcon icon={icon} className={`main__bullet-icon--${i}`} />
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
      <ShapesArt viewBox="0 0 1920 280" className="main__shapes-part" />
      <style jsx>
        {`
          .main__svg {
            position: absolute;
            bottom: 0;
            fill: var(--background-secondary);
            transition: fill 300ms ease;
          }

          @media screen and (max-width: 768px) {
            :global(.main__shapes-part:last-child) {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}
