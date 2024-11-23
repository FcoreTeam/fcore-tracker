import clsx from "clsx";

import styles from "./button.module.scss";

const Button = ({
  buttonText,
  buttonClass,
  isButtonImage,
  buttonImage,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.button, styles[buttonClass])}
      onClick={onClick}
    >
      {buttonText}
      {isButtonImage ? <img src={buttonImage} alt="" /> : null}
    </button>
  );
};
export default Button;
