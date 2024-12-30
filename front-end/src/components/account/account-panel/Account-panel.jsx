import Personal from "./personal/Personal";
import Settings from "./settings/Settings";
import Orders from "./orders/Orders";

import styles from "./account-panel.module.scss";
import Tariffs from "./tariffs/Tariffs";
import Admin from "./admin/Admin";

const AccountPanel = ({ currentNavigation, accountType, setNav }) => {
  return (
    <div className={styles.account__panel}>
      {currentNavigation === "personal"  ? (
        <Personal setMenuNav={setNav} />
      ) : currentNavigation === "settings"  ? (
        <Settings />
      ) : currentNavigation === "orders" ? (
        <Orders />
      ) : currentNavigation === "tariffs" ? (
        <Tariffs />
      ) : currentNavigation === "admin" ? (
        <Admin />
      ) : (
        <></>
      )}
    </div>
  );
};
export default AccountPanel;
