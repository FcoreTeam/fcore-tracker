import Popup from "../Popup";
import ChatNavigation from "./chat-navigation/Chat-navigation";
import ChatType from "./chat-type/Chat-type";
import ChatFooter from "./chat-footer/Chat-footer";
import ChatMessage from "./chat-message/Chat-message";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./chat-popup.module.scss";

const ChatPopup = () => {
  const dispatch = useDispatch();
  const [chatType, setChatType] = useState("client");
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const [isSupportActive, setSupportActive] = useState(false);

  const { chatName, globalType } = useSelector((state) => state.chat.chatInfo);
  const { chatMessages } = useSelector((state) => state.chat);

  const setChat = (type) => {
    setChatType(type);
  };

  const messages = chatMessages.map((item) => (
    <ChatMessage
      chatSender={item.chatSender}
      chatMessage={item.chatMessage}
      chatDate={item.chatDate}
      chatAvatar={item.chatAvatar}
      isMessageUser={item.chatId.startsWith("#W")}
    />
  ));

  return (
    <>
      {isOpen && popupType === "chat" && (
        <Popup>
          <div className={styles.chat__wrapper}>
            <section className={styles.chat}>
              <div className={styles.chat__header}>
                <ChatNavigation chatName={chatName} />
                <ChatType
                  firstType={() => setChat("client")}
                  chatType={chatType}
                  secondType={() => setChat("support")}
                  thirdType={() => setChat("clientSupport")}
                />
              </div>
              <div className={styles.chat__body}>
                {chatType === "client" && globalType === "client" ? (
                  messages
                ) : chatType === "support" ? (
                  isSupportActive ? (
                    <></>
                  ) : (
                    <div className={styles.support__disable}>
                      <section className={styles.disable__block}>
                        <p className={styles.disable__title}>
                          Поддержка спит🌛
                        </p>
                        <p className={styles.disable__description}>
                          Агентам поддержки нужен отдых, мы скоро вернемся
                        </p>
                      </section>
                      <p className={styles.disable__time}>
                        Мы работаем с 08:00 до 01:00 по будням, а в выходные с
                        09:00 до 03:00 (Moscow Local Time)
                      </p>
                    </div>
                  )
                ) : chatType === "clientSupport" ? (
                  <></>
                ) : null}
              </div>
              <div className={styles.chat__footer}>
                <ChatFooter />
              </div>
            </section>
          </div>
        </Popup>
      )}
    </>
  );
};
export default ChatPopup;
