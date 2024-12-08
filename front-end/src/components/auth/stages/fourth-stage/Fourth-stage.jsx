import { setAuthData } from "@/store/slices/authSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
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
    prefixes: [
      "427600",
      "427601",
      "427602",
      "427603",
      "427604",
      "427605",
      "427606",
      "427607",
      "427608",
      "427609",
      "220000",
      "220001",
      "220002",
      "220003",
      "220004",
      "220005",
      "220006",
      "220007",
      "220008",
      "220009",
      "220010",
      "220011",
      "220012",
      "220013",
      "220014",
      "220015",
      "220016",
      "220017",
      "220018",
      "220019",
    ],
  },
  {
    name: "ВТБ",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "453200",
      "453201",
      "453202",
      "453203",
      "453204",
      "453205",
      "453206",
      "453207",
      "453208",
      "453209",
      "453210",
      "453211",
      "453212",
      "453213",
      "453214",
      "453215",
    ],
  },
  {
    name: "Альфа-Банк",
    color: "#c04141",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "401700",
      "401701",
      "401702",
      "401703",
      "401704",
      "401705",
      "401706",
      "401707",
      "401708",
      "401709",
      "401710",
      "401711",
      "401712",
      "401713",
      "401714",
      "401715",
    ],
  },
  {
    name: "Тинькофф Банк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "220000",
      "220001",
      "220002",
      "220003",
      "220004",
      "220005",
      "220006",
      "220007",
      "220008",
      "220009",
    ],
  },
  {
    name: "МКБ",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "423300",
      "423301",
      "423302",
      "423303",
      "423304",
      "423305",
      "423306",
      "423307",
      "423308",
      "423309",
    ],
  },
  {
    name: "Россельхозбанк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "423500",
      "423501",
      "423502",
      "423503",
      "423504",
      "423505",
      "423506",
      "423507",
      "423508",
      "423509",
    ],
  },
  {
    name: "Совкомбанк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "423700",
      "423701",
      "423702",
      "423703",
      "423704",
      "423705",
      "423706",
      "423707",
      "423708",
      "423709",
    ],
  },
  {
    name: "Российский Банк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: ["423900", "423901", "423902", "423903", "423904", "423905"],
  },
  {
    name: "Райффайзенбанк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: [
      "426000",
      "426001",
      "426002",
      "426003",
      "426004",
      "426005",
      "426006",
      "426007",
      "426008",
      "426009",
    ],
  },
  {
    name: "ВУЗ-банк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: ["426200", "426201", "426202"],
  },
  {
    name: "Газпромбанк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: ["426300", "426301", "426302"],
  },
  {
    name: "МТС Банк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: ["426400", "426401", "426402"],
  },
  {
    name: "Почта Банк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: ["426500", "426501", "426502"],
  },
  {
    name: "Озон Банк",
    color: "#000",
    iconUrl: "/icons/alfabank.png",
    prefixes: ["426600", "426601", "426602"],
  },
];

const FourthStage = ({ paymentType }) => {
  const [inputValue, setInputValue] = useState("");
  const [bankName, setBankName] = useState("aaaaaa");
  const dispatch = useDispatch();

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

    // Очищаем значение для поиска банка по номеру карты
    const bin = cardNumber.slice(0, 6); // Получаем первые 6 цифр (БИН)
    const foundBank = bankData.find((bank) =>
      bank.prefixes.some((prefix) => bin.startsWith(prefix))
    );
    setBankName(foundBank ? foundBank.name : "");
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
          />
          {/* <select name="" id="" className={styles.select__bank}>
            <option value="">Сбер</option>
            <option value="">Т-Банк</option>
            <option value="">ВТБ</option>
            <option value="">Совкомбанк</option>
            <option value="">Альфа-Банк</option>
            <option value="">Газпромбанк</option>
            <option value="">OZON-Банк</option>
            <option value="">Россельхозбанк</option>
            <option value="">Точка</option>
            <option value="">МТС банк</option>
            <option value="">Почта Банк</option>
          </select> */}
          <Select value={bankName} setValue={(name) => setBankName(name)} options={bankData} />
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
