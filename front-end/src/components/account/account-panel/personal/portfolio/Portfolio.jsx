import { useDispatch, useSelector } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";

import styles from "./portfolio.module.scss";
import Button from "@/components/ui/button/Button";

const Portfolio = () => {
  const dispatch = useDispatch();
  const { works } = useSelector((state) => state.portfolio);

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
        <></>
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
