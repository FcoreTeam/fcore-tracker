import { useSelector } from "react-redux";
import clsx from "clsx";
import Image from "next/image";

import FourthStage from "@/components/auth/stages/fourth-stage/Fourth-stage";

import styles from "./payment-info.module.scss";

const PaymentInfo = () => {
  const { bankType, cardInitials } = useSelector((state) => state.auth.fourthStage);

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
              bankType === "alfabank"
                ? "/icons/alfabank.png"
                : bankType === "sber"
                  ? "/icons/sber.png"
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
              {bankType === "sber"
                ? 'ПАО "СберБанк"'
                : bankType === "alfabank"
                  ? 'АО "Альфа-банк"'
                  : null}
            </p>
            <p className={styles.payment__accept}>
              Получатель: {cardInitials}
            </p>
            <p className={styles.payment__accept}>Комиссия: 4%</p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default PaymentInfo;
