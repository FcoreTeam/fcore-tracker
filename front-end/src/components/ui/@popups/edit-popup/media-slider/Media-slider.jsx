import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { deleteMedia } from "@/utils/PortfolioUtils";

import { Pagination, Navigation } from "swiper/modules";

import styles from "./media-slider.module.scss";
import Image from "next/image";
import Button from "@/components/ui/button/Button";

const Slider = ({ workPhotos, isEdit, setPhoto }) => {

  const setPhotoState = (controllIndex, isDelete, changeLink) => {
    setPhoto({
      controllIndex: controllIndex,
      isDelete: isDelete,
      changeLink: changeLink,
    });
  };
  const getPhotos = workPhotos.map((item, index) => (
    <SwiperSlide className={styles.slide}>
      {isEdit ? (
        <div className={styles.image__controll}>
          <Button
            buttonText="Изменить"
            buttonClass="controll__btn"
            onClick={() => {
              setPhotoState(index, false, '');
            }}
          />
          <Button
            buttonText="Удалить"
            buttonClass="controll__btn"
            onClick={() => {
              setPhotoState(index, true);
            }}
          />
        </div>
      ) : (
        <></>
      )}
      <Image
        src={item}
        alt="photo"
        width={590}
        height={324}
        className={styles.slide__image}
      />
    </SwiperSlide>
  ));
  return (
    <Swiper
      key={getPhotos.length}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.swiper}
      loop={true}
      modules={[Pagination, Navigation]}
    >
      {getPhotos}
    </Swiper>
  );
};

export default Slider;
