import React from "react";
import { motion } from "framer-motion";
import styles from "./Section.module.scss";

export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      <motion.h3
        className={styles.title}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55 }}
      >
        {title}
      </motion.h3>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
