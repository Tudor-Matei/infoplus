import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import OverlayDarkener from "./OverlayDarkener";

export default memo(function DataPanel({ children, onClick }) {
  if (!children) return null;
  return (
    <>
      <OverlayDarkener onClick={onClick} />
      <div className="data-panel">
        <div className="data-panel__close-button" onClick={onClick}>
          <FontAwesomeIcon icon="times" style={{ width: "20px", height: "25px" }} />
        </div>
        <hr />
        {children}
      </div>

      <style jsx>{`
        .data-panel {
          border-radius: 20px;
          position: fixed;
          max-height: 70vh;
          height: fit-content;
          overflow-y: auto;
          width: 70%;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          z-index: 50;
          background-color: var(--background-primary);
          padding: 20px;
          transform: translateY(-50px);
          opacity: 0;
          color: var(--text-primary);
          animation: slideIn 500ms ease forwards;
        }

        .data-panel__close-button {
          width: 100%;
          height: 40px;
          color: var(--text-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: color 300ms linear;
        }

        .data-panel__close-button:hover {
          color: var(--accent-quaternary);
        }

        hr {
          margin-top: 10px;
          margin-bottom: 30px;
        }

        :global(.data-panel code) {
          white-space: break-spaces;
        }

        @media screen and (max-width: 825px) {
          .data-panel {
            width: 80%;
          }
        }

        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
});
