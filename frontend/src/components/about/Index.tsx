import styles from "../../styles/scss/AboutSection1.module.scss";
import Section1 from "./Section1";
import Section2 from "./Section2";

const AboutC = () => {
  return (
    <>
      <div className={`${styles.mainAbout}`}>
        <Section1 />
        <Section2 />
      </div>
    </>
  );
};

export default AboutC;
