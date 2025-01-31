import Popup from "../Popup";
import ChatNavigation from "./chat-navigation/Chat-navigation";
import ChatType from "./chat-type/Chat-type";
import ChatFooter from "./chat-footer/Chat-footer";
import ChatMessage from "./chat-message/Chat-message";
import { addMessage } from "@/store/slices/chatSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./chat-popup.module.scss";

const ChatPopup = () => {
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { chatName, chatType } = useSelector((state) => state.chat.chatInfo);
  const { messages } = useSelector((state) => state.chat);

  const [localType, setChatType] = useState("client");

  const messagesMap = messages.map((item, index) => (
    <ChatMessage
      key={index}
      chatSender={item.chatSender}
      chatMessage={item.chatMessage}
      chatDate={item.chatDate}
      chatAvatar={item.chatAvatar}
      isUserMessage={item.isUserMessage}
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
                  firstType={() => setChatType("client")}
                  chatType={chatType}
                  secondType={() => setChatType("support")}
                  thirdType={() => setChatType("clientSupport")}
                />
              </div>
              <div className={styles.chat__body}>
                {localType === "client" ? (
                  messagesMap
                ) : chatType === "support" ? (
                  <></>
                ) : chatType === "clientSupport" ? (
                  <></>
                ) : null}
              </div>
              <div className={styles.chat__footer}>
                <ChatFooter addMessage={addMessage} />
              </div>
            </section>
          </div>
        </Popup>
      )}
    </>
  );
};

export default ChatPopup;
