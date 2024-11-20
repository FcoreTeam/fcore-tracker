import { useSelector } from "react-redux";

import Popup from "../Popup";

import styles from "./warning-popup.module.scss";

const WarningPopup = () => {
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );
  return (
    <Popup>
      <div className={styles.warning__popup}>
        <p className={styles.warning__title}>{popupName}</p>
        <p className={styles.warning__description}>{popupDescription}</p>
      </div>
    </Popup>
  );
};
export default WarningPopup;
