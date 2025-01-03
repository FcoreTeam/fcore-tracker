import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Popup from "../Popup";
import { createOrder } from "@/store/slices/ordersSlice";
import Button from "../../button/Button";
import { setPopupData } from "@/store/slices/popupsSlice";
import ConstructorStage from "./constructor-stage/Constructor-stage";

import styles from "./constructor-popup.module.scss";

const ConstructorPopup = () => {
  const dispatch = useDispatch();
  let [currentStage, setCurrentStage] = useState(1);
  let [validation, setValidation] = useState({
    orderName: "",
    orderDescription: "",
    orderPrice: "",
    orderDate: "",
    orderDocs: [],
  });
  let [stageHandle, setStageHandle] = useState(false);
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
    setStageHandle(true);
    if (eventType === "reset") {
      setCurrentStage(1);
    } else {
      if (
        (currentStage === 1 &&
          validation.orderName.length !== 0 &&
          validation.orderDescription.length !== 0) ||
        (currentStage === 2 && validation.orderPrice.length !== 0)
      ) {
        setCurrentStage(++currentStage);
      }

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
          setStageHandle(false);
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
  const handleCreateOrder = () => {
    setCurrentStage(1);
    // const generateTrackCode = () => {
    //   let trackcode = Math.random().toString(36).substr(2, 9);
    //   return trackcode;
    // };
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
    dispatch(
      createOrder({
        orderName: validation.orderName,
        orderPrice: validation.orderPrice,
        // orderTrackcode: generateTrackCode,
      })
    );
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
                  <ConstructorStage
                    stageHandle={stageHandle}
                    currentStage={currentStage}
                    validation={validation}
                    setValidation={setValidation}
                  />
                ) : null}
              </section>
              <div className={styles.popup__btns}>
                <Button
                  buttonText="Отменить"
                  buttonClass="create__btn__c"
                  onClick={() => {
                    closePopup();
                    changeStage("reset");
                    setValidation({
                      orderName: "",
                      orderDescription: "",
                      orderPrice: "",
                      orderDate: "",
                      orderDocs: [],
                    });
                  }}
                />
                <Button
                  buttonClass="create__btn"
                  buttonText={currentStage === 3 ? "Создать" : "Далее"}
                  onClick={currentStage === 3 ? handleCreateOrder : changeStage}
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
