import Button from "@/components/ui/button/Button";
import Link from "next/link";
import clsx from "clsx";

import styles from "./other-controll.module.scss";

const OtherControll = ({ orderSteps }) => {
  return (
    <div
      className={clsx(
        styles.other__controll,
        orderSteps.length === 0 ? styles.has__steps : ""
      )}
    >
      <Button buttonText="Документы" buttonClass="controll__button" />
      <div className={styles.back__btn}>
        <Link href="/account" className={styles.back}>
          В аккаунт
        </Link>
      </div>
      {orderSteps.length !== 0 ? (
        <Button buttonText="Этапы оплаты" buttonClass="controll__button" />
      ) : (
        <></>
      )}
      <Button buttonText="Арбитраж" buttonClass="controll__button" />
    </div>
  );
};
export default OtherControll;
