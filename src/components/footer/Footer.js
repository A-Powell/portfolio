import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-holder">
      <div className="socials">
        <a href="https://github.com/A-Powell" className="socialMedia">
          <i class="fab fa-github q" />
          <p>Github</p>
        </a>
        <a href="https://www.linkedin.com/in/apowellfsw/" className="socialMedia">
          <i class="fab fa-linkedin q" />
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="copy">
        <copyright>
          <i class="far fa-copyright qq" />
          <a href="https://github.com/A-Powell" alt="Austin's Github">
            Austin Powell
          </a>
        </copyright>
      </div>
    </div>
  );
};

export default Footer;
