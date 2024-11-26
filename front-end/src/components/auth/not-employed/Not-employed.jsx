import clsx from "clsx";

import FirstStage from "../stages/first-stage/First-stage";
import SecondStage from "../stages/second-stage/Second-stage";

import styles from "./not-employed.module.scss";
import ThirdStage from "../stages/third stage/Third-stage";

const NotEmployed = ({ isLogin, isNext }) => {
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
            ? "3. Заполните информацию о себе"
            : isNext === 4
            ? "4. Заполните Банковскую информацию"
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
      {!isLogin && isNext === 2 ? ( // Условие для отображения SecondStage
        <SecondStage />
      ) : null}
      {!isLogin && isNext === 3 ? ( // Условие для отображения SecondStage
        <ThirdStage />
      ) : null}
    </div>
  );
};

export default NotEmployed;
