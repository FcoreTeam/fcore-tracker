import clsx from "clsx";

import Image from "next/image";

import styles from "./personal-controller.module.scss";

const PersonalController = ({
  onClick,
  controllerName,
  controllerImg,
  activeClass,
}) => {
  return (
    <div
      className={clsx(
        styles.personal__controller,
        activeClass ? styles.active : ""
      )}
      onClick={onClick}
    >
      <Image
        src={controllerImg}
        alt="img"
        width={30}
        height={30}
        className={styles.controller__img}
      />
      <p className={styles.controller__name}>{controllerName}</p>
    </div>
  );
};
export default PersonalController;
