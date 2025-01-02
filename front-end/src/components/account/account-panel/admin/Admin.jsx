import { useState } from "react";
import AdminNavigation from "./admin-navigation/Admin-navigation";
import ChatPanel from "./admin-panel/chat-panel/Chat-panel";

import styles from "./admin.module.scss";


const Admin = () => {
  const [adminNavigation, setAdminNavigation] = useState("search");

  return (
    <div className={styles.admin__page}>
      <section className={styles.admin__navigation}>
        <AdminNavigation
          navigationName="Поиск по БД"
          isCurrentNavgation={adminNavigation === "search" ? true : false}
          onClick={() => setAdminNavigation("search")}
        />
        <AdminNavigation
          navigationName="Чат"
          isCurrentNavgation={adminNavigation === "chat" ? true : false}
          onClick={() => setAdminNavigation("chat")}
        />
        <AdminNavigation
          navigationName="Верификация"
          isCurrentNavgation={adminNavigation === "verify" ? true : false}
          onClick={() => setAdminNavigation("verify")}
        />
        <AdminNavigation
          navigationName="Управление сайтом"
          isCurrentNavgation={adminNavigation === "controll" ? true : false}
          onClick={() => setAdminNavigation("controll")}
        />
      </section>
      <div className={styles.admin__panel}>
        {adminNavigation === "search" ? (
          <></>
        ) : adminNavigation === "chat" ? (
          <ChatPanel />
        ) : adminNavigation === "verify" ? (
          <></>
        ) : adminNavigation === "controll" ? (
          <></>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Admin;
