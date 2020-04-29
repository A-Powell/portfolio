import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="nav-holder">
      <div className="nav-links">
        <a href="#about" className="nav-link">
          <p>About</p>
        </a>

        <a href="#skills" className="nav-link">
          <p>Skills</p>
        </a>

        <a href="#projects" className="nav-link">
          <p>Projects</p>
        </a>

        <a href="" className="nav-link">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
