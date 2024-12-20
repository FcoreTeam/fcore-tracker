"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import StatusList from "../../components/order/status-list/Status-list";
import GeneralInfo from "../../components/order/general-info/General-info";
import DevInfo from "../../components/order/dev-info/Dev-info";
import MediaSlider from "../../components/order/media-slider/Media-slider";
import OtherInfo from "../../components/order/other-info/Other-info";

import styles from "./order.module.scss";
import { setPopupData } from "@/store/slices/popupsSlice";

const Order = () => {
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
    <div className={styles.order__wrap}>
      <div className={styles.order__status}>
        <StatusList />
      </div>
      <div className={styles.order__info}>
        <div className={styles.order__general__info}>
          <GeneralInfo />
          <DevInfo />
        </div>
        <div className={styles.media__slider}>
          <MediaSlider />
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
    </div>
  );
};
export default Order;
