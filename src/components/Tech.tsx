import { skills } from "../constants";
import styles from "../style";
const Tech = () => (
  <section id="tech" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {skills.map((skill) => (
        <div
          key={skill.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-2 `}
        >
          <img
            src={skill.logo}
            alt="skill"
            className="sm:w-[40px] w-[40px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);
export default Tech;
