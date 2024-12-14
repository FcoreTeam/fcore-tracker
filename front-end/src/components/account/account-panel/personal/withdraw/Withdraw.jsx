

import styles from "./withdraw.module.scss";
import WithdrawInfo from "./withdraw-info/Withdraw-info";
import HistoryWithdraws from "./history-withdraws/History-withdraws";

const Withdraw = ({ setMenuNav }) => {

  return (
    <div className={styles.withdraw__wrap}>
      <WithdrawInfo setMenuNav={setMenuNav} />
      <p className={styles.withdraw__history__title}>История выводов 💎</p>
      <HistoryWithdraws />
    </div>
  );
};
export default Withdraw;
