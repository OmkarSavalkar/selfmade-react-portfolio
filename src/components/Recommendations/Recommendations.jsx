import { useState, useEffect } from "react";
import styles from "./Recommendations.module.scss";
import rec1 from "../../assets/rec1.png";
import rec2 from "../../assets/rec2.png";
import rec3 from "../../assets/rec3.png";
import FloatingParticles from "../FloatingParticles/FloatingParticles";

export default function Recommendation() {
  const recommendations = [rec1, rec2, rec3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % recommendations.length);
    }, 5400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={styles.recommendation}
      id="recommendations"
      data-aos="fade-left"
    >
      <div className={styles.shape1}></div>
      <div className={styles.shape2}></div>

      <FloatingParticles />

      <h2 className={styles.title}>Recommendations</h2>

      <div className={styles.sliderContainer}>
        {recommendations.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Recommendation"
            className={`${styles.recImage} ${index === i ? styles.active : ""}`}
          />
        ))}
      </div>

      <div className={styles.socials}>
        <a
          className={styles.socialBtn}
          href="https://www.linkedin.com/in/omkar-savalkar"
          target="_blank"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
          Connect on LinkedIn
        </a>

        <a
          className={styles.socialBtn}
          href="https://github.com/OmkarSavalkar"
          target="_blank"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" />
          Follow on GitHub
        </a>

        <a
          className={styles.socialBtn}
          href="https://drive.google.com/file/d/1FVCo56EspaZRZ440l_KcXS0ySwHnG20R/view?usp=sharing"
          target="_blank"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135692.png" />
          Resume
        </a>
      </div>
    </section>
  );
}
