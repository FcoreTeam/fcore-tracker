import clsx from "clsx";
import TariffAdvantage from "./tariff-advantage/Tariff-advantage";

import styles from "./tariff.module.scss";
import Button from "@/components/ui/button/Button";

const Tariff = ({
  isPremium,
  tariffName,
  tariffDescription,
  tariffPrice,
  advantagesAmmount,
}) => {
  return (
    <div className={clsx(styles.tariff, isPremium ? styles.premium : "")}>
      <div className={styles.tariff__info}>
        <section className={styles.tariff__text__info}>
          <p className={styles.tariff__name}>{tariffName}</p>
          <p className={styles.tariff__description}>{tariffDescription}</p>
        </section>
        <div className={styles.tariff__price}>{tariffPrice} ₽ </div>
      </div>
      <section className={styles.advantages}>
        {advantagesAmmount === 3 ? (
          <>
            <TariffAdvantage
              advantageText='Доступ к функции "Созвон" '
              advantageImage="/icons/calls.svg"
            />
            <TariffAdvantage
              advantageText="Вывод средств в течение 24 часов "
              advantageImage="/icons/withdraw.svg"
            />
            <TariffAdvantage
              advantageText="Повышенный приоритет в поддержке "
              advantageImage="/icons/highpriority.svg"
            />
          </>
        ) : null}
        {advantagesAmmount === 4 ? (
          <>
            <TariffAdvantage
              advantageText='Все перечисленные приемущества тарифа "Старт для бизнеса"'
              advantageImage="/icons/tariffs.svg"
            />
            <TariffAdvantage
              advantageText="Доступ к видеозвонку и демонстрации экрана "
              advantageImage="/icons/camera.svg"
            />
            <TariffAdvantage
              advantageText="Вывод средств в течение 6 часов "
              advantageImage="/icons/sohighwithdraw.svg"
            />
          </>
        ) : null}
        {advantagesAmmount === 5 ? (
          <>
            <TariffAdvantage
              advantageText='Все перечисленные приемущества тарифа "Универсальный"'
              advantageImage="/icons/tariffs.svg"
            />
            <TariffAdvantage
              advantageText="Верификация аккаунта "
              advantageImage="/icons/verifytariff.svg"
            />
            <TariffAdvantage
              advantageText="Вывод средств в течение 4 часов "
              advantageImage="/icons/veryhighwithdraw.svg"
            />
            <TariffAdvantage
              advantageText='Добавление в раздел "Исполнители" '
              advantageImage="/icons/orders.svg"
            />
          </>
        ) : null}
      </section>
      <Button buttonText={tariffPrice + " " + "₽"} buttonClass="buy__btn" />
    </div>
  );
};
export default Tariff;
