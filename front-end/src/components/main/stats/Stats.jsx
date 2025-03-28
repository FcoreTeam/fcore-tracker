import clsx from "clsx";

import styles from "./stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <p className={styles.stat__title}>Разработчиков в студии</p>
        <p className={styles.stat__value}>20</p>
      </div>
      <div className={styles.stat}>
        <p className={clsx(styles.stat__title, styles.stat__second)}>
          Привлекаем инвестиции (₽)
        </p>
        <p className={clsx(styles.stat__value, styles.value__second)}>
          {"> 11 млн"}
        </p>
      </div>
      <div className={styles.stat}>
        <p className={clsx(styles.stat__title, styles.stat__second)}>
          Поддержка
        </p>
        <p className={styles.stat__value}>24 / 7</p>
      </div>
      <div className={styles.stat}>
        <p className={styles.stat__title}>Готовность проекта</p>
        <p className={styles.stat__value}>60%</p>
      </div>
    </div>
  );
};
export default Stats;
