import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hidden" data-animate="left">
        <div className="hero-image"></div>
        <div className="hero-txt">
          <h3>Hello, I'm</h3>
          <h1>El Mahdi Noussair</h1>
          <h2>Web Developper</h2>{" "}
          <div className="hero-txt__buttons">
            <a href="../../public/El_Mahdi_Noussair_Lebenslauf.pdf">
              Download CV
            </a>
            <a href="#contact">Contact Info</a>
          </div>
          <div className="hero-icons">
            <a href="https://www.linkedin.com/in/el-mahdi-noussair-91a0262b7/">
              {" "}
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="social-icons link"
              />
            </a>
            <a href="https://github.com/madsair">
              <FontAwesomeIcon icon={faGithub} className="social-icons" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
