import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function DropdownMenu({ isDropdownToggled }) {
  return (
    <div
      className={`dropdown-menu-header ${
        isDropdownToggled ? "dropdown-menu-header--active " : ""
      }`}
    >
      <ul>
        <DropdownMenuAccordion title="Exercitii">
          {["Clasa IX", "Clasa X", "Clasa XI"]}
        </DropdownMenuAccordion>
        <hr />
        <DropdownMenuAccordion title="Resurse">
          {["Clasa IX", "Clasa X", "Clasa XI"]}
        </DropdownMenuAccordion>
        <hr />
        <li>Tema Intunecata</li>
        <hr />
        <li>Mod proiector</li>
        <hr />
        <li>Detalii cont</li>
      </ul>
    </div>
  );
}

function DropdownMenuAccordion({ title, children }) {
  const [isToggled, toggle] = useState(false);

  const toggleDropdown = () => toggle(!isToggled);

  return (
    <div className="dropdown-menu-header__option-dropdown">
      <li onClick={toggleDropdown}>
        {title}
        <FontAwesomeIcon
          icon="angle-down"
          color="2A2A2A"
          className={`dropdown-menu-header__icon ${
            isToggled ? "icon--active" : ""
          }`}
        />
      </li>
      <div
        className={`dropdown-menu-header__content ${
          isToggled ? "content--active" : ""
        }`}
      >
        <ul>
          {children.map((child, i) => (
            <li key={`child_${i}`}>{child}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
