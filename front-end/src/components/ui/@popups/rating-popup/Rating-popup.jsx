import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setPopupData } from "@/store/slices/popupsSlice";
import clsx from "clsx";

import Popup from "../Popup";

import styles from "./rating-popup.module.scss";
import RatingConditions from "./rating-conditions/Rating-conditions";
import RatingDescription from "./rating-description/Rating-description";
import Button from "../../button/Button";

const RatingPopup = () => {
  const dispatch = useDispatch();
  const [popupPage, setPopupPage] = useState("description");

  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName } = useSelector((state) => state.popups.popupInfo);

  const setPopupNav = (nav) => {
    setPopupPage(nav);
  };

  const closePopup = () => {
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
  };
  return (
    <>
      {isOpen && popupType === "rating" && (
        <Popup>
          <div className={styles.rating__popup__wrap}>
            <section
              className={clsx(
                styles.rating__popup,
                popupPage === "conditions" ? styles.conditions : ""
              )}
            >
              <p className={styles.popup__name}>{popupName}</p>
              <nav className={styles.popup__nav}>
                <p
                  className={clsx(
                    styles.nav,
                    popupPage === "description" ? styles.active : ""
                  )}
                  onClick={() => setPopupNav("description")}
                >
                  Что это такое?
                </p>
                <p
                  className={clsx(
                    styles.nav,
                    popupPage === "conditions" ? styles.active : ""
                  )}
                  onClick={() => setPopupNav("conditions")}
                >
                  Условия
                </p>
              </nav>
              <div className={styles.popup__pages}>
                {popupPage === "description" ? (
                  <RatingDescription />
                ) : popupPage === "conditions" ? (
                  <RatingConditions />
                ) : (
                  <></>
                )}
              </div>
              <Button
                buttonText="Закрыть"
                buttonClass="close__btn"
                onClick={closePopup}
              />
            </section>
          </div>
        </Popup>
      )}
    </>
  );
};
export default RatingPopup;
