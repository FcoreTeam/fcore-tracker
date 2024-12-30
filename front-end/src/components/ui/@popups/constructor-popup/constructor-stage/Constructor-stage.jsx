import Input from "@/components/ui/input/Input";

import styles from "./constructor-stage.module.scss";

const ConstructorStage = ({ currentStage }) => {
  return (
    <div className={styles.constructor__stage}>
      {currentStage === 1 ? (
        <div>
          <Input
            inputPlaceholder="Введите название заказа"
            inputClass="create__input"
          />
          <Input
            inputPlaceholder="Введите краткое описание заказа"
            inputClass="create__input__h"
            isTextArea={true}
          />
        </div>
      ) : currentStage === 2 ? (
        <Input
          inputPlaceholder="Введите стоимость выполнения"
          inputClass="create__input"
        />
      ) : currentStage === 3 ? (
        <></>
      ) : null}
    </div>
  );
};
export default ConstructorStage;
