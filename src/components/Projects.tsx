import styles from "../style";
import { projects } from "../constants";
import Project from "./Project";

const Projects = () => (
  <section
    id="projects"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-5 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Personal <span className="text-gradient">Projects</span>{" "}
      </h1>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {projects.map((card) => (
        <Project key={card.id} {...card} />
      ))}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>
  </section>
);

export default Projects;
