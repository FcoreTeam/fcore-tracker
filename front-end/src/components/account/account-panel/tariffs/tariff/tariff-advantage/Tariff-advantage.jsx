import Image from "next/image";

import styles from "./tariff-advantage.module.scss";

const TariffAdvantage = ({ advantageImage, advantageText }) => {
  return (
    <div className={styles.advantage}>
      <Image
        src={advantageImage}
        alt="adv"
        width={30}
        height={30}
        className={styles.advantage__image}
      />
      <p className={styles.advantage__text}>{advantageText}</p>
    </div>
  );
};
export default TariffAdvantage;
