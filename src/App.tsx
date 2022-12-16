import styles from "./style";
import {
  Navbar,
  Skills,
  CardDeal,
  Experience,
  Tech,
  CTA,
  Stats,
  Footer,
  Projects,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Experience />
        {/* <Skills /> */}
        {/* <CardDeal /> */}
        <Projects />
        <Tech />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
