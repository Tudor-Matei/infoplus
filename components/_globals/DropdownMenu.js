import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";

import { light, dark } from "../../styles/theme";
import { ThemeContext } from "../../pages/_app";

export default function DropdownMenu({ isDropdownToggled }) {
    return (
        <>
            <div
                className={`dropdown-menu-header ${
                    isDropdownToggled ? "dropdown-menu-header--active " : ""
                }`}
            >
                <DropdownMenuUl />
                <ThemeConsumer Component={ThemeStyleSheet} />
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
    return (
        <>
            <ul className="dropdown-menu-header__ul">
                <DropdownMenuAccordion title="Exercitii">
                    {[
                        { titleLi: "Clasa IX", href: "/exercitii/ix" },
                        { titleLi: "Clasa X", href: "/exercitii/x" },
                        { titleLi: "Clasa XI", href: "/exercitii/xi" },
                    ]}
                </DropdownMenuAccordion>
                <hr className="dropdown-menu-header__hr" />
                <DropdownMenuAccordion title="Resurse">
                    {[
                        { titleLi: "Clasa IX", href: "/resurse/ix" },
                        { titleLi: "Clasa X", href: "/resurse/x" },
                        { titleLi: "Clasa XI", href: "/resurse/xi" },
                    ]}
                </DropdownMenuAccordion>
                <hr className="dropdown-menu-header__hr" />
                <ThemeConsumer Component={ThemeChangerButton} />
                <hr className="dropdown-menu-header__hr" />
                <li className="dropdown-menu-header__main-li">Mod proiector</li>
                <hr className="dropdown-menu-header__hr" />
                <Link href="/cont">
                    <li className="dropdown-menu-header__main-li">Detalii cont</li>
                </Link>
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
                    {children.map(({ titleLi = "", href = "" }, i) => (
                        <Link href={href} key={`child_link-${i}-${href}`}>
                            <li
                                className="dropdown-menu-header__secondary-li"
                                key={`child_li-${i}`}
                            >
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

function ThemeConsumer({ Component }) {
    return (
        <ThemeContext.Consumer>
            {({ isLightTheme, setTheme }) => {
                return <Component isLightTheme={isLightTheme} setTheme={setTheme} />;
            }}
        </ThemeContext.Consumer>
    );
}

function ThemeStyleSheet({ isLightTheme }) {
    const currentTheme = isLightTheme ? light : dark;
    return (
        <style jsx global>
            {currentTheme}
        </style>
    );
}

function ThemeChangerButton({ isLightTheme, setTheme }) {
    const changeTheme = () => {
        setTheme(!isLightTheme);
        window.localStorage.setItem("theme", !isLightTheme ? "light" : "dark");
    };
    return (
        <li className="dropdown-menu-header__main-li" onClick={changeTheme}>
            Tema {isLightTheme ? "Intunecata" : "Luminoasa"}
        </li>
    );
}
