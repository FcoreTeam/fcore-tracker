import clsx from "clsx";

import Input from "@/components/ui/input/Input";

import styles from "./portfolio-uploader.module.scss";
import Image from "next/image";

const PortfolioUploader = ({
  uploadedMedia,
  setUploadedMedia,
  stageHandle,
}) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setUploadedMedia((prevMedia) => [...prevMedia, ...fileUrls]);
    if (uploadedMedia.length >= 10) {
      uploadedMedia.pop();
    }
  };

  const deleteMedia = (indexToDelete) => {
    URL.revokeObjectURL(uploadedMedia[indexToDelete]);
    setUploadedMedia((prevMedia) =>
      prevMedia.filter((_, index) => index !== indexToDelete)
    );
  };
  let mediaArray = uploadedMedia.map((media, index) => (
    <div className={styles.delete__img} onClick={() => deleteMedia(index)}>
      <Image
        key={index}
        src={media}
        alt={`Uploaded media ${index}`}
        width={58}
        height={42}
        className={styles.uploaded}
      />
      <Image
        src="/icons/trash.svg"
        width={20}
        height={20}
        alt="trash"
        className={styles.delete}
      />
    </div>
  ));

  return (
    <section className={styles.uploader__wrapper}>
      <div
        className={clsx(
          styles.uploader,
          stageHandle
            ? uploadedMedia.length === 0
              ? styles.incorrect
              : ""
            : null
        )}
      >
        <Input
          onChange={handleFileChange}
          inputType="file"
          inputClass="upload__hide"
          accept="image/png, image/jpeg"
        />
      </div>
      {uploadedMedia.length !== 0 ? (
        <section className={styles.uploaded__media}>{mediaArray}</section>
      ) : (
        <></>
      )}
    </section>
  );
};
export default PortfolioUploader;
