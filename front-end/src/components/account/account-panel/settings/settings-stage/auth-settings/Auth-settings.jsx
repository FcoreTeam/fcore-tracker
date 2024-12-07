import Setting from "../setting/Setting";

import styles from "./auth-settings.module.scss";

const AuthStage = () => {
  return (
    <div className={styles.auth__stage}>
      <p className={styles.stage__title}>1. Настройки авторизации</p>
      <section className={styles.settings}>
        <Setting
          settingName="Электронная почта"
          settingParam="example@mail.ru"
          settingBtn="Изменить"
        />
        <Setting
          settingName="Пароль"
          settingParam="********"
          settingBtn="Изменить"
        />
        <Setting
          settingName="Имя пользователя"
          settingParam="@username43141"
          settingBtn="Изменить"
        />
      </section>
    </div>
  );
};
export default AuthStage;
