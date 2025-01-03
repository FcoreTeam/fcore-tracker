import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Button from "@/components/ui/button/Button";

import styles from "./media-slider.module.scss";

const MediaSlider = ({ reports }) => {
  const mappedReports = reports.map((item) => (
    <SwiperSlide className={styles.slide} key={item.reportID}>
      <p className={styles.report__title}>{item.reportName}</p>
      <div className={styles.report__block}>
        <Image
          src=""
          alt={item.reportDescription}
          height={270}
          width={590}
          className={styles.report__image}
        />
        <section className={styles.report__text}>
          <p className={styles.report__date}>Дата отчёта: {item.reportDate}</p>
          <p className={styles.report__description}>{item.reportDescription}</p>
          <Button buttonText="Подробный отчёт" buttonClass="report__btn" />
        </section>
      </div>
    </SwiperSlide>
  ));
  return (
    <div className={styles.media__slider}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className={styles.swiper}
        loop={true}
        modules={[Pagination, Navigation]}
      >
        {mappedReports}
      </Swiper>
    </div>
  );
};
export default MediaSlider;
