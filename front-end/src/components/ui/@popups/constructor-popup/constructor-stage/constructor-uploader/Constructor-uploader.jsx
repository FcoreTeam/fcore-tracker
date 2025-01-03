import { useState } from "react";
import Input from "@/components/ui/input/Input";
import Image from "next/image";

import styles from "./constructor-uploader.module.scss";

const ConstructorUploader = ({ fileType, fileText }) => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setIsFileUploaded(true);
      setFileName(event.target.files[0].name); 
    } else {
      setIsFileUploaded(false);
      setFileName("");
    }
  };

  return (
    <div className={styles.upload__section}>
      <Image
        src={isFileUploaded ? "/icons/document.svg" : "/icons/upload.svg"}
        alt={isFileUploaded ? "document" : "upload"}
        height={30}
        width={30}
        className={styles.upload__image}
      />
      <Input
        inputType="file"
        inputClass="upload__hide"
        onChange={handleFileChange}
        accept=".txt, .odt, .doc, .docs, .docx, .pdf"
      />
      <p className={styles.file__text}>
        {isFileUploaded ? fileName : fileText}
      </p>
    </div>
  );
};

export default ConstructorUploader;
