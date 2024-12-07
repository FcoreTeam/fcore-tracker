import { useSelector, useDispatch } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";

import SettingsStage from "./settings-stage/Settings-stage";
import AuthNotification from "./settings-stage/auth-notification/Auth-notification";

import styles from "./settings.module.scss";

const Settings = () => {
  const dispatch = useDispatch();
  const { secondFA } = useSelector((state) => state.auth.otherInfo);

  const openSettingPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "settings",
        popupName: "Двухфакторная аутентификация 🛡️",
        popupDescription: "Придумайте PIN код",
      })
    );
  };

  return (
    <div className={styles.settings}>
      {!secondFA ? (
        <AuthNotification
          notifType="2FA"
          notifTitle="Защитите свой аккаунт"
          notifDescription="Просто подключив двухфакторную аутентификацию"
          notifOnClick={openSettingPopup}
        />
      ) : (
        ""
      )}
      <SettingsStage settingStage="auth" />
      <SettingsStage settingStage="personal" />
      <SettingsStage settingStage="payment-info" />
    </div>
  );
};
export default Settings;
