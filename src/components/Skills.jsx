import Title from "./Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
const frontEndSkills = [
  { name: "HTML5", level: "Experienced" },
  { name: "CSS3", level: "Experienced" },
  { name: "ILLUSTRATOR", level: "Basics" },
  { name: "JAVASCRIPT", level: "Experienced" },
  { name: "SASS", level: "Experienced" },
  { name: "TYPESCRIPT", level: "Basics" },
  { name: "REACT", level: "Intermediate" },
  { name: "JAVA", level: "Intermediate" },
];
const backEndSkills = [
  { name: "PostgreSQL", level: "Basics" },
  { name: "SPRINGBOOT", level: "Basics" },
  { name: "Git", level: "Basics" },
  { name: "SQL", level: "Intermediate" },
];
const Skills = () => {
  return (
    <section className="skills " id="skills">
      <Title headOne="Explore My" headTwo="Skills" />
      <div className="container hidden" data-animate="left">
        <div className="front-end">
          <h1>Front-end Development</h1>
          <div className="skills-wrapper">
            {frontEndSkills.map((skill, id) => (
              <div className="skills-set" key={id}>
                <FontAwesomeIcon icon={faCode} className="icon" />
                <div className="skill-name">
                  <h3>{skill.name}</h3>
                  <h4>{skill.level}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="back-end">
          {" "}
          <h1>Back-end Development</h1>
          <div className="skills-wrapper">
            {backEndSkills.map((skill, id) => (
              <div className="skills-set" key={id}>
                <FontAwesomeIcon icon={faCode} className="icon" />
                <div className="skill-name">
                  <h3>{skill.name}</h3>
                  <h4>{skill.level}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
