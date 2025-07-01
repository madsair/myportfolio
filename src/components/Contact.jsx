import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "./Title/Title";

const Contact = () => {
  return (
    <section className="contact hidden" id="contact" data-animate="up">
      {" "}
      <div className="container">
        {" "}
        <Title headOne="Get in Touch" headTwo="Contact Me" />
        <div className="contact-info">
          <a href="mailto:mahdinoussair97@gmail.com">
            <FontAwesomeIcon icon={faMessage} className="icon" />
            Mahdinoussair97@gmail.com
          </a>
          <a href="http://">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
