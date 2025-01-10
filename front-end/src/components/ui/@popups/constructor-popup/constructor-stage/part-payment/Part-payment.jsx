import { useRef } from "react";
import Input from "@/components/ui/input/Input";
import styles from "./part-payment.module.scss";
import Button from "@/components/ui/button/Button";

const PartPayment = ({ setValidation }) => {
  const stepNameRef = useRef(null);
  const stepPriceRef = useRef(null);
  const stepPercentRef = useRef(null);

  const addStage = () => {
    const stepName = stepNameRef.current.value;
    const stepPrice = parseFloat(stepPriceRef.current.value);
    const stepPercent = parseInt(stepPercentRef.current.value);

    setValidation((prev) => ({
      ...prev,
      orderSteps: [
        ...prev.orderSteps,
        {
          stepName,
          stepPrice,
          stepPercent,
        },
      ],
    }));
    stepNameRef.current.value = "";
    stepPriceRef.current.value = "";
    stepPercentRef.current.value = "";
  };

  return (
    <div className={styles.payment__part}>
      <Input
        inputPlaceholder="Название этапа"
        inputClass="part__input"
        inputRef={stepNameRef}
      />
      <Input
        inputPlaceholder="Стоимость"
        inputClass="part__input"
        inputRef={stepPriceRef}
      />
      <Input
        inputPlaceholder="Процент работы"
        inputClass="part__input"
        length={2}
        inputRef={stepPercentRef}
      />
      <Button
        buttonImage={true}
        buttonClass="create__btn__p"
        onClick={addStage}
      />
    </div>
  );
};

export default PartPayment;