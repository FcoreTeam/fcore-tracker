"use client";

import { useSelector } from "react-redux";
import { useState } from "react";

import Popup from "../Popup";

import styles from "./payment-popup.module.scss";
import PaymentType from "./payment-type/Payment-type";
import Input from "../../input/Input";
import Button from "../../button/Button";

const PaymentPopup = () => {
  const [choosenType, setChoosenType] = useState("");
  const [isValidate, setValidateData] = useState(false)

  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );
  const { popupName, popupDescription } = useSelector(
    (state) => state.popups.popupInfo
  );

  const setPaymentType = (type) => {
    setChoosenType(type);
  };

  return (
    <>
      {isOpen && popupType === "payment" && (
        <Popup>
          <div className={styles.payment__popup__wrap}>
            <section className={styles.payment__popup}>
              <p className={styles.payment__popup__title}>{popupName}</p>
              <p className={styles.payment__popup__description}>
                {popupDescription}
              </p>
              <div className={styles.payment__type}>
                <PaymentType
                  paymentName="Оплата картой"
                  paymentAlt="card"
                  paymentImage="/icons/card.svg"
                  imageWidth={30}
                  imageHeight={30}
                  paymentOnclick={() => setPaymentType("card")}
                  isChoosen={choosenType === "card" ? "choosen" : ""}
                />
                <PaymentType
                  paymentName="По СБП"
                  paymentAlt="sbp"
                  paymentImage="/icons/sbp.png"
                  imageWidth={30}
                  imageHeight={30}
                  paymentOnclick={() => setPaymentType("sbp")}
                  isChoosen={choosenType === "sbp" ? "choosen" : ""}
                />
                <PaymentType
                  paymentName="Через SberPay"
                  paymentAlt="sberpay"
                  paymentImage="/icons/sberpay.png"
                  imageWidth={65}
                  imageHeight={30}
                  paymentOnclick={() => setPaymentType("sberpay")}
                  isChoosen={choosenType === "sberpay" ? "choosen" : ""}
                />
                <PaymentType
                  paymentName="Наличными"
                  paymentAlt="cash"
                  paymentImage="/icons/cash.svg"
                  imageWidth={30}
                  imageHeight={30}
                  paymentOnclick={() => setPaymentType("cash")}
                  isChoosen={choosenType === "cash" ? "choosen" : ""}
                />
              </div>
              <p className={styles.email__title}>Введите почту</p>
              <Input
                inputPlaceholder="Для чека"
                inputClass="email__input"
                inputType="email"
                length={35}
              />
              <Button
                buttonText="Оплатить: 25000 ₽"
                buttonClass="payment__btn"
              />
            </section>
          </div>
        </Popup>
      )}
    </>
  );
};
export default PaymentPopup;
