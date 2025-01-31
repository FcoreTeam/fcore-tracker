"use client";

import ControllInfo from "./controll-info/Controll-info";
import ControllDev from "./controll-dev/Controll-dev";
import ControllChat from "./controll-chat/Controll-chat";
import ControllReport from "./controll-report/Controll-report";

import { useSelector } from "react-redux";
import { useState } from "react";

import styles from "./controll.module.scss";

const Controll = ({ orderID }) => {
  const { orders } = useSelector((state) => state.orders);
  const order = orders.find((item) => item.orderID === +orderID);

  const [orderData, setOrderData] = useState({
    orderName: order.orderName,
    orderDescription: order.orderDescription,
    orderPrice: order.orderPrice,
    isOrderActivated: order.isOrderActivated,
    orderTrackCode: order.orderTrackCode,
    orderSteps: order.orderSteps,
  });

  return (
    <div className={styles.controll__panel}>
      <section className={styles.controll__info}>
        <ControllInfo
          orderName={orderData.orderName}
          orderDescription={orderData.orderDescription}
          orderSteps={orderData.orderSteps}
        />
      </section>
      <div className={styles.controlls__wrap}>
        <section className={styles.controll__dev__info}>
          <ControllDev
            isOrderActivated={orderData.isOrderActivated}
            orderPrice={orderData.orderPrice}
            orderSteps={orderData.orderSteps}
          />
        </section>
        <section className={styles.controll__reports}>
          {!orderData.isOrderActivated ? (
            <div className={styles.controll__activated}>
              <ControllChat orderID={orderID} />
              <ControllReport />
            </div>
          ) : (
            <div className={styles.order__noactive}>
              <p className={styles.noactive__title}>
                Заказ пока не активирован
              </p>
              <p className={styles.noactive__description}>
                Чтобы приступить к работе, сообщите заказчику код ниже
              </p>
              <p className={styles.noactive__trackcode}>
                {orderData.orderTrackCode}
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
export default Controll;
