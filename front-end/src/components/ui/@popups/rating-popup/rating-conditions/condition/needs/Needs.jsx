import styles from "./needs.module.scss";

const Needs = ({ needsTitle, needsCompleted }) => {
  return (
    <div className={styles.needs}>
      <span className={styles.completed}>{needsCompleted ? "✅" : "❌"}</span>
      <p className={styles.needs__title}>{needsTitle}</p>
    </div>
  );
};
export default Needs;
