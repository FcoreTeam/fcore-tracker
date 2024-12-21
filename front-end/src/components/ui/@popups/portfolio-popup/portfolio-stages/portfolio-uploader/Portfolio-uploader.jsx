import { useState } from "react";

import Input from "@/components/ui/input/Input";

import styles from "./portfolio-uploader.module.scss";

const PortfolioUploader = () => {
  const [uploadedMedia, setUploadedMedia] = useState([]);

  return (
    <>
      <div className={styles.uploader}>
        <Input inputType="file" inputClass="upload__hide" />
      </div>
      {uploadedMedia.length !== 0 ? (
        <section className={styles.uploaded__media}></section>
      ) : (
        <></>
      )}
    </>
  );
};
export default PortfolioUploader;
