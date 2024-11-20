"use client"

import { useState } from "react";
import { useDispatch } from "react-redux";

import { setPopupData } from "@/store/slices/popupsSlice";

import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";

import styles from "./page.module.scss";

const Main = () => {
  let validate = false;
  const dispatch = useDispatch();
  const [menuState, setMenuState] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const setMenuUi = () => {
    setMenuState(!menuState);
  };

  const formatInput = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-");
    }
    return value;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatInput(e.target.value);
    setInputValue(formattedValue);
  };

  const setWarningPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "warning",
        popupName: "Произошла ошибка ❌",
        popupDescription: "Данный трек-код не действителен",
      })
    );
  };
  if (!validate && !!menuState) {
    setWarningPopup();
  }

  return (
    <main className={styles.main}>
      <div className={styles.main__information}>
        <div className={styles.main__text}>
          <div className={styles.live__wrap}>
            <p className={styles.main__title}>
              Fcore<span>Tracker</span>
            </p>
            <div className={styles.live}></div>
          </div>
          <p className={styles.main__description}>
            Отслеживайте свои проекты в реальном времени
          </p>
        </div>

        {menuState ? (
          <div className={styles.menu__check}>
            <Input
              inputClass="menu__input"
              inputType="text"
              inputPlaceholder="XXXX-YYYY-ZZZZ"
              value={inputValue}
              onChange={handleInputChange}
              validateClass={validate ? null : "incorrect"}
            />
            <Button
              onClick={null}
              buttonText="Проверить"
              isButtonImage={false}
              buttonClass="check__btn"
            />
          </div>
        ) : (
          <Button
            onClick={setMenuUi}
            buttonText="Введите трек-код"
            isButtonImage={false}
            buttonClass="menu__btn"
          />
        )}
      </div>
    </main>
  );
};

export default Main;
