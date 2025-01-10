import clsx from "clsx";
import styles from "./dev-status.module.scss";

const DevStatus = ({ status }) => {
  return (
    <div
      className={clsx(
        styles.status,
        status === "Не активирован " ? styles.wait : ""
      )}
    >
      <p className={styles.status__text}>{status}</p>
    </div>
  );
};
export default DevStatus;
