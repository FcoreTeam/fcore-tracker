"use client";

import { useState } from "react";
import PersonalNav from "./personal-nav/Personal-nav";
import UserInfo from "./user-info/User-info";
import Withdraw from "./withdraw/Withdraw";
import Reviews from "./reviews/Reviews";


import styles from "./personal.module.scss";
import UserDescription from "./user-description/User-description";

const Personal = () => {
  const [personalNav, setNav] = useState("reviews");

  return (
    <div className={styles.personal__info}>
      <section className={styles.top__info}>
        <UserInfo />
        <UserDescription />
      </section>
      <div className={styles.bottom__info}>
        <PersonalNav setNav={setNav} currentNav={personalNav} />
        <section className={styles.personal__menu}>
          {personalNav === "reviews" ? (
            <Reviews />
          ) : personalNav === "withdraws" ? (
            <Withdraw />
          ) : personalNav === "portfolio" ? (
            <></>
          ) : null}
        </section>
      </div>
    </div>
  );
};
export default Personal;
