import Personal from "./personal/Personal";
import Settings from "./settings/Settings";
import Orders from "./orders/Orders";

import styles from "./account-panel.module.scss";

const AccountPanel = ({ currentNavigation, accountType }) => {
  return (
    <div className={styles.account__panel}>
      {currentNavigation === "personal" && accountType !== "admin" ? (
        <Personal />
      ) : currentNavigation === "settings" && accountType !== "admin" ? (
        <Settings />
      ) : currentNavigation === "orders" && accountType !== "admin" ? (
        <Orders />
      ) : null}
    </div>
  );
};
export default AccountPanel;
