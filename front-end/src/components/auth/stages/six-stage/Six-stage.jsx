import { useState } from "react";
import Input from "@/components/ui/input/Input";

import styles from "./six-stage.module.scss";

const SixStage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value) => {
    // Убираем все символы, кроме цифр
    const digits = value.replace(/\D/g, "");
    const formatted = digits.replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "+$1 $2 $3 $4 $5"
    );
    return formatted.trim();
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setPhoneNumber(formattedValue);
  };

  return (
    <section className={styles.six__stage}>
      <div className={styles.six__stage__left}>
        <Input
          inputClass="auth__input"
          inputPlaceholder="Введите Ф.И.О"
          length={50}
        />
        <Input
          inputClass="auth__input"
          inputPlaceholder="Номер телефона"
          length={50}
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        <Input
          inputClass="auth__input"
          inputPlaceholder="Введите ИНН"
          length={50}
        />
      </div>
      <div className={styles.six__stage__right}>
        {" "}
        <div className={styles.checkbox}>
          <Input inputType="checkbox" inputClass="checkbox" />
          <p className={styles.ofert__text}>
            Вводя персональные данные, я соглашаюсь с условиями регистрации самозанятого
            <a href=""> Подробнее</a>
          </p>
        </div>
        <div className={styles.checkbox}>
          <Input inputType="checkbox" inputClass="checkbox" />
          <p className={styles.ofert__text}>
            Вводя персональную информацию, я соглашаюсь с условиями обработки
            политикой конфинденциальности.
            <a href=""> Подробнее</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SixStage;
