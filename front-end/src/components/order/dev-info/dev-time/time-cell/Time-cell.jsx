import styles from "./time-cell.module.scss";

const TimeCell = ({ timeNumber }) => {
  return (
    <div className={styles.cell}>
      <p className={styles.time}>{timeNumber}</p>
    </div>
  );
};
export default TimeCell;
