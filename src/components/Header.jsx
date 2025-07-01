import { React, useState } from "react";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Logo" />
        <nav>
          <ul className={`${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#about">About</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#skills">Skills</a>
            </li>
            <li>
              {" "}
              <a href="#projects">Projects</a>
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>
            </li>{" "}
          </ul>
        </nav>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className={`menuIcon ${menuOpen ? "open" : ""}`}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
