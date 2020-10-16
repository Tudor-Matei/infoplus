export default function LoadingBar() {
  return (
    <>
      <div id="loading-bar"></div>
      <style jsx>{`
        #loading-bar {
          position: fixed;
          top: 0;
          z-index: 200;
          background-color: var(--loading-bar);
          box-shadow: 0px 0px 5px 0px var(--loading-bar);
          width: 0%;
          opacity: 0;
          display: none;
          height: 3px;
          transition: opacity 500ms linear;
        }

        .loading-bar--is-loading {
          display: block !important;
          animation: loading 10000ms ease forwards;
        }

        .loading-bar--loaded {
          display: block !important;
          animation: finalizeLoading 500ms ease forwards;
        }

        @keyframes finalizeLoading {
          from {
            width: 85%;
            opacity: 1;
          }
          99.9% {
            width: 100%;
            opacity: 0;
          }
          100% {
            display: none;
          }
        }

        @keyframes loading {
          from {
            width: 0%;
            opacity: 1;
          }
          to {
            width: 80%;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
