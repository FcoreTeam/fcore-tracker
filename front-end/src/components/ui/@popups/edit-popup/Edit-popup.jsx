import { useSelector, useDispatch } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";
import { useState } from "react";
import { editWork } from "@/store/slices/portfolioSlice";
import Popup from "../Popup";
import Button from "../../button/Button";
import WorkControll from "./work-controll/Work-controll";

import styles from "./edit-popup.module.scss";

const EditPopup = () => {
  const dispatch = useDispatch();
  const { accountType } = useSelector((state) => state.auth); // Статус аккаунта
  const { workId } = useSelector((state) => state.popups.popupInfo); // Получаю workId
  const { works } = useSelector((state) => state.portfolio); // Получаю все работы

  const work = works.find((item) => item.workId == workId);
  const [isEdit, setIsEdit] = useState(false); // Редактировано?
  const [editData, setEditData] = useState({
    // Возвращает undefiend поменять под find
    workName: works.find((item) => item.workId == workId) || "",
    workDescription: works.find((item) => item.workId == workId) || "",
    workActivity: works.find((item) => item.workId == workId) || "",

  });
  const { popupType, isOpen } = useSelector(
    (state) => state.popups.generalInfo
  );
  console.log(workId);
  const closePopup = () => {
    dispatch(
      setPopupData({
        isOpen: false,
      })
    );
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const saveEdit = () => {
    setIsEdit(!isEdit);
    const originalWork = works.find((item) => item.workId == workId);
    if (
      editData.workName.workName === originalWork.workName &&
      editData.workDescription.workDescription ===
        originalWork.workDescription &&
      editData.workActivity.workActivity === originalWork.workActivity
    ) {
      return;
    } else {
      dispatch(
        editWork({
          workId: workId,
          workName: editData.workName,
          workDescription: editData.workDescription,
          workActivity: editData.workActivity,
        })
      );
    }
    console.log("Сохраняем измененные данные:", editData);
  };

  return (
    <>
      {popupType === "edit" && isOpen && works.length !== 0 && (
        <Popup>
          <div className={styles.edit__popup__wrapper}>
            <div className={styles.edit__popup}>
              <div className={styles.popup__header}>
                <p className={styles.work__name}>{work.workName}</p>
                <Button buttonClass="close__btn__popup" onClick={closePopup} />
              </div>

              <section className={styles.work__controll}>
                <WorkControll
                  controllType={1}
                  workName={work.workName}
                  workDescription={work.workDescription}
                  workActivity={work.workActivity}
                  isEdit={isEdit}
                  setEditData={setEditData}
                  workId={workId}
                  editData={editData}
                />
                <WorkControll controllType={2} />
              </section>
              {accountType !== "client" ? (
                <Button
                  buttonText={isEdit ? "Сохранить" : "Редактировать"}
                  buttonClass="edit__btn"
                  onClick={isEdit ? saveEdit : handleEdit}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default EditPopup;

// - Нужно сбрасывать EditData после нажатия на кнопку save (фиксит баг с редактированием чужой работы)
// - Нужно
