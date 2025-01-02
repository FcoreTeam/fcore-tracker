import { useState } from "react";

import ChatRequests from "./chat-requests/Chat-requests";
import Chat from "./chat/Chat";
import ChatStats from "./chat-stats/Chat-stats";

import styles from "./chat-panel.module.scss";

const ChatPanel = () => {
  const [isConnected, setIsConnected] = useState({
    isConnected: false,
    connectedObject: {},
  });
  return (
    <div className={styles.chat__panel}>
      <Chat isConnected={isConnected} setIsConnected={setIsConnected} />
      {isConnected.isConnected ? (
        <ChatStats
          connectedObject={isConnected.connectedObject}
          setIsConnected={setIsConnected}
        />
      ) : (
        <ChatRequests setIsConnected={setIsConnected} />
      )}
    </div>
  );
};
export default ChatPanel;
