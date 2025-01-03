"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";

import StatusList from "../status-list/Status-list";
import GeneralInfo from "../general-info/General-info";
import DevInfo from "../dev-info/Dev-info";
import MediaSlider from "../media-slider/Media-slider";
import OtherInfo from "../other-info/Other-info";

import styles from "./order.module.scss";

const Order = () => {
  const { orderReports } = useSelector((state) => state.tracker.orderInfo);
  const dispatch = useDispatch();
  const openChat = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "chat",
      })
    );
  };
  return (
    <>
      <div className={styles.order__status}>
        <StatusList />
      </div>
      <div className={styles.order__info}>
        <div className={styles.order__general__info}>
          <GeneralInfo />
          <DevInfo />
        </div>
        <div className={styles.media__slider}>
          <MediaSlider reports={orderReports} />
        </div>
        <div className={styles.other__info}>
          <OtherInfo />
        </div>
      </div>
      <div className={styles.chat__btn} onClick={openChat}>
        <Image
          src="/icons/chat.svg"
          width={23}
          height={23}
          alt="chat"
          className={styles.chat__img}
          onClick={openChat}
        />
      </div>
    </>
  );
};
export default Order;
