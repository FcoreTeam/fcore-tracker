import DevTime from "@/components/order/dev-info/dev-time/Dev-time";

import styles from "./controll-dev.module.scss";
import DevStatus from "./dev-status/Dev-status";

const ControllDev = ({ isOrderActivated, orderPrice, orderSteps }) => {
  return (
    <div className={styles.controll__dev}>
      <section className={styles.controll__time}>
        <DevTime isOrderActivated={isOrderActivated} />
      </section>
      <section className={styles.controll__statuses}>
        <div className={styles.dev__info}>
          <DevStatus status={!isOrderActivated ? "Не активирован " : ""} />
          <p className={styles.order__price__stage}>
            {orderSteps.length !== 0 ? "Оплата по этапам" : "Постоплата"}
          </p>
          <p className={styles.order__price}>{orderPrice} ₽</p>
        </div>
      </section>
    </div>
  );
};
export default ControllDev;
