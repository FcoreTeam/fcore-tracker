"use client";

import { useSelector } from "react-redux";
import { useState } from "react";

import AccountNavigation from "./account-navigation/Account-navigation";
import AccountPanel from "./account-panel/Account-panel";

import styles from "./account.module.scss";

const Account = () => {
  const { accountType } = useSelector((state) => state.auth); // superAdmin, admin
  const [currentNavigation, setCurrentNavigation] = useState("personal");

  const setNavigation = (navigate) => {
    setCurrentNavigation(navigate);
  };

  return (
    <section className={styles.account}>
      <AccountNavigation
        accountType={accountType}
        setNav={setNavigation}
        currentNavigation={currentNavigation}
      />
      <AccountPanel currentNavigation={currentNavigation} accountType={accountType} />
    </section>
  );
};
export default Account;
