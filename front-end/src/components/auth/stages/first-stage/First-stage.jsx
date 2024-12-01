import Input from "@/components/ui/input/Input";

const FirstStage = ({ isLogin }) => {
  return (
    <>
      <Input inputClass="auth__input" inputPlaceholder="Введите почту" />
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
