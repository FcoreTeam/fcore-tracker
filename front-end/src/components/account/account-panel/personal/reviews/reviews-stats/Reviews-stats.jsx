import { useSelector } from "react-redux";

import Stats from "./stats/Stats";

import styles from "./reviews-stats.module.scss";

const ReviewsStats = () => {
  const {
    ordersCompleted,
    ordersCompletedSucessful,
    ordersCompletedWithRate,
    ordersCompletedInTime,
  } = useSelector((state) => state.stats);

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
        stat={ordersCompleted}
      />
      <Stats
        statsName="Заказов с отзывами"
        statsImage="/icons/orderreview.svg"
        stat={ordersCompletedWithRate}
      />
      <Stats
        statsName="Заказов сдано вовремя"
        isPercent={true}
        statsImage="/icons/ordertime.svg"
        statPercent={ordersCompletedInTime}
      />
      <Stats
        statsName="Заказов сдано успешно"
        isPercent={true}
        statsImage="/icons/ordergood.svg"
        statPercent={ordersCompletedSucessful}
      />
      <Stats isRank={true} statsImage="/icons/withoutrank.svg" />
    </div>
  );
};
export default ReviewsStats;
