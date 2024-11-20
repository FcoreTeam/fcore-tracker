"use client"

import StudioOrder from "./studio-order/Studio-order";
import Statuses from "./statuses/Statuses";

import styles from "./status.module.scss";

const Status = () => {
 return (
    <div className={styles.status__list}>
      <div className={styles.studio__order}>
         <StudioOrder />
         <p className={styles.order__status}>Статус заказа</p>
         <Statuses />
      </div>
    </div>
 )
}
export default Status;