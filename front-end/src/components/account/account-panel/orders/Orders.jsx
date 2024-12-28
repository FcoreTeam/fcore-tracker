"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import Order from "./order/Order";
import OrderFilter from "./order-filter/Order-filter";

import styles from "./orders.module.scss";

const Orders = () => {
  const [filterName, setFilterName] = useState("В работе");
  const { orders } = useSelector((state) => state.orders);
  const renderOrders = orders.map((item) => (
    <Order
      key={item.orderID}
      orderName={item.orderName}
      orderPrice={item.orderPrice}
      orderStart={item.orderDateStart}
      orderFinish={item.orderDateFinish}
      orderTrackCode={item.orderTrackCode}
      orderID={item.orderID}
    />
  ));

  return (
    <div className={styles.orders}>
      <OrderFilter setFilterName={setFilterName} filterValue={filterName} />
      {renderOrders}
    </div>
  );
};
export default Orders;
