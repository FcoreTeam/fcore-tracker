import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";

import styles from "./stats.module.scss";

const Stats = ({
  statsImage,
  statsName,
  stat,
  statPercent,
  isPercent,
  isRank,
  isRating,
}) => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviews);
  let currentRate = 0;
  for (let i = 0; i < reviews.length; i++) {
    currentRate += reviews[i].reviewRate / reviews.length;
  }

  const setRatingPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "rating",
        popupName: "Рейтинг 🏆"
      })
    );
  };
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
          {!isRank
            ? isPercent
              ? statPercent + "%"
              : isRating
              ? currentRate.toFixed(2)
              : stat
            : null}
        </span>{" "}
        {statsName}
        {isRank ? "Рубиновый рейтинг" : null}
      </p>
      {isRank ? (
        <div className={styles.question}>
          <Image
            src="/icons/question.svg"
            alt="question"
            height={20}
            width={20}
            className={styles.question__ico}
            onClick={setRatingPopup}
          />
        </div>
      ) : null}
    </section>
  );
};
export default Stats;
