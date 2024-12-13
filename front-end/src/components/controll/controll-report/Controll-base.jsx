"use client";

import { useDispatch } from "react-redux";

import Setting from "@/components/account/account-panel/settings/settings-stage/setting/Setting";

import styles from "./controll-base.module.scss";

const ControllBase = ({ orderID, orderName, orderDescription }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.controll__base}>
      <Setting settingName="Назание заказа" settingParam={orderName} />
    </div>
  );
};
export default ControllBase;
