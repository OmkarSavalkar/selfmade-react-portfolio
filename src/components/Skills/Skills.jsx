import React from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss";

export default function Skills() {
  const skills = [
    {
      name: "React",
      level: "Proficient",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Vue",
      level: "Proficient",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    {
      name: "Next.js",
      level: "Intermediate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      name: "JavaScript",
      level: "Proficient",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "Redux",
      level: "Beginner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    },
    {
      name: "Bootstrap",
      level: "Proficient",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
      name: "Material UI",
      level: "Intermediate",
      logo: "https://mui.com/static/logo.png",
    },
    {
      name: "Git",
      level: "Proficient",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Agile / Scrum",
      level: "Proficient",
      logo: "data:image/svg+xml;utf8,\
<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>\
<circle cx='32' cy='32' r='28' stroke='%23FBC02D' stroke-width='4' fill='none'/>\
<path d='M32 4 a28 28 0 0 1 28 28 H50' stroke='%23FBC02D' stroke-width='4' fill='none' stroke-linecap='round'/>\
<path d='M60 32 L56 28 L56 36 Z' fill='%23FBC02D'/>\
<path d='M32 60 a28 28 0 0 1 -28 -28 H14' stroke='%23FBC02D' stroke-width='4' fill='none' stroke-linecap='round'/>\
<path d='M4 32 L8 28 L8 36 Z' fill='%23FBC02D'/>\
</svg>",
    },
    {
      name: "API Integration",
      level: "Proficient",
      logo: "https://cdn-icons-png.flaticon.com/512/1048/1048943.png",
    },
    {
      name: "Debugging",
      level: "Proficient",
      logo: "https://cdn-icons-png.flaticon.com/512/751/751381.png",
    },
  ];

  return (
    <section className={styles.skills} id="skills" data-aos="fade-right">
      {/* background blobs */}
      <motion.div
        className={styles.shape1}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className={styles.shape2}
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className={styles.particle}></div>
      ))}

      <h2 className={styles.heading}>Technical Skills</h2>

      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className={styles.card}
            whileHover={{ scale: 1.06 }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={skill.logo} alt={skill.name} className={styles.icon} />
            <h4>{skill.name}</h4>
            <span className={styles.level}>{skill.level}</span>
          </motion.div>
        ))}
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
