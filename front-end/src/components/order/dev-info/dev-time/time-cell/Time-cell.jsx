import clsx from "clsx";

import styles from "./time-cell.module.scss";

const TimeCell = ({ timeNumber, deadline }) => {
  console.log(deadline);
  return (
    <div className={styles.cell}>
      <p
        className={clsx(
          styles.time,
          deadline < 5
            ? styles.more__faster
            : deadline < 10
            ? styles.faster
            : deadline < 30
            ? styles.less__faster
            : null
        )}
      >
        {timeNumber}
      </p>
    </div>
  );
};
export default TimeCell;
