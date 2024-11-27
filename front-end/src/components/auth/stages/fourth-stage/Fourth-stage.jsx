import { setAuthData } from "@/store/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import Image from "next/image";
import Input from "@/components/ui/input/Input";
import styles from "./fourth-stage.module.scss";

const FourthStage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const formatInput = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3], match[4]].filter(Boolean).join(" ");
    }
    return value;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatInput(e.target.value);
    setInputValue(formattedValue);
    const cardNumber = formattedValue.replace(/\s/g, "");
    dispatch(setAuthData({ cardNumber }));
  };

  return (
    <section className={styles.fourth__stage}>
      <div className={styles.left__section}>
        <div className={styles.card__checker}>
          <Input
            inputPlaceholder="Введите номер карты"
            inputClass="card__input"
            value={inputValue}
            onChange={handleInputChange}
            isTextArea={false}
            length={19}
          />
          {inputValue.startsWith("22") ||
          inputValue.startsWith("4") ||
          inputValue.startsWith("5") ? (
            <Image
              src={
                inputValue.startsWith("22")
                  ? "/icons/mir.png"
                  : inputValue.startsWith("4")
                  ? "/icons/visa.svg"
                  : inputValue.startsWith("5")
                  ? "/icons/mastercard.png"
                  : null
              }
              width={
                inputValue.startsWith("4")
                  ? 40
                  : inputValue.startsWith("5")
                  ? 40
                  : 60
              }
              height={
                inputValue.startsWith("4")
                  ? 40
                  : inputValue.startsWith("5")
                  ? 40
                  : 60
              }
              alt="MIR"
              className={clsx(
                styles.card__image,
                inputValue.startsWith("4")
                  ? styles.visa
                  : inputValue.startsWith("5")
                  ? styles.mastercard
                  : null
              )}
            />
          ) : null}
        </div>
        <div className={styles.card__checker}>
          <Input
            inputPlaceholder="Введите Ф.И.О носителя"
            inputClass="card__input"
            isTextArea={false}
          />
        </div>
      </div>
      <div className={styles.right__section}>
        <Input inputType="checkbox" inputClass="checkbox" />
        <p className={styles.ofert__text}>
          Вводя платежную информацию, я соглашаюсь с условиями оферты.
          <a href=""> Подробнее</a>
        </p>
      </div>
    </section>
  );
};

export default FourthStage;
