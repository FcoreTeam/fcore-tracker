import styles from "./personal.module.scss";
import UserInfo from "./user-info/User-info";

const Personal = () => {
  return (
    <div className={styles.personal__info}>
      <UserInfo />
    </div>
  )
}
export default Personal