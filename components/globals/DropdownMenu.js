import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { light, dark } from "../../styles/theme";
export default function DropdownMenu({ isDropdownToggled }) {
    const [cssTheme, setCssTheme] = useState(light);
    const changeTheme = () => setCssTheme(cssTheme === dark ? light : dark);

    return (
        <div
            className={`dropdown-menu-header ${
                isDropdownToggled ? "dropdown-menu-header--active " : ""
            }`}
        >
            <ul className="dropdown-menu-header__ul">
                <DropdownMenuAccordion title="Exercitii">
                    {["Clasa IX", "Clasa X", "Clasa XI"]}
                </DropdownMenuAccordion>
                <hr className="dropdown-menu-header__hr" />
                <DropdownMenuAccordion title="Resurse">
                    {["Clasa IX", "Clasa X", "Clasa XI"]}
                </DropdownMenuAccordion>
                <hr className="dropdown-menu-header__hr" />
                <li
                    className="dropdown-menu-header__main-li"
                    onClick={changeTheme}
                >
                    Tema {cssTheme === light ? "Intunecata" : "Luminoasa"}
                </li>
                <hr className="dropdown-menu-header__hr" />
                <li className="dropdown-menu-header__main-li">Mod proiector</li>
                <hr className="dropdown-menu-header__hr" />
                <li className="dropdown-menu-header__main-li">Detalii cont</li>
            </ul>
            <style jsx global>
                {cssTheme}
            </style>
            {/* <style jsx global>{`
                :root {
                    --background-primary: ${isWhiteTheme ? "#fff" : "#1e1e1e"};
                    --background-secondary: ${isWhiteTheme
                        ? "#f1f1f1"
                        : "#2a2a2a"};
                    --background-tertiary: ${isWhiteTheme
                        ? "#dadada"
                        : "#434545"};
                    --background-quaternary: ${isWhiteTheme
                        ? "#2a2a2a"
                        : "#3d3d3d"};

                    --text-primary: ${isWhiteTheme ? "#2a2a2a" : "#f1f1f1"};
                    --text-secondary: ${isWhiteTheme ? "#f1f1f1" : "#e6e6e6"};
                    --text-button: #2a2a2a;

                    --accent-primary: #56f55c;
                    --accent-secondary: #3db8ff;
                    --accent-tertiary: #ffcc00;

                    --contact: ${isWhiteTheme ? "#2a2a2a" : "#3d3d3d"};
                    --footer: #1e1e1e;
                    --box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                    --box-shadow-active: 0 4px 15px 5px rgba(0, 0, 0, 0.2);
                }
            `}</style> */}
            <style jsx global>{`
                .dropdown-menu-header {
                    width: 220px;
                    height: calc(100vh - 60px);
                    position: fixed;
                    right: 0;
                    bottom: 0;
                    background-color: var(--background-secondary);
                    z-index: -1;
                    box-shadow: -4px 10px 10px rgba(0, 0, 0, 0.2);
                    overflow-y: auto;
                    padding-top: 30px;
                    transform: translateX(230px) translateZ(0);
                    transition: color, background-color, transform 300ms ease;
                }

                .dropdown-menu-header--active {
                    transform: translateX(0);
                }

                .dropdown-menu-header__hr {
                    width: 90%;
                }

                .dropdown-menu-header__ul {
                    padding-top: 0;
                    padding-left: 5px;
                    list-style-type: none;
                }

                .dropdown-menu-header__main-li {
                    font-weight: bold;
                    font-size: 1.2rem;
                    cursor: pointer;
                    position: relative;
                    padding: 10px 0 10px 10px;
                }

                .dropdown-menu-header__main-li:hover,
                .dropdown-menu-header__secondary-li:hover {
                    background-color: var(--background-primary);
                    transition: background-color 300ms ease;
                }

                .dropdown-menu-header__main-li:hover::before,
                .dropdown-menu-header__secondary-li:hover::before {
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
        </div>
    );
}

function DropdownMenuAccordion({ title, children }) {
    const [isToggled, toggle] = useState(false);

    const toggleDropdown = () => toggle(!isToggled);

    return (
        <div className="dropdown-menu-header__option-dropdown">
            <li
                onClick={toggleDropdown}
                className="dropdown-menu-header__main-li"
            >
                {title}
                <FontAwesomeIcon
                    icon="angle-down"
                    color="2A2A2A"
                    className={`dropdown-menu-header__icon ${
                        isToggled ? "dropdown-menu-header__icon--active" : ""
                    }`}
                />
            </li>
            <div
                className={`dropdown-menu-header__content ${
                    isToggled ? "dropdown-menu-header__content--active" : ""
                }`}
            >
                <ul className="dropdown-menu-header__content-ul">
                    {children.map((child, i) => (
                        <li
                            className="dropdown-menu-header__secondary-li"
                            key={`child_${i}`}
                        >
                            {child}
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx global>{`
                .dropdown-menu-header__secondary-li {
                    padding: 10px 0;
                    font-size: 1.1rem;
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
