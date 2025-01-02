"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setPopupData } from "@/store/slices/popupsSlice";
import Order from "./order/Order";
import OrderFilter from "./order-filter/Order-filter";

import styles from "./orders.module.scss";
import Button from "@/components/ui/button/Button";

const Orders = () => {
  const dispatch = useDispatch();
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

  const openConstructorPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "constructor",
        popupName: "Давайте начнём 📱",
        popupDescription: "Просто создайте заказ",
      })
    );
  };
  return (
    <div className={styles.orders}>
      {orders.length !== 0 ? (
        <OrderFilter
          setFilterName={setFilterName}
          filterValue={filterName}
          openConstructorPopup={openConstructorPopup}
        />
      ) : (
        <div className={styles.orders__zero__wrap}>
          <section className={styles.orders__zero}>
            <p className={styles.zero__title}>Заказов нет 😔</p>
            <p className={styles.zero__description}>Пора начинать работу!</p>
            <Button
              buttonText="Создать заказ"
              buttonClass="create__btn__f"
              onClick={openConstructorPopup}
            />
          </section>
        </div>
      )}

      {renderOrders}
    </div>
  );
};
export default Orders;
