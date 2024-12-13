import Image from "next/image";

import styles from "./stats.module.scss";

const Stats = ({ statsImage, statsName, isPercent, isRank }) => {
  return (
    <section className={styles.stats}>
      <Image
        src={statsImage}
        alt="stats"
        width={30}
        height={30}
        className={styles.stats__image}
      />
      <p className={styles.stats__name}>
        <span className={styles.stats__count}>
          {!isRank ? (isPercent ? "100%" : "0") : null}
        </span>{" "}
        {statsName}{isRank ? "Без рейтинга" : null}
      </p>
    </section>
  );
};
export default Stats;