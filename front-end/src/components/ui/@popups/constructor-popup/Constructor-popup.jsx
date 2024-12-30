import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Popup from "../Popup";
import Input from "../../input/Input";

import styles from "./constructor-popup.module.scss";
import Button from "../../button/Button";
import { setPopupData } from "@/store/slices/popupsSlice";
import ConstructorStage from "./constructor-stage/Constructor-stage";

const ConstructorPopup = () => {
  const dispatch = useDispatch();
  let [currentStage, setCurrentStage] = useState(1);
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );
  const closePopup = () => {
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
  };
  const changeStage = (eventType) => {
    if (eventType === "reset") {
      setCurrentStage(1);
    } else {
      setCurrentStage(++currentStage);
      switch (currentStage) {
        case 2:
          dispatch(
            setPopupData({
              isOpen: true,
              popupType: "constructor",
              popupName: "Продолжаем 🔋",
              popupDescription: "Теперь укажите цену и срок выполнения",
            })
          );
          break;
        case 3:
          dispatch(
            setPopupData({
              isOpen: true,
              popupType: "constructor",
              popupName: "Последний шаг 📝",
              popupDescription: "Прикрепите 3 документа",
            })
          );
      }
    }
  };

  return (
    <>
      {isOpen && popupType === "constructor" && (
        <Popup>
          <div className={styles.constructor__popup__wrap}>
            <div className={styles.constructor__popup}>
              <p className={styles.popup__name}>{popupName}</p>
              <p className={styles.popup__description}>{popupDescription}</p>
              <section className={styles.create__section}>
                {currentStage >= 1 && currentStage <= 3 ? (
                  <ConstructorStage currentStage={currentStage} /> // and this needs in portfolio popup
                ) : null}
              </section>
              <div className={styles.popup__btns}>
                <Button
                  buttonText="Отменить"
                  buttonClass="create__btn__c"
                  onClick={() => {
                    closePopup();
                    changeStage("reset");
                  }}
                />
                <Button
                  buttonClass="create__btn"
                  buttonText="Далее"
                  onClick={changeStage}
                />
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default ConstructorPopup;
