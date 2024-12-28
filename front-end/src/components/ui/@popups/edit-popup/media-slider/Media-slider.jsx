"use client";

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Pagination, Navigation } from "swiper/modules";

import styles from "./media-slider.module.scss";
import Image from "next/image";

const Slider = () => {
  const { workId } = useSelector((state) => state.popups.popupInfo);
  const { workPhotos } = useSelector((state) => state.portfolio.works[workId - 1]);

  const getPhotos = workPhotos.map((item) => (
    <SwiperSlide className={styles.slide}>
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
