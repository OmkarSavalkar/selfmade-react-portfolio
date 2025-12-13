import { motion } from "framer-motion";
import styles from "./ScrollIndicator.module.scss";

const ScrollIndicator = () => {
  return (
    <motion.div
      className={styles.scrollDown}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      ↓
    </motion.div>
  );
};
export default ScrollIndicator;
