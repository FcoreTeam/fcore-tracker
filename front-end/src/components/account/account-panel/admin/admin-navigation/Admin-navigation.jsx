import clsx from "clsx";
import Image from "next/image";

import styles from "./admin-navigation.module.scss";

const AdminNavigation = ({
  onClick,
  navigationName,
  navigationImage,
  isCurrentNavgation,
}) => {
  return (
    <div
      className={clsx(
        styles.admin__navigation,
        isCurrentNavgation ? styles.choosen : ""
      )}
      onClick={onClick}
    >
      <Image
        src={navigationImage}
        alt={navigationName}
        width={30}
        height={30}
        className={styles.navigation__image}
      />
      <p className={styles.navigation__name}>{navigationName}</p>
    </div>
  );
};
export default AdminNavigation;
