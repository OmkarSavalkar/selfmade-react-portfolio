import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../Projects/ProjectData.js";
import styles from "./Projects.module.scss";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator.jsx";
import FloatingParticles from "../FloatingParticles/FloatingParticles.jsx";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className={styles.projects} id="projects" data-aos="zoom-in">
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
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.projectsGrid}>
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              className={styles.projectCard}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.imageContainer}>
                {project.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={project.title}
                    initial={{ opacity: i === 0 ? 1 : 0 }}
                    animate={{
                      opacity:
                        hoveredIndex === idx
                          ? i === (i + 1) % project.images.length
                            ? 1
                            : 0
                          : i === 0
                          ? 1
                          : 0,
                    }}
                    transition={{ duration: 0.8 }}
                    className={styles.projectImage}
                  />
                ))}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Project Link
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
