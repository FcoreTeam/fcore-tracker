import { useSelector } from "react-redux";
import Request from "./request/Request";

import styles from "./chat-requests.module.scss";

const ChatRequests = ({setIsConnected}) => {
  const { chatRequests } = useSelector((state) => state.admin.adminChat);
  const requests = chatRequests.map((item) => (
    <Request
      key={item.requestID}
      requestExecutor={item.requestExecutor}
      requestID={item.requestID}
      requestKey={item.requestKey}
      onClick={() => setIsConnected({
        isConnected: true,
        connectedObject: item,
      })}
    />
  ));
  return (
    <div className={styles.chat__requests}>
      {chatRequests.length !== 0 ? (
        requests
      ) : (
        <div className={styles.requests__empty}>
          <p className={styles.empty__title}>Заявки отсутствуют 🥳</p>
          <p className={styles.empty__description}>Можете отдохнуть!</p>
        </div>
      )}
    </div>
  );
};
export default ChatRequests;
