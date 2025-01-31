import clsx from "clsx";

import Image from "next/image";
import styles from "./chat-message.module.scss";

const ChatMessage = ({
  sender,
  chatDate,
  chatMessage,
  chatAvatar,
  isUserMessage,
  isSupportPage,
}) => {
  return (
    <div
      className={clsx(
        styles.chat__message,
        isSupportPage ? styles.support__message : "",
        isUserMessage ? styles.user__message : ""
      )}
    >
      <Image
        src={chatAvatar}
        alt="avatar"
        width={40}
        height={40}
        className={styles.message__avatar}
      />
      <div className={styles.message__info}>
        <p className={styles.message__sender}>{sender}</p>
        <p className={styles.message}>{chatMessage}</p>
        <p className={styles.message__date}>{chatDate}</p>
      </div>
    </div>
  );
};
export default ChatMessage;
