import { useSelector } from "react-redux";
import Image from "next/image";
import clsx from "clsx";

import styles from "./condition.module.scss";
import Needs from "./needs/Needs";

const Condition = ({
  codiitonName,
  conditionCurrent,
  conditionImage,
  conditionType,
}) => {
  const { reviews } = useSelector((state) => state.reviews);
  const {
    isSelfEmployment,
    ordersCancelled,
    ordersSucess,
    ordersLate,
    ordersCompleted,
    monthlyTurnover,
    isVerifed,
  } = useSelector((state) => state.stats);
  let currentRate = 0;
  for (let i = 0; i < reviews.length; i++) {
    currentRate += reviews[i].reviewRate / reviews.length;
  }

  return (
    <div
      className={clsx(
        styles.condition__column,
        conditionCurrent ? styles.current : ""
      )}
    >
      <p className={styles.condition__name}>{codiitonName}</p>
      <Image
        src={conditionImage}
        alt="cond"
        width={40}
        height={40}
        className={styles.condition__image}
      />
      <div className={styles.line}></div>
      <section className={styles.conditions}>
        {conditionType === "bronze" ? (
          <>
            <Needs
              needsTitle="87% заказов выполнено успешно"
              needsCompleted={
                Math.floor(100 - (ordersCancelled / ordersSucess) * 100) >= 87
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="85% заказов выполнено вовремя"
              needsCompleted={
                Math.floor(100 - (ordersLate / ordersCompleted) * 100) >= 85
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="Средняя оценка работы 4.3"
              needsCompleted={currentRate >= 4.3 ? true : false}
            />
          </>
        ) : conditionType === "silver" ? (
          <>
            <Needs
              needsTitle="90% заказов выполнено успешно"
              needsCompleted={
                Math.floor(100 - (ordersCancelled / ordersSucess) * 100) >= 90
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="90% заказов выполнено вовремя"
              needsCompleted={
                Math.floor(100 - (ordersLate / ordersCompleted) * 100) >= 90
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="Подтверждённый статус самозанятого"
              needsCompleted={isSelfEmployment ? isSelfEmployment : null}
            />
            <Needs
              needsTitle="Средняя оценка работы 4.5"
              needsCompleted={currentRate >= 4.5 ? true : false}
            />
          </>
        ) : conditionType === "gold" ? (
          <>
            <Needs
              needsTitle="92% заказов выполнено успешно"
              needsCompleted={
                Math.floor(100 - (ordersCancelled / ordersSucess) * 100) >= 92
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="93% заказов выполнено вовремя"
              needsCompleted={
                Math.floor(100 - (ordersLate / ordersCompleted) * 100) >= 93
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="Оборот в месяц от 50.000 ₽"
              needsCompleted={monthlyTurnover >= 5000 ? true : false}
            />
            <Needs
              needsTitle="Подтверждённый статус самозанятого"
              needsCompleted={isSelfEmployment ? isSelfEmployment : null}
            />
            <Needs
              needsTitle="Средняя оценка работы 4.6"
              needsCompleted={currentRate >= 4.6 ? true : false}
            />
          </>
        ) : conditionType === "platinum" ? (
          <>
            <Needs
              needsTitle="93% заказов выполнено успешно"
              needsCompleted={
                Math.floor(100 - (ordersCancelled / ordersSucess) * 100) >= 93
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="95% заказов выполнено вовремя"
              needsCompleted={
                Math.floor(100 - (ordersLate / ordersCompleted) * 100) >= 95
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="Оборот в месяц от 70.000 ₽"
              needsCompleted={monthlyTurnover >= 70000 ? true : false}
            />
            <Needs
              needsTitle="Подтверждённый статус самозанятого"
              needsCompleted={isSelfEmployment ? isSelfEmployment : false}
            />
            <Needs
              needsTitle="Средняя оценка работы 4.6"
              needsCompleted={currentRate >= 4.6 ? true : false}
            />
          </>
        ) : conditionType === "rubin" ? (
          <>
            <Needs
              needsTitle="97% заказов выполнено успешно"
              needsCompleted={
                Math.floor(100 - (ordersCancelled / ordersSucess) * 100) >= 97
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="96% заказов выполнено вовремя"
              needsCompleted={
                Math.floor(100 - (ordersLate / ordersCompleted) * 100) >= 96
                  ? true
                  : false
              }
            />
            <Needs
              needsTitle="Оборот в месяц от 90.000 ₽"
              needsCompleted={monthlyTurnover >= 90000 ? true : false}
            />
            <Needs
              needsTitle="Подтверждённая личность"
              needsCompleted={isVerifed ? isVerifed : false}
            />
            <Needs
              needsTitle="Средняя оценка работы 4.8"
              needsCompleted={currentRate >= 4.8 ? true : false}
            />
          </>
        ) : null}
      </section>
    </div>
  );
};
export default Condition;
