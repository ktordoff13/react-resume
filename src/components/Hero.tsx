import styles from "../style";
import { headshot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col sm:py-10 py-2`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Full Stack <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Web Developer</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Hi, I'm Jakub Tordoff. Experienced software developer well versed in
          many platforms and tools delivering quality software driven by
          business requirements. I am comfortable discussing requirements and
          then heads-down coding during the sprint to deliver them. A lively
          debater and a passionate collaborator, I understand that the team
          succeeds together. I enjoy tackling hard problems and designing
          solutions with the big picture in mind. I love experimenting with new
          frameworks, learning new patterns and automating the tedious tasks. I
          have a talent for leading technical projects and driving initiatives.
          My curiosity fuels my hunger for continually learning and improving my
          skill set.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={headshot}
          alt="headshot"
          className="object-scale-down rounded-full w-[40%] h-[40%] md:w-[70%] md:h-[70%] ss:w-[50%] ss:h-[50%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
