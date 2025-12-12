import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import styles from "./Hero.module.scss";
import myImg from "../../assets/myImg.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Small top-left label */}
      <div className={styles.topLabel}>Self-coded React Portfolio</div>

      {/* NEON FLOATING BLOBS */}
      <motion.div
        className={styles.shape1}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <motion.div
        className={styles.shape2}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      ></motion.div>

      {/* ✨ RANDOM FLOATING NEON PARTICLES (10 pcs) */}
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>

      {/* MAIN WRAPPER */}
      <div className={styles.wrapper}>
        {/* LEFT TEXT SECTION */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>
            <span>Frontend Developer</span>
            <br />
            Omkar Savalkar
          </h1>

          <h2 className={styles.typing}>
            <Typewriter
              options={{
                strings: [
                  "React, Next.js & Vue Engineer",
                  "Mentor & Team Lead",
                  "Transforming Ideas Into Digital Experiences",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className={styles.desc}>
            Building high-performance, scalable, and user-centric applications
            used across USA & UAE with clean architecture, optimized UI, and
            complete feature ownership.
          </p>
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
              href="https://drive.google.com/file/d/1FVCo56EspaZRZ440l_KcXS0ySwHnG20R/view?usp=sharing"
              target="_blank"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135692.png" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 1 }}
          animate={{
            x: [0, 12, 0, -12, 0],
            y: [0, -18, 0, 18, 0],
          }}
          transition={{
            x: {
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
            y: {
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        >
          <div className={styles.orbitContainer}>
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              className={styles.orbitIcon}
              alt="React"
            />
            <img
              src="https://play.vuejs.org/logo.svg"
              className={styles.orbitIcon}
              alt="Vue"
            />
            <img
              src="https://img.icons8.com/?size=96&id=MWiBjkuHeMVq&format=png"
              className={styles.orbitIcon}
              alt="Next.js"
            />
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              className={styles.orbitIcon}
              alt="JavaScript"
            />
          </div>
          <div className={styles.imageWrapper}>
            <img src={myImg} alt="Omkar Savalkar" className={styles.img} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓
      </motion.div>
    </section>
  );
}
