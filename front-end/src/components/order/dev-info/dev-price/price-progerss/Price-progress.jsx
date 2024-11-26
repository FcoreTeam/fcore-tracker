"use client";
import { useDispatch } from "react-redux";

import ProgressCategory from "./progress-category/Progress-category";

import styles from "./price-progress.module.scss";
import { setPopupData } from "@/store/slices/popupsSlice";

const PriceProgess = () => {
  const dispatch = useDispatch();

  const setPaymentData = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "payment",
        popupName: "Внесите оплату 💰",
        popupDescription: "Пришло время заплатить за работу",
      })
    );
  };

  return (
    <div className={styles.price__progress}>
      <ProgressCategory
        progressPrice={25000}
        isCompleted={true}
        openPaymentData={setPaymentData}
      />
      <ProgressCategory
        progressPrice={25000}
        isWaiting={true}
        openPaymentData={setPaymentData}
      />
      <ProgressCategory
        progressPrice={25000}
        openPaymentData={setPaymentData}
      />
      <ProgressCategory
        progressPrice={25000}
        openPaymentData={setPaymentData}
      />
    </div>
  );
};
export default PriceProgess;
