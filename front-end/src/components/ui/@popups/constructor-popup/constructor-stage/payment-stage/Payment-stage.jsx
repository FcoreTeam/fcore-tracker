import styles from "./payment-stage.module.scss";

const PaymentStage = ({ stageName, stagePrice, stagePercent }) => {
  return (
    <div className={styles.payment__stage}>
      <p className={styles.stage__name}>{stageName}</p>
      <div className={styles.stage__info}>
        <p className={styles.stage__price}>{stagePrice} ₽</p>
        <p className={styles.stage__percent}>{stagePercent} %</p>
      </div>
    </div>
  );
};
export default PaymentStage;
