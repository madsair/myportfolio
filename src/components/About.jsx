import { faLaptop, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "./Title/Title";
const About = () => {
  return (
    <section className="about " id="about">
      <Title headOne="Get To Know More" headTwo="About Me" />
      <div className="container hidden" data-animate="right">
        <div className="about-image"></div>
        <div className="about-txt">
          <div className="about-txt_exp box">
            <FontAwesomeIcon icon={faLaptop} className="box-icon" />
            <h3>Experience</h3>
            <p> Junior 1 year </p>
            <p>Web Development</p>
          </div>
          <div className="about-txt_ed box">
            {" "}
            <FontAwesomeIcon icon={faUserGraduate} className="box-icon" />
            <h3>Education</h3>
            <p>AAS in Software Development</p>{" "}
          </div>
          <p>
            {" "}
            I'm a passionate developer with a focus on building clean,
            efficient, and user-friendly applications. I love learning new
            technologies and turning ideas into real-world solutions. Currently
            exploring the intersection of frontend and backend development.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
