import { useRef } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/store/slices/chatSlice";
import { useReducer } from "react";

import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import styles from "./chat-footer.module.scss";

const ChatFooter = () => {
  const dispatch = useDispatch();
  const { userID } = useSelector((state) => state.auth.firstStage);
  const { chatMessages } = useSelector((state) => state.chat);
  const inputRef = useRef(null);

  const sendMessage = () => {
    const message = inputRef.current.value;
    if (message.trim() !== "") {
      dispatch(
        addMessage({
          chatID: userID + chatMessages.length + 1,
          chatMessage: message,
          isUserMessage: true,
        })
      );
      inputRef.current.value = ""; 
    }
  };

  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const handleInputChange = () => {
    forceUpdate();
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      sendMessage();
    }
  };

  return (
    <div className={styles.chat__footer}>
      <Input
        isTextArea={true}
        inputPlaceholder="Введите сообщение..."
        inputClass="chat__input"
        inputRef={inputRef}
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}
      />
      {inputRef.current && inputRef.current.value.trim() !== "" && ( 
        <Button
          buttonClass="send__btn"
          isButtonImage={true}
          buttonImage="/icons/send.svg"
          onClick={sendMessage}
        />
      )}
    </div>
  );
};

export default ChatFooter;