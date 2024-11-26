import React, { useState, useEffect } from "react";
import Input from "@/components/ui/input/Input";
import { useSelector } from "react-redux";
import styles from "./second-stage.module.scss";
import Button from "@/components/ui/button/Button";

const SecondStage = () => {
  const { email } = useSelector((state) => state.auth);
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [time, setTime] = useState(60);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsTimerActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      document.getElementById(`code-input-${index - 1}`).focus();
    }
  };

  const resetTimer = () => {
    setTime(60);
    setIsTimerActive(true);

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsTimerActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  };

  return (
    <div className={styles.second__stage}>
      <p className={styles.second__stage__email}>
        Введите код с почты: {email}
      </p>
      <div className={styles.code__place}>
        {code.map((digit, index) => (
          <Input
            key={index}
            id={`code-input-${index}`}
            inputClass="code__input"
            length={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputType="number"
          />
        ))}
      </div>
      {isTimerActive ? (
        <p className={styles.next__code}>
          <span>в течении</span>
          {formatTime(time)}
        </p>
      ) : (
        <div className={styles.btn__wrap}>
          <Button
            buttonText="Отправить код заново"
            buttonClass="resend__code"
            buttonImage={false}
            onClick={resetTimer}
          />
        </div>
      )}
    </div>
  );
};

export default SecondStage;
