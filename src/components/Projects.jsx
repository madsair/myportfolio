import { faEye } from "@fortawesome/free-solid-svg-icons";
import Soteb from "/images/soteb.png";
import Title from "./Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const projData = [
  {
    image: Soteb,
    name: "E-commerce website",
    git: "https://github.com/madsair/sotebcomputer",
    demo: "https://sotebcomputer.netlify.app/",
  },
];
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Title headOne="Browse My" headTwo="Projects" />
      <div className="container hidden" data-animate="right">
        {" "}
        {projData.map((proj, id) => (
          <div className="project-details" key={id}>
            {" "}
            <img src={proj.image} alt="" />
            <h1>{proj.name}</h1>
            <div className="project-links">
              <a href={proj.git} target="blank">
                <FontAwesomeIcon icon={faGithub} className="icon" />
                Github
              </a>
              <a href={proj.demo} target="blank">
                <FontAwesomeIcon icon={faEye} className="icon" />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
