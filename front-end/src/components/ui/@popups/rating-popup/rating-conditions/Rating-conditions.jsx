import Image from "next/image";

import styles from "./rating-conditions.module.scss";
import Condition from "./condition/Condition";

const RatingConditions = () => {
  return (
    <div className={styles.rating__conditions}>
      <Condition
        codiitonName="Бронзовый"
        conditionImage="/icons/bronze.svg"
        conditionType="bronze"
      />
      <Condition
        codiitonName="Серебрянный"
        conditionImage="/icons/silver.svg"
        conditionType="silver"
      />
      <Condition
        codiitonName="Золотой"
        conditionImage="/icons/gold.svg"
        conditionType="gold"
      />
      <Condition
        codiitonName="Платиновый"
        conditionImage="/icons/platinum.svg"
        conditionType="platinum"
      />
      <Condition
        codiitonName="Рубиновый"
        conditionImage="/icons/rubin.svg"
        conditionType="rubin"
      />
    </div>
  );
};
export default RatingConditions;
