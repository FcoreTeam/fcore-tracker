import Input from "@/components/ui/input/Input";
import Image from "next/image";
import VideoUploader from "./video-uploader/Video-uploader";
import PortfolioUploader from "./portfolio-uploader/Portfolio-uploader";

import styles from "./portfolio-stage.module.scss";

const PortfolioStage = ({
  currentStage,
  uploadedMedia,
  setUploadedMedia,
  generalOrderInfo,
  setGeneralOrderInfo,
}) => {
  const handleInputChange = (e, field) => {

    setGeneralOrderInfo((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };

  return (
    <div className={styles.portfolio__stage}>
      <section className={styles.work__params}>
        {currentStage === 1 ? (
          <>
            <div className={styles.input__params}>
              <Input
                inputPlaceholder="Назавание проекта"
                inputClass="auth__input"
                onChange={(e) => handleInputChange(e, "workName")}
              />
              <Input
                isTextArea={true}
                inputPlaceholder="Описание проекта"
                inputClass="auth__input__h"
                onChange={(e) => handleInputChange(e, "workDescription")}
              />
              <Input
                inputPlaceholder="Тематика проекта"
                inputClass="auth__input"
                onChange={(e) => handleInputChange(e, "workActivity")}
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
              <p className={styles.portfolio__subtitle}>1. Загрузка фото 📸</p>
              <div className={styles.stage}>
                <PortfolioUploader
                  uploadedMedia={uploadedMedia}
                  setUploadedMedia={setUploadedMedia}
                />
                <section className={styles.portfolio__req}>
                  <p className={styles.req__title}>Требования к фотографиям</p>
                  <p className={styles.req__subtitle}>
                    Формат Png/Jpg <span>✂️</span>
                  </p>
                  <p className={styles.req__subtitle}>
                    Разрешение от 960x540 <span>🎞️</span>
                  </p>
                  <p className={styles.req__subtitle}>
                    Вес не более 8мб <span>💾</span>
                  </p>
                  <p className={styles.req__subtitle}>
                    Не содержит запрещенных тематик <span>🚫</span>
                  </p>
                  <p className={styles.req__subtitle}>
                    Максимум 10 штук<span>✈️</span>
                  </p>
                </section>
              </div>
              <p className={styles.portfolio__subtitle}>2. Загрузка видео 🎞️</p>
              <VideoUploader uploadedMedia={uploadedMedia} />
            </div>
          </>
        ) : currentStage === 3 ? (
          <>
            <div className={styles.input__params}>
              <Input
                inputPlaceholder="Цена работы ₽"
                inputClass="auth__input"
                onChange={(e) => handleInputChange(e, "price")}
              />
              <Input
                inputPlaceholder="Ссылка на (сайт)"
                inputClass="auth__input"
                onChange={(e) => handleInputChange(e, "website")}
              />
              <Input
                inputPlaceholder="Срок выполнения (дни)"
                inputClass="auth__input"
                onChange={(e) => handleInputChange(e, "duration")}
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
        ) : null}
      </section>
    </div>
  );
};
export default PortfolioStage;
