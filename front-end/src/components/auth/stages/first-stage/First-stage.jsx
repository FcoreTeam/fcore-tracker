import Input from "@/components/ui/input/Input";

import { useRef } from "react";


const FirstStage = ({ isLogin }) => {

  let emailValue = useRef(null)

  
  return (
    <>
      <Input inputClass="auth__input" inputPlaceholder="Введите почту" inputRef={emailValue} />
      <Input
        inputClass="auth__input"
        inputPlaceholder="Введите имя пользователя"
      />
      <Input inputClass="auth__input" inputPlaceholder="Введите пароль" />
      {!isLogin ? (
        <Input inputClass="auth__input" inputPlaceholder="Повторите пароль" />
      ) : null}
    </>
  );
};

export default FirstStage;
