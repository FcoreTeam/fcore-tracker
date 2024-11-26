import Input from "@/components/ui/input/Input";
import styles from "./third-stage.module.scss";

const ThirdStage = () => {
  return (
    <section className={styles.third__page}>
      <Input
        inputClass="auth__input"
        inputPlaceholder="Введите Ф.И"
        length={50}
      />
      <Input inputClass="auth__input__h" isTextArea={true} inputPlaceholder="Расскажите о себе" />
    </section>
  );
};
export default ThirdStage;
