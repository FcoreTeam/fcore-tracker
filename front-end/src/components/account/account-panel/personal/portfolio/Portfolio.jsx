import { useDispatch, useSelector } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";
import Button from "@/components/ui/button/Button";
import Work from "./work/Work";

import styles from "./portfolio.module.scss";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { works } = useSelector((state) => state.portfolio);
  const mappedWorks = works.map((item, index) => (
    <Work
      key={item.workId}
      workName={item.workName}
      workId={item.workId}
      workDescription={item.workDescription}
      workImage={item.workPhotos[0]}
      workActivity={item.workActivity}
      onClick={() =>
        dispatch(
          setPopupData({
            isOpen: true,
            popupType: "edit",
            popupName: "Просмотр работы",
            workId: item.workId,
          })
        )
      }
    />
  ));

  const setOpenPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "portfolio",
        popupName: "Общая информация 🧳",
        popupDescription:
          "Требуется заполнить главную информацию о вашем проекте",
      })
    );
  };

  return (
    <div className={styles.portfolio}>
      {works.length !== 0 ? (
        <div>
          <section className={styles.controll__work}>
            <Button
              buttonText="Загрузить"
              buttonClass="upload__btn__w"
              onClick={setOpenPopup}
            />
          </section>
          <section className={styles.works}>{mappedWorks}</section>
        </div>
      ) : (
        <section className={styles.empty__wrap}>
          <div className={styles.empty__works}>
            <p className={styles.empty__title}>Работы отсутствуют 😢</p>
            <p className={styles.empty__description}>
              Больше хороших работ повысят шанс на успешный заказ
            </p>
          </div>
          <Button
            buttonText="Загрузить"
            buttonClass="upload__btn"
            onClick={setOpenPopup}
          />
        </section>
      )}
    </div>
  );
};
export default Portfolio;
