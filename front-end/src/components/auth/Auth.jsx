"use client";

import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "../ui/button/Button"; // ui
import Registration from "./registration/Registration";
import Login from "./login/Login";
import AuthType from "./auth-type/Auth-type";

import styles from "./auth.module.scss";

const Auth = () => {
  const [choosenType, setChoosenType] = useState("not-employed");
  const [authPage, setAuthPage] = useState("registration");
  let [nextStage, setNextStage] = useState(1);

  const { cardNumber } = useSelector((state) => state.auth.fourthStage);
  const chooseAuthPage = () => {
    if (authPage === "registration") {
      setAuthPage("login");
    } else {
      setAuthPage("registration");
    }
  };

  const goNextStage = (type) => {
    if (type === "change-type") {
      setNextStage(1);
    } else {
      setNextStage(++nextStage);
    }
  };

  const chooseEmploymentType = (type) => {
    setChoosenType(type);
  };

  return (
    <section className={styles.auth__section}>
      <div className={styles.auth__wrap}>
        <p className={styles.auth__title}>
          {authPage === "registration" ? "Регистрация" : "Вход"}
        </p>
        <div className={styles.auth__description}>
          {authPage === "registration" ? (
            <p>
              Создать аккаунт просто, а <span>управлять проектами </span> ещё{" "}
              <span>проще!</span>
            </p>
          ) : (
            <p>
              Мы <span>рады видеть тебя</span> снова!
            </p>
          )}
        </div>
        <section className={styles.auth__type}>
          <AuthType
            authName="Не оформлен"
            isChoosen={choosenType === "not-employed" ? true : false}
            onClick={() => {
              chooseEmploymentType("not-employed");
              goNextStage("change-type");
            }}
          />
          <AuthType
            authName="Самозанятый"
            isChoosen={choosenType === "self-employed" ? true : false}
            onClick={() => {
              chooseEmploymentType("self-employed");
              goNextStage("change-type");
            }}
          />
          <AuthType
            authName="ИП"
            isChoosen={choosenType === "entrepreneur" ? true : false}
            onClick={() => chooseEmploymentType("entrepreneur")}
          />
          <AuthType
            authName="Компания"
            isChoosen={choosenType === "company" ? true : false}
            onClick={() => chooseEmploymentType("company")}
          />
        </section>
        <section className={styles.auth__page}>
          {authPage === "registration" ? (
            <Registration registartionType={choosenType} isNext={nextStage} />
          ) : (
            <Login loginType={choosenType} />
          )}
        </section>
      </div>
      <div className={styles.auth__btns}>
        <Button
          isButtonImage={false}
          buttonText={
            authPage === "registration"
              ? nextStage === 5 && choosenType === "not-employed"
                ? "Зарегистрироваться"
                : choosenType === "not-employed" &&
                  nextStage === 4 &&
                  cardNumber == ""
                ? "Заполнить позже"
                : "Далее"
              : "Вход"
          }
          buttonClass="auth__btn"
          onClick={
            authPage === "registration"
              ? nextStage === 5 && choosenType === "not-employed"
                ? null
                : goNextStage
              : null
          }
        />
        <p className={styles.or__text}>- Или -</p>
        <Button
          isButtonImage={false}
          buttonClass="auth__btn"
          buttonText={authPage === "registration" ? "Войти" : "Регистрация"}
          onClick={chooseAuthPage}
        />
      </div>
    </section>
  );
};
export default Auth;
