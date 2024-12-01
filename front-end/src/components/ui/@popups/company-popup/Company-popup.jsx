import Popup from "../Popup";
import { useSelector } from "react-redux";

import styles from "./company-popup.module.scss";

const CompanyPopup = () => {
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popup.popupInfo
  );
  return (
    <>
      {isOpen && popupType === "company" && (
        <Popup>
          <div className={styles.company__popup}>
            <p className={styles.popup__name}>{popupName}</p>
            <p className={styles.popup__description}>{popupDescription}</p>
            <section className={styles.company__info}>

            </section>
          </div>
        </Popup>
      )}
    </>
  );
};
export default CompanyPopup;
