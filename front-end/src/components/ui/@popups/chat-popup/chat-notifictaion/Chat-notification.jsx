import Image from "next/image";
import styles from "./chat-notification.module.scss";

const ChatNotification = ({
  notficationIco,
  notificationTitle,
  notificationDescription,
}) => {
  return (
    <div className={styles.chat__notification}>
      <Image src={notficationIco} alt="null" />
      <div className={styles.notification__info}>
        <p className={styles.notification__title}>{notificationTitle}</p>
        <p className={styles.notification__description}>
          {notificationDescription}
        </p>
      </div>
    </div>
  );
};
export default ChatNotification;
