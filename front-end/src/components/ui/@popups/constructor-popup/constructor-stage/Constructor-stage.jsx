import Input from "@/components/ui/input/Input";
import clsx from "clsx";
import ConstructorUploader from "./constructor-uploader/Constructor-uploader";
import { useRef } from "react";
import styles from "./constructor-stage.module.scss";
import PartPayment from "./part-payment/Part-payment";
import PaymentStage from "./payment-stage/Payment-stage";

const ConstructorStage = ({
  currentStage,
  setValidation,
  validation,
  stageHandle,
  setPaymentType,
  paymentType,
}) => {
  const paymentRef = useRef(null);

  const handleInputChange = (e, field) => {
    if (paymentType === "full") {
      setValidation((prev) => ({ ...prev, [field]: e.target.value }));
    } 
    // else if (paymentType === "step") {

    //     const totalPrice = validation.orderSteps.reduce(
    //       (sum, step) => sum + step.stepPrice,
    //       0
    //     );
    //     console.log(totalPrice)
    //     setValidation((prev) => ({ ...prev, [field]: e.target.value, orderPrice: totalPrice }));
    //   }
    
    if (field === "orderPrice") {
      paymentRef.current = e.target.value;
    }
  };

  const renderStage1 = () => (
    <div>
      <Input
        inputPlaceholder="Введите название продукта"
        inputClass="create__input"
        validateClass={stageHandle && !validation.orderName ? "incorrect" : ""}
        onChange={(e) => handleInputChange(e, "orderName")}
      />
      <Input
        inputPlaceholder="Введите краткое описание заказа"
        inputClass="create__input__h"
        isTextArea={true}
        validateClass={
          stageHandle && !validation.orderDescription ? "incorrect" : ""
        }
        onChange={(e) => handleInputChange(e, "orderDescription")}
      />
    </div>
  );

  const renderStage2 = () => {
    const totalPrice = paymentRef.current
      ? Math.floor(paymentRef.current * 0.95)
      : 0;
    const shouldHidePartPayment = () => {
      const totalPercent = validation.orderSteps.reduce(
        (sum, step) => sum + step.stepPercent,
        0
      );
      return totalPercent === 100 || validation.orderSteps.length === 5;
    };
    return (
      <>
        {paymentType === "step" ? (
          <></>
        ) : (
          <Input
            inputPlaceholder="Введите стоимость выполнения"
            inputClass="create__input"
            validateClass={
              stageHandle && !validation.orderPrice ? "incorrect" : ""
            }
            inputRef={paymentRef}
            onChange={(e) => handleInputChange(e, "orderPrice")}
          />
        )}

        <div className={styles.payment__editor}>
          {["full", "step"].map((type) => (
            <p
              key={type}
              className={clsx(
                styles.payment__type,
                paymentType === type && styles.active
              )}
              onClick={() => setPaymentType(type)}
            >
              {type === "full" ? "Постоплата" : "По частям"}
            </p>
          ))}
        </div>
        {paymentType === "full" && (
          <section className={styles.post__pay}>
            <div className={styles.payemnt__price}>
              <div className={styles.price__wrap}>
                <p className={styles.price}>
                  Итого: <span>{totalPrice} ₽</span>
                </p>
                <p className={styles.price__info}>Комиссия 5%</p>
              </div>
            </div>
          </section>
        )}
        {paymentType === "step" && (
          <>
            <div className={styles.payment__stages}>
              {validation.orderSteps.map((item, index) => (
                <PaymentStage
                  key={index}
                  stageName={`${index + 1}. ${item.stepName}`}
                  stagePrice={item.stepPrice}
                  stagePercent={item.stepPercent}
                />
              ))}
            </div>

            {!shouldHidePartPayment() && (
              <PartPayment setValidation={setValidation} />
            )}
          </>
        )}
      </>
    );
  };

  const renderStage3 = () => (
    <>
      {[
        "Загрузите условия заказа",
        "Загрузите NDA (необязательно)",
        "Загрузите договор (необязательно)",
      ].map((text) => (
        <ConstructorUploader key={text} fileText={text} />
      ))}
    </>
  );

  return (
    <div className={styles.constructor__stage}>
      {currentStage === 1 && renderStage1()}
      {currentStage === 2 && renderStage2()}
      {currentStage === 3 && renderStage3()}
    </div>
  );
};

export default ConstructorStage;
