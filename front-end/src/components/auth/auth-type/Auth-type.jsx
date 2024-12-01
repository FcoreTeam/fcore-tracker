import clsx from "clsx";

import styles from "./auth-type.module.scss";

const AuthType = ({
  authName,
  authDescription,
  isChoosen,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.auth__type, isChoosen ? styles.choosen__type : "")}
      onClick={onClick}
    >
      <p className={styles.auth__type__name}>{authName}</p>
      <p className={styles.auth__description}>{authDescription}</p>
    </div>
  );
};
export default AuthType;
