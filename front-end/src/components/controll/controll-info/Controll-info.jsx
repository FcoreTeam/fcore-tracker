import OtherControll from "./other-controll/Other-controll";

import styles from "./controll-info.module.scss";

const ControllInfo = ({ orderName, orderDescription, orderSteps }) => {
  return (
    <div className={styles.controll__info}>
      <div className={styles.text__info}>
        <p className={styles.order__name}>{orderName}</p>
        <p className={styles.order__description}>{orderDescription}</p>
      </div>

      <div className={styles.other__controll}>
       <OtherControll orderSteps={orderSteps} />
      </div>
    </div>
  );
};
export default ControllInfo;
