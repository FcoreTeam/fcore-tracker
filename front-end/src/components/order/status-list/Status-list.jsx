"use client"

import { useSelector } from "react-redux";

import StudioOrder from "./studio-order/Studio-order";
import Statuses from "./statuses/Statuses";

import styles from "./status.module.scss";

const Status = () => {

   const {trackNumber} = useSelector((state) => state.tracker)

 return (
    <div className={styles.status__list}>
      <div className={styles.studio__order}>
         <StudioOrder />
         <p className={styles.order__status}>Статус заказа</p>
         <Statuses />
      </div>
      <div className={styles.technical__info}>
         <p className={styles.trackcode}>Track-code: {trackNumber}</p>
         <p className={styles.web__version}>Ver: 0a2 Dev</p>
      </div>
    </div>
 )
}
export default Status;