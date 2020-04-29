import React from "react";
import "./styles.css";
import Carousel from "./Carousel";

const Top = () => {
  return (
    <div className="header" id="about">
      <div className="top-flex" >
        <h1 className="title"> - Austin Powell - </h1>
        <p className="bio">
          <p>
            I am a self-motivated Full-Stack Developer with experience working in the e-learning industry. Passionate and hardworking with a penchant for meeting deadlines.
          </p>
          <br />
          <p>
            I started my journey as a self-taught java developer, Then continued to follow my heart through the developer community picking up several other languages and frameworks along the way. I started online classes during the time and expanded my knowledge ten-fold!
          </p>
          <p>
            I am always up for a challenge, and I am eager to learn so much more! I am currently searching for my next steps into the real world to continue this amazing adventure.
          </p>
        </p>
      </div>
      <div className="header-c">
        <Carousel />
      </div>
    </div>
  );
};

export default Top;