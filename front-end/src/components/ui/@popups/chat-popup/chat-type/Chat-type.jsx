import clsx from "clsx";

import styles from "./chat-type.module.scss";

const ChatType = ({ firstType, secondType, thirdType, chatType }) => {
  return (
    <div className={styles.chat__type}>
      <p
        className={clsx(
          styles.type,
          chatType === "client" ? styles.choosen : ""
        )}
        onClick={firstType}
      >
        С клиентом
      </p>
      <p
        className={clsx(
          styles.type,
          chatType === "support" ? styles.choosen : ""
        )}
        onClick={secondType}
      >
        Поддержка
      </p>
      <p
        className={clsx(
          styles.type,
          chatType === "clientSupport" ? styles.choosen : ""
        )}
        onClick={thirdType}
      >
        Клиент + Поддержка
      </p>
    </div>
  );
};
export default ChatType;
