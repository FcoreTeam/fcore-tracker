import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import styles from "./personal-settings.module.scss";

const PersonalSettings = () => {
  return (
    <div className={styles.settings__stage}>
      <p className={styles.stage__title}>2. Персональные настройки</p>
      <section className={styles.settings}>
        <div className={styles.input__controll}>
          <Input inputClass="change__input" inputPlaceholder="Введите Ф.И.О" />
          <Button buttonText="Изменить" buttonClass="accept__btn" />
        </div>

        <div className={styles.input__controll}>
          <Input
            inputClass="auth__input__hc"
            isTextArea={true}
            inputPlaceholder="Расскажите о себе"
          />
          <Button buttonText="Изменить" buttonClass="accept__btn" />
        </div>
        <div className={styles.input__controll}>
          <Input
            inputClass="change__input"
            inputPlaceholder="Ваша деятельность"
          />
           <Button buttonText="Изменить" buttonClass="accept__btn" />
        </div>
      </section>
    </div>
  );
};
export default PersonalSettings;
