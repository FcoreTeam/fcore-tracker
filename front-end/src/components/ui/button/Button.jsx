import clsx from "clsx";
import Image from "next/image";

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
      {isButtonImage ? (
        <Image
          src={buttonImage}
          width={30}
          height={30}
          alt="img"
          className={styles.image}
        />
      ) : null}
    </button>
  );
};
export default Button;
