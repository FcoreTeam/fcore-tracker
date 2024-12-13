import Tariff from "./tariff/Tariff";
import styles from "./tariffs.module.scss";

const Tariffs = () => {
  return (
    <div className={styles.tariffs}>
      <Tariff
        tariffName="Старт для бизнеса  📈"
        tariffDescription="Вам подойдет этот тариф, если ваше дело только развивается"
        tariffPrice={199}
        advantagesAmmount={3}
        ta
      />
      <Tariff
        tariffName="Универсальный 💰"
        tariffDescription="Золотая середина для вашего бизнеса!"
        tariffPrice={399}
        advantagesAmmount={4}
      />
      <Tariff
        tariffName="Для крупных дел 💯"
        isPremium={true}
        tariffDescription="Тариф для серьезных предпринимателей, с большими целями на будущее"
        tariffPrice={699}
        advantagesAmmount={5}
      />
    </div>
  );
};
export default Tariffs;
