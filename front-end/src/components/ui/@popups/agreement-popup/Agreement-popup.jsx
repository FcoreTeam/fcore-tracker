import { useSelector } from "react-redux";

import Popup from "../Popup";

import styles from "./agreement-popup.module.scss";

const AgreementPopup = () => {
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );

  return (
    <>
      {isOpen && popupType === "agreement" && (
        <Popup>
          <div className={styles.agreement__popup__wrap}>
            <div className={styles.agreement__popup}>
              <p className={styles.popup__name}></p>
              <p className={styles.popup__description}></p>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default AgreementPopup;
