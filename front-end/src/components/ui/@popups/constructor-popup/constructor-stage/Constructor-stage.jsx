import Input from "@/components/ui/input/Input";

import styles from "./constructor-stage.module.scss";

const ConstructorStage = ({
  currentStage,
  setValidation,
  validation,
  stageHandle,
}) => {
  const handleInputChange = (e, field) => {
    setValidation((prevstate) => ({
      ...prevstate,
      [field]: e.target.value,
    }));
  };

  return (
    <div className={styles.constructor__stage}>
      {currentStage === 1 ? (
        <div>
          <Input
            inputPlaceholder="Введите название заказа"
            inputClass="create__input"
            validateClass={
              stageHandle
                ? validation.orderName.length > 0
                  ? ""
                  : "incorrect"
                : null
            }
            onChange={(e) => handleInputChange(e, "orderName")}
          />
          <Input
            inputPlaceholder="Введите краткое описание заказа"
            inputClass="create__input__h"
            isTextArea={true}
            onChange={(e) => handleInputChange(e, "orderDescription")}
          />
        </div>
      ) : currentStage === 2 ? (
        <Input
          inputPlaceholder="Введите стоимость выполнения"
          inputClass="create__input"
          onChange={(e) => handleInputChange(e, "orderPrice")}
        />
      ) : currentStage === 3 ? (
        <></>
      ) : null}
    </div>
  );
};
export default ConstructorStage;
