import { useSelector } from "react-redux";
import { useState } from "react";

import Review from "./review/Review";

import styles from "./reviews.module.scss";
import ReviewsStats from "./reviews-stats/Reviews-stats";
import ReviewsFilter from "./reviews-filter/Reviews-filter";

const Reviews = () => {
  const [filterName, setFilterName] = useState("Сначала положительные");
  const { reviews } = useSelector((state) => state.reviews);

  let sortedReviews = [...reviews];

  // Сортировка по рейтингу
  if (filterName === "Сначала положительные") {
    sortedReviews.sort((a, b) => b.reviewRate - a.reviewRate);
  } else if (filterName === "Сначала отрицательные") {
    sortedReviews.sort((a, b) => a.reviewRate - b.reviewRate);
  }
  // Сортировка по дате
  else if (filterName === "Сначала новые") {
    sortedReviews.sort(
      (a, b) =>
        new Date(b.reviewDate.split(".").reverse().join("-")) -
        new Date(a.reviewDate.split(".").reverse().join("-"))
    );
  } else if (filterName === "Сначала старые") {
    sortedReviews.sort(
      (a, b) =>
        new Date(a.reviewDate.split(".").reverse().join("-")) -
        new Date(b.reviewDate.split(".").reverse().join("-"))
    );
  }

  const mappedReviews = sortedReviews.map((item) => (
    <Review
      key={item.id}
      reviewRating={item.reviewRate}
      reviewTitle={item.reviewTitle}
      reviewDescription={item.reviewDescription}
      userName={item.clientName}
      userImage={item.clientAvatar}
      reviewDate={item.reviewDate}
    />
  ));

  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__wrap}>
        <ReviewsFilter setFilterName={setFilterName} filterName={filterName} />
        {reviews.length !== 0 ? (
          mappedReviews
        ) : (
          <div className={styles.not__reviews}>
            <p className={styles.not__title}>Тут пока пусто...</p>
            <p className={styles.not__description}>Но это временно, заказы обязательно будут!</p>
          </div>
        )}
      </div>
      <ReviewsStats />
    </div>
  );
};

export default Reviews;
