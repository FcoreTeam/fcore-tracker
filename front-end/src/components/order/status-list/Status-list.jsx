import StudioOrder from "./studio-order/Studio-order";

import styles from "./status.module.scss";

const Status = () => {
 return (
    <div className={styles.status__list}>
      <div className={styles.studio__order}>
         <StudioOrder />
      </div>
    </div>
 )
}
export default Status;