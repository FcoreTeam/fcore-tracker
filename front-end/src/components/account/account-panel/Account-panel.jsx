import Personal from "./personal/Personal";
import Settings from "./settings/Settings";
import Orders from "./orders/Orders";

import styles from "./account-panel.module.scss";
import Tariffs from "./tariffs/Tariffs";

const AccountPanel = ({ currentNavigation, accountType, setNav }) => {
  return (
    <div className={styles.account__panel}>
      {currentNavigation === "personal" && accountType !== "admin" ? (
        <Personal setMenuNav={setNav} />
      ) : currentNavigation === "settings" && accountType !== "admin" ? (
        <Settings />
      ) : currentNavigation === "orders" && accountType !== "admin" ? (
        <Orders />
      ) : currentNavigation === "tariffs" && accountType !== "admin" ? (
        <Tariffs />
      ) : null}
    </div>
  );
};
export default AccountPanel;
