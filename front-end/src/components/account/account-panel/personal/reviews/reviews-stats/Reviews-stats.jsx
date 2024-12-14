import Stats from "./stats/Stats";

import styles from "./reviews-stats.module.scss";

const ReviewsStats = () => {
  return (
    <div className={styles.review__stats}>
      <Stats
        statsName="Оценка работы"
        statsImage="/icons/star.svg"
        isRating={true}
      />
      <Stats
        statsName="Заказов выполненно"
        statsImage="/icons/ordercompleted.svg"
        stat={11}
      />
      <Stats
        statsName="Заказов с отзывами"
        statsImage="/icons/orderreview.svg"
        stat={8}
      />
      <Stats
        statsName="Заказов сдано вовремя"
        isPercent={true}
        statsImage="/icons/ordertime.svg"
        statPercent={90}
      />
      <Stats
        statsName="Заказов сдано успешно"
        isPercent={true}
        statsImage="/icons/ordergood.svg"
        statPercent={100}
      />
      <Stats isRank={true} statsImage="/icons/rubin.png" />
    </div>
  );
};
export default ReviewsStats;
