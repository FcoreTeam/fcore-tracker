import Stats from "./stats/Stats";

import styles from "./reviews-stats.module.scss";

const ReviewsStats = () => {
  return (
    <div className={styles.review__stats}>
      <Stats statsName="Заказов выполненно" />
      <Stats statsName="Заказов с отзывами" />
      <Stats statsName="Заказов сдано вовремя" isPercent={true} />
      <Stats statsName="Заказов сдано успешно" isPercent={true} />
      <Stats  isRank={true} />
    </div>
  );
};
export default ReviewsStats;
