import Popup from "../Popup";
import { useSelector, useDispatch } from "react-redux";

import styles from "./settings-popup.module.scss";
import SecondStage from "@/components/auth/stages/second-stage/Second-stage";
import Button from "../../button/Button";
import { setPopupData } from "@/store/slices/popupsSlice";

const SettingsPopup = () => {
  const dispatch = useDispatch();
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
  return (
    <>
      {isOpen && popupType === "settings" && (
        <Popup>
          <div className={styles.settings__popup__wrap}>
            <div className={styles.settings__popup}>
              <p className={styles.popup__name}>{popupName}</p>
              <p className={styles.popup__description}>{popupDescription}</p>
              <SecondStage codeType="PIN" />
              <section className={styles.popup__btns}>
                <Button buttonText="Отменить" buttonClass="code__btn" onClick={closePopup} />
                <Button buttonText="Установить" buttonClass="code__btn" />
              </section>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default SettingsPopup;
