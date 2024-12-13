import { useSelector } from "react-redux";

import styles from "./withdraw.module.scss";
import BankInfo from "../../settings/settings-stage/payment-info/bank-info/Bank-info";
import Button from "@/components/ui/button/Button";

const Withdraw = () => {
  const { balance } = useSelector((state) => state.withdraw);

  return (
    <div className={styles.withdraw}>
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
        <Button buttonClass="withdraw__btn" buttonText="Настройки вывода" />
      </section>
    </div>
  );
};
export default Withdraw;
