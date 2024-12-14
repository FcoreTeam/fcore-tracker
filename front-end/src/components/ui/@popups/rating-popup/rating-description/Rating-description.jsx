import styles from "./rating-description.module.scss";

const RatingDescription = () => {
  return (
    <div className={styles.rating__description}>
      <p className={styles.rating__title}>1. Рейтинг - это</p>
      <section className={styles.rating__info}>
        Возможность проявить себя на нашей платформе. Показать клиентам, что вы
        надёжный исполнитель. Получить его не так просто, вам потребуются
        усилия.
      </section>
      <p className={styles.rating__title}>2. Какие виды рейтинга бывают?</p>
      <section className={styles.rating__info}>
        Рейтинг делится на 5 основных категорий:
        <br />
        <br />- <span className={styles.bronze}>Бронзовый</span>
        <br />- <span className={styles.silver}>Серебрянный</span>
        <br />- <span className={styles.gold}>Золотой</span>
        <br />- <span className={styles.platinum}>Платиновый</span>
        <br />- <span className={styles.rubin}>Рубиновый</span>
      </section>
      <p className={styles.rating__title}>3. Как его получить?</p>
      <section className={styles.rating__info}>
        Нужно выполнить определнные условия на сайте и просто добросовестно
        относиться к выполнению заказов.
      </section>
    </div>
  );
};
export default RatingDescription;
