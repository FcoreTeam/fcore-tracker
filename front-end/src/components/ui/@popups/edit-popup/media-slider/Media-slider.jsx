import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { deleteMedia } from "@/utils/PortfolioUtils";

import { Pagination, Navigation } from "swiper/modules";

import styles from "./media-slider.module.scss";
import Image from "next/image";
import Button from "@/components/ui/button/Button";
import { useRef } from "react";

const Slider = ({ editPhoto, workPhotos, isEdit, setEditPhoto, setEditData }) => {

  const inputFileRef = useRef(null)

  const removeNthChild = (arr, n) => {
    if (n >= 0 && n < arr.length) {
      arr.splice(n, 1); // Remove 1 element at index n
    }
    return arr;
  }

  const setPhotoState = (controllIndex, isDelete, imageFile) => {
    if (isDelete && editPhoto.workPhotos.length > 1) {
      setEditPhoto(prev => ({
        ...prev,
        workPhotos: prev.workPhotos.filter((el, i) => i !== controllIndex)
      }))
    } else if (!isDelete) {
      setEditPhoto(prev => ({
        ...prev,
        workPhotos: prev.workPhotos.map((el, i) => i === controllIndex ? imageFile : el)
      }))
      // setEditPhoto({
      //   controllIndex: controllIndex,
      //   isDelete: isDelete,
      //   changeLink: changeLink,
      // });
    } else return
  };

  const fileHandleChange = (e, index) => {
    setPhotoState(index, false, e.target.files[0])
  }

  const getPhotos = editPhoto.workPhotos.map((item, index) => (
    // eslint-disable-next-line react/jsx-key
    <SwiperSlide className={styles.slide}>
      {isEdit ? (
        <div className={styles.image__controll}>
          <input style={{ display: "none" }} accept="image/png, image/jpeg" ref={inputFileRef} type="file" onChange={(e) => fileHandleChange(e, index)} />
          <Button
            buttonText="Изменить"
            buttonClass="controll__btn"
            onClick={() => inputFileRef.current.click()}
          />
          {editPhoto.workPhotos.length > 1 && <Button
            buttonText="Удалить"
            buttonClass="controll__btn"
            onClick={() => {
              setPhotoState(index, true);
            }}
          />}
        </div>
      ) : (
        <></>
      )}
      <Image
        src={URL.createObjectURL(item)}
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
