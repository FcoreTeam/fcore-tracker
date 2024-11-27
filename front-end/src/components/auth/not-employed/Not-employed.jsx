"use client";

import { useState } from "react";

import clsx from "clsx";

import FirstStage from "../stages/first-stage/First-stage";
import SecondStage from "../stages/second-stage/Second-stage";
import ThirdStage from "../stages/third stage/Third-stage";
import FourthStage from "../stages/fourth-stage/Fourth-stage";

import styles from "./not-employed.module.scss";
import FifthStage from "../stages/fifth-stage/Fifth-stage";

const NotEmployed = ({ isLogin, isNext }) => {
  const [authControll, setAuthControll] = useState(false);
  return (
    <div className={styles.type}>
      <p
        className={clsx(
          styles.type__title,
          isNext === 2 ? styles.center : null
        )}
      >
        {!isLogin &&
          (isNext === 1
            ? "1. Общая информация"
            : isNext === 2
            ? "Мы отправили вам письмо"
            : isNext === 3
            ? "3. Расскажите о себе"
            : isNext === 4
            ? "4. Заполните платежную информацию"
            : "5. Готово")}
      </p>
      {isNext === 4 ? (
        <p className={styles.optional__description}>
          требуется для вывода средств
        </p>
      ) : null}
      {isLogin || (isNext === 1 && !isLogin) ? (
        <FirstStage isLogin={isLogin} />
      ) : null}
      {!isLogin && isNext === 2 ? <SecondStage /> : null}
      {!isLogin && isNext === 3 ? <ThirdStage /> : null}
      {!isLogin && isNext === 4 ? <FourthStage /> : null}
      {!isLogin && isNext === 5 ? <FifthStage /> : null}
    </div>
  );
};

export default NotEmployed;
