import AuthSettings from "./auth-settings/Auth-settings";
import PaymentInfo from "./payment-info/Payment-info";
import PersonalSettings from "./personal-settings/Personal-settings";
import styles from "./settings-stage.module.scss";

const SettingsStage = ({ settingStage, secondFA }) => {
  return (
    <div className={styles.settings__stage}>
      {settingStage === "auth" ? (
        <AuthSettings />
      ) : settingStage === "personal" ? (
        <PersonalSettings />
      ) : settingStage === "payment-info" ? (
        <PaymentInfo />
      ) : null}
    </div>
  );
};

export default SettingsStage;