import Image from "next/image";

import styles from "./setting.module.scss";
import Button from "@/components/ui/button/Button";

const Setting = ({
  settingIcon,
  settingName,
  settingParam,
  settingBtn,
  settingBtnImage,
}) => {
  return (
    <div className={styles.setting}>
      <section className={styles.left__info}>
        <Image
          src={settingIcon}
          alt="ico"
          width={33}
          height={33}
          className={styles.setting__ico}
        />
        <div className={styles.text__info}>
          <p className={styles.setting__name}>{settingName}</p>
          <p className={styles.setting__param}>{settingParam}</p>
        </div>
      </section>
      <Button
        buttonText={settingBtn}
        buttonClass="setting__btn"
        buttonImage={settingBtnImage}
        isButtonImage={true}
      />
    </div>
  );
};
export default Setting;
