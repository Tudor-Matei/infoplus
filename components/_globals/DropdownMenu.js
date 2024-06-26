import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useState } from "react";

import { LoggedInDataContext } from "../../pages/_app";
import useComponentDidMount from "../_hooks/componentDidMount";
import SearchExercise from "../utils/SearchExercise";

export default function DropdownMenu({ isDropdownToggled }) {
  return (
    <>
      <div className={`dropdown-menu-header ${isDropdownToggled ? "dropdown-menu-header--active " : ""}`}>
        <DropdownMenuUl />
      </div>
      <style jsx global>{`
        .dropdown-menu-header {
          width: 220px;
          height: calc(100vh - 60px);
          position: fixed;
          right: 0;
          bottom: 0;
          background-color: var(--background-secondary);
          z-index: -1;
          box-shadow: -12px 13px 9px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
          padding-top: 30px;
          transform: translateX(230px) translateZ(0);
          transition: color, background-color, transform 300ms ease;
        }

        .dropdown-menu-header--active {
          transform: translateX(0);
        }
      `}</style>
    </>
  );
}

function DropdownMenuUl() {
  const { isAuthenticated, profession } = useContext(LoggedInDataContext);
  return (
    <>
      <ul className="dropdown-menu-header__ul">
        <SearchExercise inputWidth="185px" style={{ marginBottom: "15px", paddingLeft: "15px" }}>
          <li className="dropdown-menu-header__main-li">Caută exercițiu</li>
        </SearchExercise>
        <hr className="dropdown-menu-header__hr" />
        <DropdownMenuAccordion title="Exerciții">
          {[
            { titleLi: "Clasa IX", href: "/exercitii#ix" },
            { titleLi: "Clasa X", href: "/exercitii#x" },
            { titleLi: "Clasa XI", href: "/exercitii#xi" },
          ]}
        </DropdownMenuAccordion>
        <hr className="dropdown-menu-header__hr" />
        <ThemeChangerButton />
        {isAuthenticated && profession === "Profesor" && (
          <>
            <hr className="dropdown-menu-header__hr" />
            <Link href="/exercitii/compuse-de-mine">
              <li className="dropdown-menu-header__main-li">Compune exercițiu</li>
            </Link>
          </>
        )}
      </ul>
      <style jsx>{`
        .dropdown-menu-header__hr {
          width: 85%;
        }

        .dropdown-menu-header__ul {
          padding-top: 0;
          padding-left: 5px;
          list-style-type: none;
        }

        :global(.dropdown-menu-header__main-li) {
          font-weight: bold;
          font-size: var(--font-small);
          cursor: pointer;
          position: relative;
          padding: 10px 0 10px 15px;
          user-select: none;
        }

        :global(.dropdown-menu-header__main-li:hover, .dropdown-menu-header__secondary-li:hover) {
          background-color: var(--background-primary);
          transition: background-color 300ms ease;
        }

        :global(.dropdown-menu-header__main-li:hover::before, .dropdown-menu-header__secondary-li:hover::before) {
          content: "";
          width: 5px;
          height: 100%;
          background-color: var(--accent-primary);
          transition: background-color 300ms ease;
          position: absolute;
          left: 0;
          top: 0;
        }
      `}</style>
    </>
  );
}

function DropdownMenuAccordion({ title, children }) {
  const [isToggled, toggle] = useState(false);
  const toggleDropdown = () => toggle(!isToggled);

  return (
    <div className="dropdown-menu-header__option-dropdown">
      <li onClick={toggleDropdown} className="dropdown-menu-header__main-li">
        {title}
        <FontAwesomeIcon
          icon="angle-down"
          color="2A2A2A"
          className={`dropdown-menu-header__icon ${isToggled ? "dropdown-menu-header__icon--active" : ""}`}
        />
      </li>
      <div className={`dropdown-menu-header__content ${isToggled ? "dropdown-menu-header__content--active" : ""}`}>
        <ul className="dropdown-menu-header__content-ul">
          {children.map(({ titleLi = "", href = "" }, i) => (
            <Link href={href} key={`child_link-${i}-${href}`}>
              <li className="dropdown-menu-header__secondary-li" key={`child_li-${i}`}>
                {titleLi}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <style jsx global>{`
        .dropdown-menu-header__secondary-li {
          padding: 10px 0;
          font-size: var(--font-smaller);
          cursor: pointer;
          position: relative;
          padding-left: 20px;
        }

        .dropdown-menu-header__content-ul {
          list-style-type: none;
          padding-left: 0;
        }

        .dropdown-menu-header__option-dropdown {
          overflow: hidden;
        }

        .dropdown-menu-header__content {
          margin-left: 20px;
          height: 0;
          transition: height 300ms ease;
        }

        .dropdown-menu-header__content--active {
          height: 140px;
        }

        .dropdown-menu-header__icon {
          margin-left: 20px;
          transition: transform 300ms ease;
        }
        .dropdown-menu-header__icon--active {
          transform: rotateZ(180deg);
        }
      `}</style>
    </div>
  );
}

function ThemeChangerButton() {
  const [theme, setTheme] = useState("dark");
  useComponentDidMount(() => {
    setTheme(window.__THEME);
  });

  return (
    <li
      className="dropdown-menu-header__main-li"
      onClick={() => {
        window.__THEME = window.__THEME === "dark" ? "light" : "dark";
        document.documentElement.className = `theme-${window.__THEME}`;

        localStorage.setItem("theme", window.__THEME);
        setTheme(window.__THEME);
      }}
    >
      Tema {theme === "dark" ? "Întunecată" : "Luminoasă"}
    </li>
  );
}
