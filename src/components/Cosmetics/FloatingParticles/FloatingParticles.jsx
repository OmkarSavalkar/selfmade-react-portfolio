import styles from "./FloatingParticles.module.scss";
const FloatingParticles = () => {
  return (
    <>
      {Array.from({ length: 14 }).map((_, i) => (
        <div key={i} className={styles.particle} />
      ))}
    </>
  );
};
export default FloatingParticles;
