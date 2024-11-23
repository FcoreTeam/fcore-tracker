"use client";

import { useSelector } from "react-redux";

import styles from "./general-info.module.scss";

const GeneralInfo = () => {

  const {orderName, orderDescription} = useSelector((state) => state.tracker.orderInfo)

  return (
    <div className={styles.general__info}>
      <p className={styles.order__name}>{orderName}</p>
      <p className={styles.order__description}>{orderDescription}</p>
    </div>
  );
};
export default GeneralInfo;
