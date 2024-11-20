"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

import styles from "./studio-order.module.scss";

const StudioOrder = () => {
  const { studioName, studioRating, studioDescription, studioAvatar } =
    useSelector((state) => state.tracker.studioInfo);
  console.log(studioAvatar);
  return (
    <div className={styles.studio__order}>
      <Image
        src={studioAvatar}
        alt="img"
        width={50}
        height={50}
        className={styles.studio__avatar}
      />
      <div className={styles.studio__info}>
        <div className={styles.rate__info}>
          <p className={styles.studio__name}>{studioName}</p>
          <div className={styles.rating}>
            <p className={styles.rate}>{studioRating}</p>
            <Image src="/star.svg" width={13} height={13} alt="img" />
            <a href="" className={styles.check__rating}></a>
          </div>
        </div>
        <p className={styles.studio__description}>{studioDescription}</p>
      </div>
    </div>
  );
};
export default StudioOrder;
