import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import CheckmarkSolved from "../utils/CheckmarkSolved";
import difficultyText from "../../utils/difficultyText";

export default function Exercise(props) {
  return (
    <>
      {props.compact ? <CompactExercise {...props} /> : <DetailedExercise {...props} />}
      <style jsx global>{`
        .exercise {
          width: 90%;
          margin: 100px auto;
          background-color: var(--background-secondary);
          box-shadow: var(--box-shadow);
          padding: 30px;
          border-radius: 20px;
          transition: background-color 300ms ease;
          animation: fadeFromBottom 500ms ease forwards;
        }

        @keyframes fadeFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .exercise__title {
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

        @media screen and (max-width: 560px) {
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
    </>
  );
}

function DetailedExercise({
  className = "",
  title,
  isSolved = false,
  children,
  authorName = "",
  datePublished,
  source = "",
  difficulty,
}) {
  return (
    <div className={`exercise ${className}`} style={{ borderBottom: `5px solid var(--difficulty-${difficulty}` }}>
      <h2 className="exercise__title">{title}</h2>
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

        <ButtonSolve href={`/exercitiu/${title}`} difficulty={difficulty} />
      </div>
    </div>
  );
}

function CompactExercise({ title, children, datePublished, sentSolutions, difficulty }) {
  return (
    <>
      <div className="exercise" style={{ borderBottom: `5px solid var(--difficulty-${difficulty}` }}>
        <Link href={`../exercitiu/${title}`}>
          <h2 className="exercise__title">{title}</h2>
        </Link>
        <FontAwesomeIcon icon="external-link-alt" color="var(--text-primary)" />
        <p className="exercise__description">{children}</p>

        <div className="exercise__details-and-button">
          <div className="exercise__details">
            <p>
              Soluții trimise: <b>{sentSolutions}</b>
            </p>{" "}
            &#8226;
            <p>{datePublished}</p> &#8226;
            <p className="exercise__difficulty">{difficultyText(difficulty)}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          text-decoration: underline;
          cursor: pointer;
          margin-right: 10px;
        }

        .exercise {
          flex: 1;
          margin: 25px;
        }
      `}</style>
    </>
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
