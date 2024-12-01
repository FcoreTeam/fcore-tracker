import Input from "@/components/ui/input/Input";
import styles from "./third-stage.module.scss";

const ThirdStage = ({ isSelfEmployed }) => {
  return (
    <section className={styles.third__page}>
      {!isSelfEmployed ? (
        <Input
          inputClass="auth__input"
          inputPlaceholder="Введите Ф.И"
          length={50}
        />
      ) : null}
      <Input
        inputClass="auth__input__h"
        isTextArea={true}
        inputPlaceholder="Расскажите о себе"
      />
      {isSelfEmployed ? (
        <Input
          inputClass="auth__input"
          inputPlaceholder="Сфера деятельности"
          length={50}
        />
      ) : null}
    </section>
  );
};
export default ThirdStage;
