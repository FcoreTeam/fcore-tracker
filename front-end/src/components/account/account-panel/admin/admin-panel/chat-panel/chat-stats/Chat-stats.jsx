import { useDispatch } from "react-redux";
import { closeRequest } from "@/store/slices/adminSlice";
import Button from "@/components/ui/button/Button";

import styles from "./chat-stats.module.scss";

const ChatStats = ({ connectedObject, setIsConnected }) => {
  const dispatch = useDispatch();
  const handleCloseRequest = () => {
    dispatch(closeRequest({ connectedObject })); // Pass the connectedObject directly
    setIsConnected({
      isConnected: false,
      connectedObject: {},
    });
  };
  return (
    <section className={styles.chat__stats}>
      <p className={styles.chat__stats__title}>Информация о собеседнике</p>
      <div className={styles.stats__wrap}>
        {connectedObject.requestFrom === "worker" || "client" ? (
          <>
            <p className={styles.chat__stat}>
              {connectedObject.requestFrom === "worker"
                ? "Исполнитель"
                : connectedObject.requestFrom === "client"
                ? "Клиент"
                : ""}
              :{" "}
              {connectedObject !== undefined
                ? connectedObject.requestExecutor
                : ""}
            </p>
            <p className={styles.chat__stat}>ID Заказа:</p>
            <p className={styles.chat__stat}>ID Исполнителя:</p>
          </>
        ) : null}
      </div>
      <Button
        buttonText="Закрыть заявку"
        buttonClass="close__connect"
        onClick={handleCloseRequest}
      />
    </section>
  );
};
export default ChatStats;
