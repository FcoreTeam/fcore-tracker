import styles from "./account-navigation.module.scss";
import Navigation from "./navigation/Navigation";

const AccountNavigation = ({ accountType, setNav, currentNavigation }) => {
  return (
    <nav className={styles.account__navigation}>
      <Navigation
        navName="Личный кабинет"
        onClick={() => setNav("personal")}
        isActive={currentNavigation === "personal"}
      />
      <Navigation
        navName="Тарифы"
        onClick={() => setNav("tarif")}
        isActive={currentNavigation === "tarif"}
      />
      <Navigation
        navName="Мои заказы"
        onClick={() => setNav("orders")}
        isActive={currentNavigation === "orders"}
      />
      <Navigation
        navName="Настройки"
        onClick={() => setNav("settings")}
        isActive={currentNavigation === "settings"}
      />
    </nav>
  );
};

export default AccountNavigation;
