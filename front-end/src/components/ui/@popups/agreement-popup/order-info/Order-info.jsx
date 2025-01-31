import styles from "./order-info.module.scss";

const OrderInfo = ({ orderName, orderPrice, orderStages, orderDeadline }) => {
  return (
    <div className={styles.order__info}>
      <section>
        <p className={styles.info__title}>Название заказа</p>
        <p className={styles.order__name}>{orderName}</p>
      </section>
      <section>
        <p className={styles.info__title}>Цена заказа</p>
        <p className={styles.order__price}>{orderPrice.toLocaleString('ru-RU')} ₽</p>
      </section>
      <section>
        <p className={styles.info__title}>Этапы заказа</p>
        <p className={styles.order__name}>{orderStages}</p>
      </section>
      <section>
        <p className={styles.info__title}>Срок сдачи</p>
        <p className={styles.order__name}>{orderDeadline}</p>
      </section>
    </div>
  );
};
export default OrderInfo;
