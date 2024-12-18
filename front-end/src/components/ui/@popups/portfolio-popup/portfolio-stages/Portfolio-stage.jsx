import Image from "next/image";

import Input from "@/components/ui/input/Input";

import styles from "./portfolio-stage.module.scss";

const PortfolioStage = ({ currentStage }) => {
  return (
    <div className={styles.portfolio__stage}>
      <section className={styles.work__params}>
        {currentStage === 1 ? (
          <>
            <div className={styles.input__params}>
              <Input
                inputPlaceholder="Назавание проекта"
                inputClass="auth__input"
              />
              <Input
                isTextArea={true}
                inputPlaceholder="Описание проекта"
                inputClass="auth__input__h"
              />
              <Input
                inputPlaceholder="Тематика проекта"
                inputClass="auth__input"
              />
            </div>
            <Image
              src={null}
              alt="banner"
              width={320}
              height={210}
              className={styles.stage__banner}
            />
          </>
        ) : currentStage === 2 ? (
          <>
            <div className={styles.input__params}>
              <Input inputType="upload" />
            </div>
          </>
        ) : currentStage === 3 ? (
          <></>
        ) : null}
      </section>
    </div>
  );
};
export default PortfolioStage;
