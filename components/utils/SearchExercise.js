import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { ShowAlertContext } from "../../pages/_app";

export default function SearchExercise({ inputWidth, style = {}, children = null }) {
  const [needsSearch, setSearch] = useState(false);
  return (
    <>
      {needsSearch && <SearchInput inputWidth={inputWidth} style={style} setSearch={setSearch} />}

      <div className="search-exercise__toggle-button" onClick={() => setSearch(!needsSearch)}>
        {!needsSearch && children}
      </div>

      <style jsx>{`
        :global(.search--active) {
          background-color: var(--background-secondary);
          transform: scale(0.8);
        }

        @media screen and (max-width: 825px) {
          .header__button {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

function SearchInput({ inputWidth, style, setSearch }) {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const createAlert = useContext(ShowAlertContext);
  return (
    <>
      <form
        style={style}
        onSubmit={(e) => {
          e.preventDefault();
          if (/[^a-zA-Z0-9]/g.test(searchText)) {
            createAlert({
              ofType: "error",
              saying: "Numele exercițiului poate să conțină doar litere și cifre.",
            });
            return;
          }

          router.push(`/exercitiu/${searchText}`);
        }}
      >
        <input
          onChange={({ target: { value } }) => setSearchText(value)}
          value={searchText}
          required
          minLength={3}
          className="search-input__animated"
          title="Numele exercițiului poate să conțină doar litere și cifre."
          placeholder="Introdu titlul unui exercițiu"
        />

        <FontAwesomeIcon
          icon="times"
          onClick={() => setSearch((previousSearchState) => !previousSearchState)}
          color="var(--text-primary)"
          className="search-exercise__button-close"
        />
      </form>
      <style jsx>{`
        @keyframes slideSearchInputIn {
          to {
            width: ${inputWidth};
          }
        }
        .search-input__animated {
          animation: slideSearchInputIn 500ms ease forwards;
        }
      `}</style>

      <style jsx>{`
        form {
          position: relative;
        }

        input {
          height: 35px;
          width: 0;
        }

        :global(.search-exercise__button-close) {
          opacity: 0;
          position: absolute;
          animation: fadeButtonIn 500ms ease forwards;
          transition: opacity 300ms linear;
          cursor: pointer;
        }

        :global(svg.search-exercise__button-close:hover) {
          opacity: 0.5;
        }

        @keyframes fadeButtonIn {
          to {
            opacity: 1;
            transform: translate(-24px, 9px);
          }
        }
      `}</style>
    </>
  );
}
