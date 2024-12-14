import { useSelector } from "react-redux";

import Popup from "../Popup";

import styles from "./portfolio-popup.module.scss";

const PortfolioPopup = () => {
  const { popupType, isOpen } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );

  return (
    <>
      {isOpen && popupType === "portfolio" && (
        <Popup>
          <div className={styles.popup__wrap}>
            <div className={styles.portfolio__popup}>
              <p className={styles.popup__name}>{popupName}</p>
              <p className={styles.popup__description}>{popupDescription}</p>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default PortfolioPopup;
