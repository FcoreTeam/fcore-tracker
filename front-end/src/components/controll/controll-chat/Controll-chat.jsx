import { useDispatch, useSelector } from "react-redux";

import ChatFooter from "@/components/ui/@popups/chat-popup/chat-footer/Chat-footer";
import ChatMessage from "@/components/ui/@popups/chat-popup/chat-message/Chat-message";

import styles from "./controll-chat.module.scss";

const ControllChat = ({ companionName, orderID }) => {
  return (
    <div className={styles.controll__chat}>
      <div className={styles.chat__body}>
        <p className={styles.chat__companion}>Чат: {companionName}</p>
        <section className={styles.chat__messages}>
          {/* {orderMessages.map((item) => (
            <ChatMessage chatMessage={item.message} />
          ))} */}
        </section>
      </div>
      <ChatFooter />
    </div>
  );
};
export default ControllChat;
