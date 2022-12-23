import { skills } from "../constants";
import { Tooltip } from "@material-tailwind/react";

import styles from "../style";
const Tech = () => (
  <section id="tech" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {skills.map((skill) => (
        <Tooltip key={skill.id} content={skill.tooltip}>
          <div
            key={skill.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-2 `}
          >
            <img
              src={skill.logo}
              alt={skill.tooltip}
              className="sm:w-[40px] w-[40px] object-contain "
            />
          </div>
        </Tooltip>
      ))}
    </div>
  </section>
);
export default Tech;
