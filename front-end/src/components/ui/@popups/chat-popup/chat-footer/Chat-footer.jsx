import Input from "@/components/ui/input/Input";
import styles from "./chat-footer.module.scss";
import Button from "@/components/ui/button/Button";

const ChatFooter = () => {
  return (
    <div className={styles.chat__footer}>
      <Input
        isTextArea={true}
        inputPlaceholder="Введите сообщение..."
        inputClass="chat__input"
      />
      <Button
        buttonClass="send__btn"
        isButtonImage={true}
        onClick={null}
      />
    </div>
  );
};
export default ChatFooter;
