import styles from "./account-navigation.module.scss";
import Navigation from "./navigation/Navigation";

const AccountNavigation = ({ accountType, setNav, currentNavigation }) => {
  return (
    <nav className={styles.account__navigation}>
      <Navigation
        navName="Личный кабинет"
        onClick={() => setNav("personal")}
        isActive={currentNavigation === "personal"}
        navImage="/icons/profile.svg"
      />
      <Navigation
        navName="Тарифы"
        onClick={() => setNav("tariffs")}
        isActive={currentNavigation === "tariffs"}
        navImage="/icons/tariffs.svg"
      />
      <Navigation
        navName="Мои заказы"
        onClick={() => setNav("orders")}
        isActive={currentNavigation === "orders"}
        navImage="/icons/orders.svg"
      />
      <Navigation
        navName="Настройки"
        onClick={() => setNav("settings")}
        isActive={currentNavigation === "settings"}
        navImage="/icons/settings.svg"
      />
    </nav>
  );
};

export default AccountNavigation;
