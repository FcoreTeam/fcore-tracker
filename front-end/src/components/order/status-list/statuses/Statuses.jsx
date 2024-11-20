import { useSelector } from "react-redux";
import Status from "./status/status";

import styles from "./statuses.module.scss";

export default function Statuses() {
  const { orderStatuses } = useSelector((state) => state.tracker.orderInfo);
  const statuses = orderStatuses.map((item, i) => {
    const statusName =
      item.statusName === "work"
        ? "В работе ✅"
        : item.statusName === "check"
        ? "На проверке 👨‍💻"
        : item.statusName === "updates"
        ? "Требуется информация ⚠️"
        : item.statusName === "completed"
        ? "Выполнен  👑"
        : item.statusName;

    return (
      <Status
        key={i}
        statusName={statusName}
        statusIco={item.statusIco}
        isCompleted={item.isCompleted}
      />
    );
  });

  return <div className={styles.statuses}>{statuses}</div>;
}
