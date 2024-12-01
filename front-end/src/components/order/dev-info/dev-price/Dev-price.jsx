import PriceProgess from "./price-progerss/Price-progress";

import styles from "./dev-price.module.scss";

const DevPrice = () => {
  return (
    <div className={styles.dev__price}>
      <p className={styles.price__title}>Оплата заказа</p>
      <div className={styles.price__progress__bar}>
        <PriceProgess />
        <div className={styles.progress__tip}>
          <p className={styles.progress__tip__percent}>25%</p>
          <p className={styles.progress__tip__percent}>50%</p>
          <p className={styles.progress__tip__percent}>75%</p>
        </div>
      </div>
    </div>
  );
};
export default DevPrice;
