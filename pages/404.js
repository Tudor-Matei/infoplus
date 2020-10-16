import { useRouter } from "next/router";

import IconBubble from "../components/utils/IconBubble";
import ShapesArt from "../components/_globals/ShapesArt";

export default function Custom404() {
  const router = useRouter();
  return (
    <>
      <section>
        <div className="main-part">
          <h1>404</h1>
          <p>Te-ai cam pierdut, cumetre.</p>
          <button className="button--secondary" onClick={() => router.back()}>
            Mergi Înapoi <IconBubble className="custom404__icon-bubble" icon="arrow-left" />
          </button>
        </div>

        <ShapesArt height="100%" preserveAspectRatio="none" viewBox="0 0 1000 500" className="custom404__shapes-part" />
        <Wave404 />
      </section>

      <style jsx>{`
        section {
          min-height: 100vh;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main-part {
          color: var(--text-primary);
        }

        h1 {
          font-size: 128px;
        }

        p {
          text-align: center;
          margin-bottom: 50px;
          margin-top: -15px;
        }

        button {
          margin: auto;
          display: block;
        }

        :global(.custom404__icon-bubble) {
          vertical-align: middle;
          margin-top: -2px;
        }

        :global(.custom404__shapes-part) {
          z-index: -1;
        }

        :global(.custom404__shapes-part g) {
          fill: var(--accent-failure-secondary);
          opacity: 0.18;
        }
      `}</style>
    </>
  );
}

function Wave404() {
  return (
    <>
      <svg
        width="100%"
        height="45%"
        viewBox="0 0 1920 475"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M560 152C333.895 -105.605 227.559 29.9849 0 87.818V481H1928V32.2732C1877.5 32.2732 1928 325 1434.5 87.818C1179.42 -34.777 883 520 560 152Z"
          fill="var(--background-secondary)"
        />
      </svg>
      <style jsx>{`
        svg {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: -1;
        }
      `}</style>
    </>
  );
}
