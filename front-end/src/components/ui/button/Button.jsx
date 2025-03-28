import clsx from "clsx";
import Image from "next/image";

import styles from "./button.module.scss";

const Button = ({
  buttonText,
  buttonClass,
  isButtonImage,
  buttonImage,
  onClick,
  top
}) => {
  return (
    <button
      className={clsx(styles.button, styles[buttonClass])}
      onClick={onClick}
      style={{top: `${top}px`}}
    >
      {buttonText}
      {isButtonImage ? (
        <Image
          src={buttonImage}
          width={20}
          height={20}
          alt="img"
          className={styles.image}
        />
      ) : null}
    </button>
  );
};
export default Button;
