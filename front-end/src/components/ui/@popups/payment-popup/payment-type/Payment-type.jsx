import clsx from "clsx";

import Image from "next/image";

import styles from "./payment-type.module.scss";

const PaymentType = ({
  paymentImage,
  paymentAlt,
  paymentName,
  paymentOnclick,
  imageWidth, 
  imageHeight,
  isChoosen
}) => {
  return (
    <div className={clsx(styles.payment__type, styles[isChoosen])} onClick={paymentOnclick}>
      <Image
        src={paymentImage}
        alt={paymentAlt}
        width={imageWidth}
        height={imageHeight}
        className={styles.payment__image}
      />
      <p className={styles.payment__name}>{paymentName}</p>
    </div>
  );
};
export default PaymentType;
