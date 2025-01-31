import clsx from "clsx";
import Image from "next/image";

import styles from "./controll-navigation.module.scss";

const ControllNavigation = ({ navType, setNav, currentNav }) => {
  const changeNav = (nav) => {
    setNav(nav);
  };

  const routingUser = [
    { nav: "stats", navImage: "" },
    { nav: "controlls", navImage: "" },
  ];
  const routingChat = [];
  const routingOrder = [];
  return (
    <nav className={styles.controll__navigation}>
      {navType === "Аккаунт"
        ? routingUser.map((item, index) => (
            <div
              key={index}
              className={clsx(styles.user__nav)}
              onClick={() => changeNav(item.nav)}
            >
              <Image
                src={item.navImage}
                alt={item.nav}
                width={40}
                height={40}
                className={styles.nav__image}
              />
            </div>
          ))
        : null}
    </nav>
  );
};
export default ControllNavigation;
