import Image from "next/image";

import styles from "./review.module.scss";

const Review = ({
  userImage,
  userName,
  reviewTitle,
  reviewDescription,
  reviewRating,
  reviewDate,
}) => {
  return (
    <section className={styles.review}>
      <Image
        src={userImage}
        alt="user"
        width={60}
        height={60}
        className={styles.review__user__image}
      />
      <div className={styles.review__info}>
        <div className={styles.rating__wrap}>
          <p className={styles.review__title}>{reviewTitle}</p>
          <section className={styles.rate__section}>
            <Image
              src="/icons/star.svg"
              alt="star"
              width={20}
              height={20}
              className={styles.review__star}
            />
            <p className={styles.review__rating}>{reviewRating.toFixed(1)}</p>
          </section>
        </div>

        <p className={styles.review__description}>{reviewDescription}</p>
        <div className={styles.other__info}>
          <p className={styles.review__user__name}>Отзыв оставил: {userName}</p>
          <p className={styles.review__date}>{reviewDate}</p>
        </div>
      </div>
    </section>
  );
};
export default Review;
