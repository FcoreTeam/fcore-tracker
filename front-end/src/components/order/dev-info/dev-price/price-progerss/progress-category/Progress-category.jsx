import clsx from "clsx";

import styles from "./progress-category.module.scss";

const ProgressCategory = ({
  progressPrice,
  isCompleted,
  isWaiting,
  openPaymentData,
}) => {
  return (
    <div
      className={clsx(
        styles.payment__category,
        isCompleted ? styles.payment__complete : "",
        isWaiting ? styles.payment__need : ""
      )}
      onClick={isCompleted || !isWaiting ? null : openPaymentData}
    >
      <p className={styles.payment__rubles}>{progressPrice} ₽</p>
    </div>
  );
};
export default ProgressCategory;