import clsx from "clsx";

import styles from "./history-block.module.scss";
import Button from "@/components/ui/button/Button";

const HistoryBlock = ({
  withdrawBalance,
  withdrawName,
  withdrawStatus,
  withdrawDate,
  withdrawCard,
}) => {
  return (
    <div className={styles.history__block}>
      <section className={styles.history__info}>
        <div className={styles.cancell__wrap}>
          <p className={styles.price__info}>{withdrawBalance} ₽</p>
          {withdrawStatus === "Выполняется ⏳" ? (
            <Button buttonText="Отменить" buttonClass="cancell__btn" />
          ) : (
            <></>
          )}
        </div>
        <p className={styles.withdraw__name}>{withdrawName}</p>
      </section>
      <section className={styles.status__info}>
        <p
          className={clsx(
            styles.withdraw__status,
            withdrawStatus === "Выполняется ⏳"
              ? styles.history__wait
              : withdrawStatus === "Отменен ❌"
              ? styles.history__cancell
              : ""
          )}
        >
          {withdrawStatus}
        </p>
        <p className={styles.withdraw__date}>{withdrawDate}</p>
        <p className={styles.withdraw__card}>На карту: {withdrawCard}</p>
      </section>
    </div>
  );
};
export default HistoryBlock;
