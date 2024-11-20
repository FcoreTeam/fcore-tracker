import { useSelector } from "react-redux";
import Image from "next/image";
import clsx from "clsx";

import styles from "./status.module.scss";

export default function Status({ statusName, statusIco, isCompleted }) {
  const { orderStatus, orderStatuses } = useSelector(
    (state) => state.tracker.orderInfo
  );
 
  return (
    <div className={clsx(styles.status, isCompleted ? styles.completed : "")}>
      <Image
        src={statusIco}
        width={30}
        height={30}
        alt="img"
        className={styles.status__ico}
      />
      <p className={styles.status__name}>{statusName}</p>
    </div>
  );
}
