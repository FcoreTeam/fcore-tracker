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
  const { isSelfEmployment } = useSelector((state) => state.stats);
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
            <Needs needsTitle="87% заказов выполнено успешно" />
            <Needs needsTitle="85% заказов выполнено вовремя" />
            <Needs
              needsTitle="Средняя оценка работы 4.3"
              needsCompleted={currentRate >= 4.3 ? true : false}
            />
          </>
        ) : conditionType === "silver" ? (
          <>
            <Needs needsTitle="90% заказов выполнено успешно" />
            <Needs needsTitle="90% заказов выполнено вовремя" />
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
            <Needs needsTitle="92% заказов выполнено успешно" />
            <Needs needsTitle="93% заказов выполнено вовремя" />
            <Needs needsTitle="Оборот в месяц от 50.000 ₽" />
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
            <Needs needsTitle="93% заказов выполнено успешно" />
            <Needs needsTitle="95% заказов выполнено вовремя" />
            <Needs needsTitle="Оборот в месяц от 70.000 ₽" />
            <Needs
              needsTitle="Подтверждённый статус самозанятого"
              needsCompleted={isSelfEmployment ? isSelfEmployment : null}
            />
            <Needs
              needsTitle="Средняя оценка работы 4.6"
              needsCompleted={currentRate >= 4.6 ? true : false}
            />
          </>
        ) : conditionType === "rubin" ? (
          <>
            <Needs needsTitle="97% заказов выполнено успешно" />
            <Needs needsTitle="96% заказов выполнено вовремя" />
            <Needs needsTitle="Оборот в месяц от 90.000 ₽" />
            <Needs needsTitle="Подтверждённая личность" />
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
