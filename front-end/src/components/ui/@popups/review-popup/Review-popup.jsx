"use client";
import Popup from "../Popup";
import Star from "./star/Star";
import Input from "../../input/Input";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../../button/Button";

import styles from "./review-popup.module.scss";

const ReviewPopup = () => {
  const dispatch = useDispatch();
  const { popupType, isOpen } = useSelector(
    (state) => state.popups.generalInfo
  );
  const [starsState, setStarsState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <>
      {popupType === "review" && isOpen && (
        <Popup>
          <div className={styles.popup__wrap}>
            <div className={styles.review__popup}>
              <p className={styles.popup__name}>Оставьте отзыв</p>
              <p className={styles.popup__description}>
                Оставить отзыв не сложно, а исполнителю приятно <span>⭐</span>
              </p>
              <section className={styles.popup__body}>
                <div className={styles.review}>
                  <div className={styles.stars}>
                    {starsState.map((item, index) => (
                      <Star
                        key={index}
                        index={index}
                        isActive={item}
                        setStarsState={setStarsState}
                      />
                    ))}
                  </div>
                  <div className={styles.review__rate}>
                    {starsState[4] ? (
                      <div>
                        <p className={styles.rate__emoji}> 🤩</p>
                        <p className={styles.rate__name}>Превосходно</p>
                      </div>
                    ) : starsState[3] ? (
                      <div>
                        <p className={styles.rate__emoji}> ☺️</p>
                        <p className={styles.rate__name}>Хорошо</p>
                      </div>
                    ) : starsState[2] ? (
                      <div>
                        <p className={styles.rate__emoji}> 😑</p>
                        <p className={styles.rate__name}>Могло быть и лучше</p>
                      </div>
                    ) : starsState[1] ? (
                      <div>
                        <p className={styles.rate__emoji}> 😓 </p>
                        <p className={styles.rate__name}>Плохо</p>
                      </div>
                    ) : starsState[0] ? (
                      <div>
                        <p className={styles.rate__emoji}> 🤬</p>
                        <p className={styles.rate__name}>Очень плохо</p>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className={styles.inputs}>
                  <Input
                    inputPlaceholder="Заголовок отзыва"
                    inputClass="review__input"
                  />
                  <Input
                    inputPlaceholder="Подробный отзыв"
                    inputClass="review__input__h"
                    isTextArea={true}
                  />
                </div>
                <Button buttonText="Оставить отзыв" buttonClass="review__btn" />
              </section>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default ReviewPopup;
