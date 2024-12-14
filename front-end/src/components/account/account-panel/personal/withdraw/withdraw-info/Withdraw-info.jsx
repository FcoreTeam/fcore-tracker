import { useSelector } from "react-redux";

import BankInfo from "../../../settings/settings-stage/payment-info/bank-info/Bank-info";
import Button from "@/components/ui/button/Button";
import Link from "next/link";

import styles from "./withdraw-info.module.scss";

const WithdrawInfo = ({ setMenuNav }) => {
  const { balance } = useSelector((state) => state.withdraw);
  return (

      <section className={styles.withdraw__info}>
        <div className={styles.other__data}>
          <div className={styles.withdraw__text__info}>
            <p className={styles.withdraw__title}>Доступно для вывода 💰</p>
            <p className={styles.withdraw__information}>
              Вывод происходит в нечётные дни месяца
            </p>
            <p className={styles.withdraw__balance}>{balance} ₽</p>
          </div>
          <BankInfo additionalClass="withdraws" />
        </div>

        <section className={styles.withdraw__btns}>
          <Button buttonClass="withdraw__btn" buttonText="Вывести" />
          <Link
            href="/account#paymentSettings"
            className={styles.withdraw__btn}
            onClick={() => setMenuNav("settings")}
          >
            Настройки вывода
          </Link>
        </section>
      </section>

  );
};
export default WithdrawInfo;
