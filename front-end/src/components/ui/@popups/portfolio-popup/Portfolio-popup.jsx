import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Popup from "../Popup";

import Button from "../../button/Button";
import PortfolioStage from "./portfolio-stages/Portfolio-stage";
import { setPopupData } from "@/store/slices/popupsSlice";
import { addWork } from "@/store/slices/portfolioSlice";

import styles from "./portfolio-popup.module.scss";

const PortfolioPopup = () => {
  const dispatch = useDispatch();
  let [currentStage, setCurrentStage] = useState(1);
  let [uploadedMedia, setUploadedMedia] = useState([]);
  let [generalOrderInfo, setGeneralOrderInfo] = useState({
    workName: "",
    workDescription: "",
    workActivity: "",
  });
  let [stageHandle, setStageHandle] = useState(false);
  const { popupType, isOpen } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );

  const changeStep = () => {
    if (
      (currentStage === 1 &&
        generalOrderInfo.workName.length !== 0 &&
        generalOrderInfo.workDescription.length !== 0 &&
        generalOrderInfo.workActivity.length !== 0) ||
      (currentStage === 2 && uploadedMedia.length !== 0)
    ) {
      setCurrentStage(++currentStage);
      setStageHandle(false);
      
    } else {
      setStageHandle(true);
    }
    console.log(currentStage)
    switch (currentStage) {
      case 2:
        dispatch(
          setPopupData({
            isOpen: true,
            popupType: "portfolio",
            popupName: "Загрузите материалы вашей работы 📁",
            popupDescription: "Чтобы показать, на что вы способны.",
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

  const addPortfolioWork = () => {
    dispatch(
      addWork({
        workName: generalOrderInfo.workName,
        workDescription: generalOrderInfo.workDescription,
        workActivity: generalOrderInfo.workActivity,
        workPhotos: uploadedMedia,
      })
    );
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
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
                  <PortfolioStage
                    currentStage={1}
                    setGeneralOrderInfo={setGeneralOrderInfo}
                    generalOrderInfo={generalOrderInfo}
                    stageHandle={stageHandle}
                  />
                ) : currentStage === 2 ? (
                  <PortfolioStage
                    currentStage={2}
                    setUploadedMedia={setUploadedMedia}
                    uploadedMedia={uploadedMedia}
                    stageHandle={stageHandle}
                  />
                ) : currentStage === 3 ? (
                  <PortfolioStage currentStage={3} />
                ) : null}
              </section>
              <Button
                buttonText={currentStage === 3 ? "Добавить" : "Следующий шаг"}
                isButtonImage={false}
                buttonClass="close__btn"
                onClick={
                  currentStage === 3
                    ? () => {
                        addPortfolioWork();
                        setCurrentStage(1);
                        setUploadedMedia([]);
                        setGeneralOrderInfo({
                          workName: "",
                          workDescription: "",
                          workActivity: "",
                        });
                      }
                    : changeStep
                }
              />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default PortfolioPopup;
