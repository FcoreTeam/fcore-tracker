import { useSelector } from "react-redux";
import HistoryBlock from "./history-block/History-block";

import styles from "./history-withdraws.module.scss";

const HistoryWithdraws = () => {
  const { withdrawHistory } = useSelector((state) => state.withdraw);
  const allHistory = withdrawHistory.map((item) => (
    <HistoryBlock key={item.id} {...item} />
  ));
  return (
    <section className={styles.history__withdraws}>
      {withdrawHistory.length !== 0 ? allHistory : ""}
    </section>
  );
};
export default HistoryWithdraws;
