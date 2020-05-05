import React from "react";
import "./styles.css";
import cryptomap from '../../images/cryptomaps.PNG'
import hackathonPortal from '../../images/hackathonportal.PNG'
import productqueue from '../../images/productqueue.PNG'

const Projects = () => {
  return (
    <div className="projects-holder" id="projects">
      <h3 className="projects-title"> - - - - - Projects - - - - -</h3>
      <div className="projects">
        <div className="project">
          <img
            src={hackathonPortal}
            alt="project"
          />
          <h2>Hackathon Portal</h2>
          <p>Project Desc</p>
          <a className="links" href="https://github.com/Lambda-School-Labs/hackathon-portal-fe">
            <i class="fab fa-github ii" />
          </a>
          <a className="links" href="https://www.hackathon-portal.tech/">
            <i class="fas fa-globe ii" />
          </a>
        </div>

        <div className="project">
          <img
            src={productqueue}
            alt="project"
          />
          <h2>Product Queue</h2>
          <p>Project Desc</p>
          <a className="links" href="https://github.com/build-415-productqueue">
            <i class="fab fa-github ii" />
          </a>
          <a className="links" href="https://pqlanding.netlify.app/">
            <i class="fas fa-globe ii" />
          </a>
        </div>

        <div className="project">
          <img
            src={cryptomap}
            alt="project"
          />
          <h2>Crypto Maps</h2>
          <p>Project Desc</p>
          <a className="links" href="https://github.com/BwFT-CryptoMap/cryptomaps">
            <i class="fab fa-github ii" />
          </a>
          <a className="links" href="https://cryptomap.netlify.app/">
            <i class="fas fa-globe ii" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
