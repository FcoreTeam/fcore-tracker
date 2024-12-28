"use client";
import { useState } from "react";
import Input from "@/components/ui/input/Input";
import Slider from "../media-slider/Media-slider";

import styles from "./work-controll.module.scss";

const WorkControll = ({
  controllType,
  workName,
  workDescription,
  workActivity,
  isEdit,
  setEditData,
}) => {
  const [editState, setEditState] = useState({
    workName: workName || "",
    workDescription: workDescription || "",
    workActivity: workActivity || "",
  });

  console.log(editState.workName);

  const handleChange = (field, value) => {
    setEditState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
    setEditData({ ...editState, [field]: value });
  };

  return (
    <section className={styles.work__block}>
      {controllType === 1 && !isEdit ? (
        <>
          <div className={styles.type}>
            <p className={styles.work__description}>{workDescription}</p>
            <div className={styles.work__activity}>{workActivity}</div>
          </div>
        </>
      ) : controllType === 2 ? (
        <div className={styles.slider}>
          <Slider />
        </div>
      ) : null}

      {isEdit && controllType === 1 ? (
        <section className={styles.edit__panel}>
          <div className={styles.input__wrap}>
            <Input
              inputClass="edit__input"
              inputPlaceholder="Название работы"
              onChange={(e) => handleChange("workName", e.target.value)}
              value={editState.workName}
            />
            {editState.workName.length == 0 ? (
              ""
            ) : (
              <p className={styles.input__name}>Название работы</p>
            )}
          </div>
          <div className={styles.input__wrap}>
            <Input
              inputClass="auth__input__h"
              inputPlaceholder="Описание работы"
              isTextArea={true}
              onChange={(e) => handleChange("workDescription", e.target.value)}
              value={editState.workDescription}
            />
            {editState.workDescription.length == 0 ? (
              ""
            ) : (
              <p className={styles.input__name}>Описание работы</p>
            )}
          </div>
          <div className={styles.input__wrap}>
            <Input
              inputClass="edit__input"
              inputPlaceholder="Тематика проекта"
              onChange={(e) => handleChange("workActivity", e.target.value)}
              value={editState.workActivity}
            />
            {editState.workActivity.length == 0 ? (
              ""
            ) : (
              <p className={styles.input__name}>Тематика проекта</p>
            )}
          </div>
        </section>
      ) : (
        <></>
      )}
    </section>
  );
};

export default WorkControll;
