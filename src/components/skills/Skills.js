import React from "react";
import "./styles.css";

const Skills = () => {
  return (
    <div className="skills-holder" id="skills">
      <div>
        <h3 className="skills-title">- - - - - Skills - - - - -</h3>
      </div>
      <div className="skills">
        <div className="skill">
          <i class="fab fa-html5" />
          <h3> HTML5 </h3>
        </div>
        <div className="skill">
          <i class="fab fa-css3-alt" />
          <h3> CSS3 </h3>
        </div>
        <div className="skill">
          <i class="fab fa-js-square" />
          <h3> JavaScript </h3>
        </div>
        <div className="skill">
          <i class="fab fa-react" />
          <h3> React/Redux </h3>
        </div>
        <div className="skill">
          <i class="fab fa-node-js" />
          <h3> Node/Express </h3>
        </div>
        <div className="skill">
          <i class="fa fa-database" />
          <h3> SQL</h3>

        </div>
        <div className="skill">
          <i class="fa fa-coffee" />
          <h3> Java/Spring</h3>

        </div>
        <div className="skill">
          <i class="fa fa-desktop" />
          <h3> Python</h3>

        </div>
        <div className="skill">
          <i class="fa fa-flask" />
          <h3> CS</h3>

        </div>
      </div>
    </div>
  );
};

export default Skills;
