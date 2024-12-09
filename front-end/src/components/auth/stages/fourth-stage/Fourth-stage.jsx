import { setAuthData, setBankData } from "@/store/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import clsx from "clsx";
import Image from "next/image";
import Input from "@/components/ui/input/Input";
import styles from "./fourth-stage.module.scss";
import Select from "@/components/ui/select/Select";

const bankData = [
  {
    name: "Сбер",
    color: "green",
    iconUrl: "/icons/sber.png",
  },
  {
    name: "ВТБ",
    color: "#2a6fb5",
    iconUrl: "/icons/vtb.png",
  },
  {
    name: "Альфа-Банк",
    color: "#c04141",
    iconUrl: "/icons/alfabank.png",
  },
  {
    name: "Т-Банк",
    color: "#ffdd2dd0",
    iconUrl: "/icons/tbank.png",
  },

  {
    name: "Совкомбанк",
    color: "#012e95c0",
    iconUrl: "/icons/sovkom.png",
  },

  {
    name: "Райффайзен Банк",
    color: "#dee04cd4",
    iconUrl: "/icons/raif.png",
  },

  {
    name: "Газпромбанк",
    color: "#4e89ccd4",
    iconUrl: "/icons/gazprombank.png",
  },
];

const FourthStage = ({ paymentType }) => {
  const [inputValue, setInputValue] = useState("");
  const [bankName, setBankName] = useState(bankData[0].name);
  const dispatch = useDispatch();
  let initials = useRef("")

  const formatInput = (value) => {
    const cleanedValue = value.replace(/\D/g, "");
    const match = cleanedValue.match(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (match) {
      return [match[1], match[2], match[3], match[4]].filter(Boolean).join(" ");
    }
    return value;
  };

  const handleInputChange = (e) => {
    const formattedValue = formatInput(e.target.value);
    setInputValue(formattedValue);
    const cardNumber = formattedValue.replace(/\s/g, "");
    dispatch(setAuthData({ cardNumber }));

    const bin = cardNumber.slice(0, 6); 
    const foundBank = bankData.find((bank) =>
      bank.prefixes.some((prefix) => bin.startsWith(prefix))
    );
    setBankName(foundBank ? foundBank.name : "");
  };

  const setPaymentInfo = (name) => {
    const cardInitials = initials.current.value;
    dispatch(
      setBankData({
        bankType: name,
        cardInitials: cardInitials
      })
    );
  };

  return (
    <section className={styles.fourth__stage}>
      <div
        className={clsx(
          styles.left__section,
          paymentType === "profile" ? styles.profile__section : ""
        )}
      >
        <div className={styles.card__checker}>
          <Input
            inputPlaceholder="Введите номер карты"
            inputClass={
              paymentType !== "profile" ? "card__input" : "card__input__p"
            }
            value={inputValue}
            onChange={handleInputChange}
            isTextArea={false}
            length={19}
          />
          {inputValue.startsWith("2") ||
          inputValue.startsWith("4") ||
          inputValue.startsWith("5") ? (
            <Image
              src={
                inputValue.startsWith("2")
                  ? "/icons/mir.png"
                  : inputValue.startsWith("4")
                  ? "/icons/visa.svg"
                  : inputValue.startsWith("5")
                  ? "/icons/mastercard.png"
                  : null
              }
              width={
                inputValue.startsWith("4") || inputValue.startsWith("5")
                  ? 40
                  : 60
              }
              height={
                inputValue.startsWith("4") || inputValue.startsWith("5")
                  ? 40
                  : 60
              }
              alt="Card Type"
              className={clsx(
                styles.card__image,
                inputValue.startsWith("4")
                  ? styles.visa
                  : inputValue.startsWith("5")
                  ? styles.mastercard
                  : null
              )}
            />
          ) : null}
        </div>
        <div className={styles.card__checker}>
          <Input
            inputPlaceholder="Введите Ф.И.О носителя"
            inputClass={
              paymentType !== "profile" ? "card__input" : "card__input__p"
            }
            isTextArea={false}
            onChange={() => {setPaymentInfo(bankName)}}
            inputRef={initials}
          />
          <Select
            value={bankName}
            setValue={(name) => {
              setBankName(name);
            }}
            setBank={(name) => {
              setPaymentInfo(name);
            }}
            options={bankData}
          />
        </div>
      </div>
      {paymentType === "profile" ? null : (
        <div className={styles.right__section}>
          <Input inputType="checkbox" inputClass="checkbox" />
          <p className={styles.ofert__text}>
            Вводя платежную информацию, я соглашаюсь с условиями оферты.
            <a href=""> Подробнее</a>
          </p>
        </div>
      )}
    </section>
  );
};

export default FourthStage;
