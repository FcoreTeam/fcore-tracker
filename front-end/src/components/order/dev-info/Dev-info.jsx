import DevPrice from "./dev-price/Dev-price";
import DevTime from "./dev-time/Dev-time";


import styles from "./dev-info.module.scss";

const DevInfo = () => {
  return (
    <div className={styles.dev__info}>
        <DevTime />
        <DevPrice />
    </div>
  )
}
export default DevInfo