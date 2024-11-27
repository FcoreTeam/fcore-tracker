import FirstStage from "../stages/first-stage/First-stage";
import SecondStage from "../stages/second-stage/Second-stage";
import ThirdStage from "../stages/third stage/Third-stage";
import FourthStage from "../stages/fourth-stage/Fourth-stage";
import SixStage from "../stages/six-stage/Six-stage";

import clsx from "clsx";

import styles from "./self-employmed.module.scss";

const SelfEmploymed = ({ isLogin, isNext }) => {
  return (
    <div className={styles.auth__type}>
      {isLogin ? (
        <section className={styles.type__login}></section>
      ) : (
        <section className={styles.type}>
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
                ? "3. Персональные данные"
                : isNext === 4
                ? "4. Расскажите о себе"
                : isNext === 5
                ? "5. Заполните платёжную информацию"
                : "6. Готово!")}
          </p>
        </section>
      )}

      {isNext === 4 ? (
        <p className={styles.optional__description}>
          требуется для вывода средств
        </p>
      ) : null}
      {isLogin || (isNext === 1 && !isLogin) ? (
        <FirstStage isLogin={isLogin} />
      ) : null}
      {!isLogin && isNext === 2 ? <SecondStage /> : null}
      {!isLogin && isNext === 3 ? <SixStage /> : null}
      {!isLogin && isNext === 4 ? <FourthStage /> : null}
      {!isLogin && isNext === 5 ? <FifthStage /> : null}
    </div>
  );
};
export default SelfEmploymed;
