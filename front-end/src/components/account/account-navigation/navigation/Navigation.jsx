import clsx from "clsx";

import Image from "next/image";

import styles from "./navigation.module.scss";

const Navigation = ({ onClick, navImage, navName, isActive }) => {
  return (
    <div
      className={clsx(styles.navigation__wrap, isActive ? styles.active : "")}
      onClick={onClick}
    >
      <Image
        src={navImage}
        alt="navigation"
        height={40}
        width={40}
        className={styles.navigation__image}
      />
      <p className={styles.nav__title}>{navName}</p>
    </div>
  );
};
export default Navigation;
