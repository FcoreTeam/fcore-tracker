import Button from "@/components/ui/button/Button";
import styles from "./request.module.scss";

const Request = ({ requestID, requestKey, requestExecutor, onClick }) => {
  return (
    <div className={styles.request} onClick={onClick}>
      <p className={styles.request__name}>
        Заявка для агента поддержки #{requestID}
      </p>
      <p className={styles.request__executor}>Собеседник: {requestExecutor}</p>
      <div className={styles.request__bottom}>
        <p className={styles.request__key}>{requestKey}</p>
        <Button buttonText="Подключиться" buttonClass="connect__btn" />
      </div>
    </div>
  );
};
export default Request;
