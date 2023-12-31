import styles from "../style";
import { MailToButton } from "./Button";
import { DownloadResumeButton } from "./Button";

const CTA = () => (
  <section
    id="contact"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        Ask me about any of the technologies above
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Interested in my experience and skillset? Please feel free to contact
        me. <span className="text-gradient">kubator21@protonmail.com</span>
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <MailToButton email="kubator21@protonmail.com" />
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <DownloadResumeButton />
    </div>
  </section>
);
export default CTA;
