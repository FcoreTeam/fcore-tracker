import Input from "@/components/ui/input/Input";

import styles from "./fifth-stage.module.scss";

const FifthStage = () => {
  return (
    <section className={styles.fifth__stage}>
      <div className={styles.checkbox__section}>
        <Input inputType="checkbox" inputClass="checkbox" />
        <p className={styles.ofert__text}>
          Регистрируясь на сайте, я соглашаюсь с пользовательским соглашением
          <a href=""> Подробнее</a>
        </p>
      </div>
      <div className={styles.checkbox__section}>
        <Input inputType="checkbox" inputClass="checkbox" />
        <p className={styles.ofert__text}>
          Регистрируясь на сайте, я соглашаюсь с политикой конфенденциальности
          <a href=""> Подробнее</a>
        </p>
      </div>
    </section>
  );
};
export default FifthStage;
