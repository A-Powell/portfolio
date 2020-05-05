import React, { useState } from "react";
import "./styles.css";
import cryptomap from '../../images/cryptomaps.PNG'
import hackathonPortal from '../../images/hackathonportal.PNG'
import productqueue from '../../images/productqueue.PNG'


const Projects = (props) => {


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
          <p>A comprehensive portal for hackathons where students can submit their work and judges can evaluate in one place.</p>

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
          <p>A place for lambda labs instructors to store a list of product ideas that will be built during lambda labs. (an 8 week long build off for students)</p>
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
          <p>Cryptocurrency data in the form of visual infographic blocks that represent consensus mechanisms. The size of the block will depend on 4 metrics: market cap, liquid market cap, reported volume and real volume.</p>
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
