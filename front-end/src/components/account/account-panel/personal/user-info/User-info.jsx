"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

import styles from "./user-info.module.scss";

const UserInfo = () => {
  const { username } = useSelector((state) => state.auth.firstStage);
  const { about } = useSelector((state) => state.auth.thirdStage);

  return (
    <div className={styles.user__info}>
      <Image
        src="/maskots/maskotFirst.png"
        alt="your avatar"
        width={80}
        height={80}
        className={styles.user__avatar}
      />
      <section className={styles.user__text__info}>
        <p className={styles.user__name}>{username}</p>
        <p className={styles.user__type}>
          {about}
        </p>
      </section>
    </div>
  );
};
export default UserInfo;
