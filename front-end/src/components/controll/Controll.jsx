"use client";

import { useSelector } from "react-redux";

import ControllBase from "./controll-report/Controll-base";

import styles from "./controll.module.scss";

const Controll = ({ orderID }) => {
  const { orders } = useSelector((state) => state.orders);
  return (
    <div className={styles.controll__panel}>
      <ControllBase
        orderID={orderID}
        orderName={orders[orderID - 1].orderName}
      />
    </div>
  );
};
export default Controll;
