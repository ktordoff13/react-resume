import { experiences } from "../constants";
import styles, { layout } from "../style";
interface ExperienceCard {
  icon: string;
  title: string;
  contentList: string[];
  index: number;
}

const ExperienceCard = ({
  icon,
  title,
  contentList,
  index,
}: ExperienceCard) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== experiences.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimWhite`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <div className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-2">
        {contentList.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className={layout.section}>
      <div>
        <h2 className={styles.heading2}>
          {" "}
          <span className="text-gradient">Work</span> Experience
        </h2>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience.id} {...experience} index={index} />
        ))}
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      </div>
    </section>
  );
};

export default Experience;
