import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

export default function Header() {
  const [isDropdownToggled, toggleDropdown] = useState(false);
  const toggleMenuDropdown = () => toggleDropdown(!isDropdownToggled);

  return (
    <header className="header">
      <SiteLogo />
      <IconsRightMenu
        isDropdownToggled={isDropdownToggled}
        toggleMenuDropdown={toggleMenuDropdown}
      />
      <DropdownMenu isDropdownToggled={isDropdownToggled} />
    </header>
  );
}

function IconsRightMenu({ isDropdownToggled, toggleMenuDropdown }) {
  return (
    <div className="header__icons-right">
      <div className="header__search-button">
        <FontAwesomeIcon icon="search" className="header__icon" />
      </div>
      <div className="header__user-button">
        <FontAwesomeIcon icon="user" className="header__icon" />
      </div>

      <div className="header__menu-button" onClick={toggleMenuDropdown}>
        <FontAwesomeIcon
          icon="bars"
          className={`menu-button__icon ${
            isDropdownToggled ? "menu-button--active" : ""
          }`}
        />
        <h4 className="header__menu-title">MENIU</h4>
      </div>
    </div>
  );
}

function SiteLogo() {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__site-logo"
    >
      <path
        d="M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z"
        fill="#2A2A2A"
      />
      <path
        d="M21.9467 21.504C21.1573 21.504 20.4853 21.2267 19.9307 20.672C19.376 20.1173 19.0987 19.4453 19.0987 18.656C19.0987 17.8667 19.376 17.1947 19.9307 16.64C20.4853 16.0853 21.1573 15.808 21.9467 15.808C22.736 15.808 23.408 16.0853 23.9627 16.64C24.5173 17.1947 24.7947 17.8667 24.7947 18.656C24.7947 19.4453 24.5173 20.1173 23.9627 20.672C23.408 21.2267 22.736 21.504 21.9467 21.504ZM24.5387 23.072V40H19.3547V23.072H24.5387ZM37.1057 36.064H33.1057V30.496H27.5057V26.528H33.1057V21.088H37.1057V26.528H42.6737V30.496H37.1057V36.064Z"
        fill="#EBEBEB"
      />
    </svg>
  );
}
