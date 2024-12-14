import { useSelector } from "react-redux";
import clsx from "clsx";
import Image from "next/image";

import FourthStage from "@/components/auth/stages/fourth-stage/Fourth-stage";

import styles from "./payment-info.module.scss";
import BankInfo from "./bank-info/Bank-info";

const PaymentInfo = () => {
  const { bankType, cardInitials } = useSelector(
    (state) => state.auth.fourthStage
  );

  return (
    <div className={styles.payment__stage} id="paymentSettings">
      <p className={styles.stage__title}>3. Настройки платежной информации</p>
      <div className={styles.payment__wrap}>
        <section className={styles.settings}>
          <FourthStage paymentType="profile" />
        </section>
       <BankInfo />
      </div>
    </div>
  );
};
export default PaymentInfo;
