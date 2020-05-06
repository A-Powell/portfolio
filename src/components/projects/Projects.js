import React, { useState } from "react";
import "./styles.css";
import cryptomap from '../../images/cryptomaps.PNG'
import hackathonPortal from '../../images/hackathonportal.PNG'
import productqueue from '../../images/productqueue.PNG'
import { Button, Accordion, Card } from "react-bootstrap";




const Projects = (props) => {

  const [modalShow, setModalShow] = useState(false);

  const projects = [
    {
      name: "Hackaton Portal",
      img: hackathonPortal,
      desc: "*Zachary Kirby* is the director of Cal Hacks, one of the largest hackathons in the world. Every year, he gets frantically stressed because there is not a smooth process for judging. In the span of an hour, he manually assigns judges to projects based on category, and then manually tabulates the scores. Hackathon judging is an issue at every hackathon. This should be an application where coders can easily submit their hackathon projects (video submission, deployed link, github url), judges can easily score projects, and organizers can organize the process by creating project categories, a rubric, and assigning judges to projects. Make organization, submission, and judging of hackathon projects more seamless while enhancing creativity through ease of execution. Implemented overall functionality in less than 8 weeks in the areas of Front-End and Back-End using React, redux, node.js, express.js, Auth0, and various other libraries, Took part as a full-stack developer from scratch to finish.",
      github: "https://github.com/Lambda-School-Labs/hackathon-portal-fe",
      link: "https://www.hackathon-portal.tech/"
    },
    {
      name: "Product Queue",
      img: productqueue,
      desc: "A place for lambda labs instructors to store a list of product ideas that will be built during lambda labs. (an 8 week long build off for students) Built from scratch in less than a week using React.js, Node.js, Express.js, PostgreSQL and a custom API built from scratch. Implemented status toggles, role based views, authentication, UI and overall functionality.",
      github: 'https://github.com/build-415-productqueue',
      link: 'https://pqlanding.netlify.app/'
    },
    {
      name: "Crypto Maps",
      img: cryptomap,
      desc: "Cryptocurrency data in the form of visual infographic blocks that represent consensus mechanisms. The size of the block will depend on 4 metrics: market cap, liquid market cap, reported volume and real volume. Built from scratch in less than a week using React.js, Node.js, Express.js, PostgreSQL and Messari's Crypto API. Implemented a TreeMap of the data using Potion.js, and overall functionality.",
      github: 'https://github.com/BwFT-CryptoMap/cryptomaps',
      link: 'https://cryptomap.netlify.app/'
    }
  ]

  return (
    <div className="projects-holder" id="projects">
      <h3 className="projects-title"> - - - - - Projects - - - - -</h3>
      <div className="projects">
        {projects.map(project => (
          <div className="project">
            <img
              src={project.img}
              alt="project"
            />
            <h2>{project.name}</h2>
            <Accordion>
              <Accordion.Toggle as={Button} variant="link" className="projecttoggle" eventKey="0">
                Click me for info!
      </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className='cardBody'>{project.desc}</Card.Body>
              </Accordion.Collapse>
            </Accordion>

            <a className="links" href={project.github}>
              <i class="fab fa-github ii" />
            </a>
            <a className="links" href={project.link}>
              <i class="fas fa-globe ii" />
            </a>
          </div>
        ))}
      </div>

    </div>

  );
};

export default Projects;

