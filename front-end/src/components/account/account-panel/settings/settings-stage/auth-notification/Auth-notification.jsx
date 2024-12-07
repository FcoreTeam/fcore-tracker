import clsx from "clsx";

import Image from "next/image";

import styles from "./auth-notification.module.scss";
import Button from "@/components/ui/button/Button";

const AuthNotification = ({
  notifType,
  notifTitle,
  notifDescription,
  notifOnClick,
}) => {
  return (
    <div
      className={clsx(
        styles.auth__notification,
        notifType === "2FA" ? styles.warning : ""
      )}
    >
      <section className={styles.text__info}>
        <Image src={null} alt="shield" width={50} height={50} />
        <div className={styles.notification__type}>
          <p className={styles.notification__title}>{notifTitle}</p>
          <p className={styles.notification__description}>{notifDescription}</p>
        </div>
      </section>

      {notifType === "2FA" ? (
        <Button
          buttonText="Подключить 2FA"
          buttonClass="connect__btn"
          onClick={notifOnClick}
        />
      ) : null}
    </div>
  );
};
export default AuthNotification;
