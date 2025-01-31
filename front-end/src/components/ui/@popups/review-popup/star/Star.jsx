import clsx from "clsx";
import Image from "next/image";

import styles from "./star.module.scss";

const Star = ({ index, isActive, setStarsState }) => {
  const setStar = () => {
    setStarsState((prev) => {
      const newStars = Array(prev.length).fill(false);
      for (let i = 0; i <= index; i++) {
        newStars[i] = true;
      }
      return newStars;
    });
  };

  return (
    <div
      className={clsx(styles.star, { [styles.active]: isActive })}
      onClick={setStar}
    >
      <Image
        src={
          isActive
            ? "/icons/starReviewActive.svg"
            : "/icons/starReviewDisable.svg"
        }
        alt="star"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Star;
