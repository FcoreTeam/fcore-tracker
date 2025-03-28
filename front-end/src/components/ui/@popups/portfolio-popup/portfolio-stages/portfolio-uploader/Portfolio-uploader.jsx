import clsx from "clsx";

import { deleteMedia, handleFileChange } from "@/utils/PortfolioUtils";
import Input from "@/components/ui/input/Input";
import Image from "next/image";

import styles from "./portfolio-uploader.module.scss";

const PortfolioUploader = ({
  uploadedMedia,
  setUploadedMedia,
  stageHandle,
}) => {
  let mediaArray = uploadedMedia.map((media, index) => (
    // eslint-disable-next-line react/jsx-key
    <div className={styles.delete__img} onClick={() => deleteMedia(index, uploadedMedia, setUploadedMedia)}>
      <Image
        src={URL.createObjectURL(media)}
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
          onChange={(event) => handleFileChange(event, uploadedMedia, setUploadedMedia)}
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
