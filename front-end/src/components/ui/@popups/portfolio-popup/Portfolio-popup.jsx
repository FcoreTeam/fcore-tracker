import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Popup from "../Popup";

import styles from "./portfolio-popup.module.scss";
import Button from "../../button/Button";
import PortfolioStage from "./portfolio-stages/Portfolio-stage";
import { setPopupData } from "@/store/slices/popupsSlice";

const PortfolioPopup = () => {
  const dispatch = useDispatch();
  let [currentStage, setCurrentStage] = useState(1);
  const { popupType, isOpen } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );

  const changeStep = () => {
    setCurrentStage(++currentStage);
    switch (currentStage) {
      case 2:
        dispatch(
          setPopupData({
            isOpen: true,
            popupType: "portfolio",
            popupName: "Загрузите материалы вашей работы 📁",
            popupDescription: "Чтобы показать на что вы способны.",
          })
        );
        break;
      case 3:
        dispatch(
          setPopupData({
            isOpen: true,
            popupType: "portfolio",
            popupName: "Укажите цену и время выполнения работы 💸",
            popupDescription:
              "Потребуется для понимания заказчиком цены *необязательно",
          })
        );
        break;
    }
  };

  return (
    <>
      {isOpen && popupType === "portfolio" && (
        <Popup>
          <div className={styles.popup__wrap}>
            <div className={styles.portfolio__popup}>
              <p className={styles.popup__name}>{popupName}</p>
              <p className={styles.popup__description}>{popupDescription}</p>
              <section className={styles.popup__loader}>
                {currentStage === 1 ? (
                  <PortfolioStage currentStage={1} />
                ) : currentStage === 2 ? (
                  <PortfolioStage currentStage={2} />
                ) : currentStage === 3 ? (
                  <PortfolioStage currentStage={3} />
                ) : null}
              </section>
              <Button
                buttonText="Следующий шаг"
                isButtonImage={false}
                buttonClass="close__btn"
                onClick={changeStep}
              />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default PortfolioPopup;
