import { useSelector } from "react-redux";

import Setting from "../setting/Setting";

import styles from "./auth-settings.module.scss";

const AuthStage = () => {

  const {username} = useSelector((state) => state.auth.firstStage)

  return (
    <div className={styles.auth__stage}>
      <p className={styles.stage__title}>1. Настройки авторизации</p>
      <section className={styles.settings}>
        <Setting
          settingName="Электронная почта"
          settingParam="example@mail.ru"
          settingBtn="Изменить"
          settingIcon="/icons/email.svg"
          settingBtnImage="/icons/edit.svg"
        />
        <Setting
          settingName="Пароль"
          settingParam="********"
          settingBtn="Изменить"
          settingIcon="/icons/password.svg"
          settingBtnImage="/icons/edit.svg"
        />
        <Setting
          settingName="Имя пользователя"
          settingParam={`@${username}`}
          settingBtn="Изменить"
          settingIcon="/icons/profile.svg"
          settingBtnImage="/icons/edit.svg"
        />
      </section>
    </div>
  );
};
export default AuthStage;
