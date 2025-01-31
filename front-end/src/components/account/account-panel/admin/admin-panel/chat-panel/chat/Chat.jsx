import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeRequestTemp } from "@/store/slices/adminSlice";
import { addMessage } from "@/store/slices/chatSlice";

import ChatMessage from "@/components/ui/@popups/chat-popup/chat-message/Chat-message";
import ChatFooter from "@/components/ui/@popups/chat-popup/chat-footer/Chat-footer";

import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import styles from "./chat.module.scss";

const Chat = ({ isConnected, setIsConnected }) => {
  const dispatch = useDispatch();
  const [chatKey, setChatKey] = useState("CR-");
  const { messages } = useSelector((state) => state.chat);
  const { chatRequests } = useSelector((state) => state.admin.adminChat);

  const messagesMap = messages.map((item, index) => (
    <ChatMessage
      key={index}
      chatSender={item.chatSender}
      chatMessage={item.chatMessage}
      chatDate={item.chatDate}
      chatAvatar={item.chatAvatar}
      isUserMessage={item.isUserMessage}
      isSupportPage={true}
    />
  ));

  const setConnectedState = (isConnected, connectedObject) => {
    setIsConnected({
      isConnected: isConnected,
      connectedObject: connectedObject,
    });
    if (isConnected) {
      dispatch(
        removeRequestTemp({ connectedObject: isConnected.connectedObject })
      );
    }
  };
  const handleChatKey = (value) => {
    setChatKey(value);
  };

  let findRequest;
  const findChat = () => {
    findRequest = chatRequests.find((item) => item.requestKey === chatKey);
    return findRequest !== undefined;
  };

  return (
    <div className={styles.chat}>
      {isConnected.isConnected ? (
        <section className={styles.chat__section}>
          <div className={styles.header__chat}>
            <p className={styles.connected__title}>Вы подключены к чату</p>
            <Button
              buttonText="Отключиться"
              buttonClass="disconnect__btn"
              onClick={() => setConnectedState(false, {})}
            />
          </div>
          <div className={styles.chat__body}>{messagesMap}</div>
          <ChatFooter addMessage={addMessage} />
        </section>
      ) : (
        <div className={styles.connect__wrap}>
          <div className={styles.chat__input__connect}>
            <p className={styles.chat__input__title}>
              Вы ещё не подключены к чату
            </p>
            <p className={styles.chat__input__description}>
              подключиться можно через ChatKey
            </p>
            <div className={styles.connect__input__wrap}>
              <Input
                inputPlaceholder="ключ чата"
                inputClass="connect__input"
                value={chatKey}
                onChange={(e) => {
                  handleChatKey(e.target.value);
                }}
              />
              <Button
                buttonText="Подключиться"
                buttonClass="connect__btn__p"
                onClick={() => {
                  {
                    findChat() ? setConnectedState(true, findRequest) : null;
                  }
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chat;
