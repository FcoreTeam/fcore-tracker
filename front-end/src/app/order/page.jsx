import Image from "next/image";

import StatusList from "../../components/order/status-list/Status-list";
import GeneralInfo from "../../components/order/general-info/General-info";
import DevInfo from "../../components/order/dev-info/Dev-info";
import MediaSlider from "../../components/order/media-slider/Media-slider";
import OtherInfo from "../../components/order/other-info/Other-info";

import styles from "./order.module.scss";

const Order = () => {
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
      <div className={styles.chat__btn}>
        <Image
          src="/icons/chat.svg"
          width={23}
          height={23}
          alt="chat"
          className={styles.chat__img}
        />
      </div>
    </div>
  );
};
export default Order;
