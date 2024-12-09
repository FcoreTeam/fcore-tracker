import { useSelector } from "react-redux";
import clsx from "clsx";
import Image from "next/image";

import FourthStage from "@/components/auth/stages/fourth-stage/Fourth-stage";

import styles from "./payment-info.module.scss";

const PaymentInfo = () => {
  const { bankType, cardInitials } = useSelector(
    (state) => state.auth.fourthStage
  );

  return (
    <div className={styles.payment__stage}>
      <p className={styles.stage__title}>3. Настройки платежной информации</p>
      <div className={styles.payment__wrap}>
        <section className={styles.settings}>
          <FourthStage paymentType="profile" />
        </section>
        <section className={styles.payment__info}>
          <Image
            src={
              bankType === "Альфа-Банк"
                ? "/icons/alfabank.png"
                : bankType === "Сбер"
                ? "/icons/sber.png"
                : bankType === "ВТБ"
                ? "/icons/vtb.png"
                : bankType === "Т-Банк"
                ? "/icons/tbank.png"
                : bankType === "Совкомбанк"
                ? "/icons/sovkom.png"
                : bankType === "Райффайзен Банк"
                ? "/icons/raif.png"
                : bankType === "Газпромбанк"
                ? "/icons/gazprombank.png"
                : null
            }
            alt="bank"
            width={70}
            height={70}
            className={clsx(
              styles.payment__img,
              bankType == "alfabank" ? styles.payment__img__second : ""
            )}
          />
          <div className={styles.payment__user}>
            <p className={styles.payment__deliv}>
              Платежи принимает{" "}
              {bankType === "Сбер"
                ? 'ПАО "СберБанк"'
                : bankType === "Альфа-Банк"
                ? 'АО "Альфа-банк"'
                : bankType === "ВТБ"
                ? 'ПАО "ВТБ"'
                : bankType === "Т-Банк"
                ? 'АО "Т-Банк"'
                : bankType === "Совкомбанк"
                ? 'ПАО "Совкомбанк"'
                : bankType === "Райффайзен Банк"
                ? 'АО "Райффайзен"'
                : bankType === "Газпромбанк"
                ? 'АО "Газпромбанк"'
                : null}
            </p>
            <p className={styles.payment__accept}>Получатель: {cardInitials}</p>
            <p className={styles.payment__accept}>Комиссия: 4%</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PaymentInfo;
