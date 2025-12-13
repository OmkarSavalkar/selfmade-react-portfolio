import { motion } from "framer-motion";
import styles from "./About.module.scss";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import FloatingParticles from "../FloatingParticles/FloatingParticles";

export default function About() {
  const companies = [
    {
      name: "Cavista Technology (Axxess)",
      role: "Frontend Engineer",
      duration: "2022 — Present",
      logo: "https://www.cavistatech.com/wp-content/uploads/2023/06/cavista-logo-2305.svg",
      whiteBg: true, // <-- White box background
    },
    {
      name: "Xoriant",
      role: "Software Engineer",
      duration: "2021 — 2022",
      logo: "https://www.xoriant.com/cdn/ff/h8j4-N1kFokMkyOEiHIQVjpbRE5vP8EOCe4cCjK-sP4/1618405020/public/Xoriant-Logo.png",
      whiteBg: false,
    },
  ];

  return (
    <section className={styles.about} id="about" data-aos="fade-up">
      {/* Floating neon blobs */}
      <motion.div
        className={styles.shape1}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />
      <motion.div
        className={styles.shape2}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      <FloatingParticles />

      <div className={styles.wrapper}>
        {/* LEFT — ABOUT TEXT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className={styles.heading}>About Me</h2>

          <p className={styles.text}>
            I’m a Frontend Engineer with <b>4.5 years</b> of experience building
            high-performance, scalable, and user-centric web applications using{" "}
            <b>React, Vue, and Next.js</b>. I hold a Bachelor’s degree (B.E) in
            Computer Engineering (2021)
            <br />
            <br />I currently work at <b>Cavista (Axxess)</b>, contributing to
            enterprise healthcare platforms used by{" "}
            <b>9000+ care organizations</b> across the <b>USA & UAE</b>.
            <br />
            <br />
            My expertise includes <b>UI architecture</b>,{" "}
            <b>performance optimization</b>, reusable design systems, and
            delivering end-to-end product features with high quality.
            <br />
            <br />
            Previously at <b>Xoriant</b>, I built production-grade interfaces
            for U.S. clients and earned the <b>Xoriant Spot Award</b>.
            <br />
            <br />
            Let’s connect on{" "}
            <a
              href="https://www.linkedin.com/in/omkar-savalkar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            💻🚀
          </p>
        </motion.div>

        {/* RIGHT — EXPERIENCE SECTION */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h3 className={styles.expTitle}>Professional Journey</h3>

          <div className={styles.timeline}>
            {companies.map((c, index) => (
              <motion.div
                key={index}
                className={styles.expCard}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div
                  className={
                    c.whiteBg ? styles.logoWrapperWhite : styles.logoWrapperDark
                  }
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className={styles.companyLogo}
                  />
                </div>

                <div className={styles.expContent}>
                  <h4>{c.name}</h4>
                  <p>{c.role}</p>
                  <span>{c.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
