import { useSelector, useDispatch } from "react-redux";
import { setPopupData } from "@/store/slices/popupsSlice";

import Button from "@/components/ui/button/Button";

import styles from "./user-description.module.scss";

const UserDescription = () => {
  const dispatch = useDispatch();
  const { accountType } = useSelector((state) => state.auth);
  const setPopup = () => {
    dispatch(
      setPopupData({
        isOpen: true,
        popupType: "company",
        popupName: "Подробная информация об аккаунте"
      })
    );
  };

  return (
    <div className={styles.user__description__wrap}>
      <section className={styles.top__info}>
        <p className={styles.account__type}>
          <span className={styles.prefix}>Вы</span>{" "}
          {accountType === "self-employment" ? "самозанятый" : null}
        </p>
        <p className={styles.account__description}></p>
      </section>
      <section className={styles.bottom__info}>
        <Button buttonText="Скачать отчёт" buttonClass="download__btn" />
        <Button
          buttonText="Подробнее"
          buttonClass="download__btn"
          onClick={setPopup}
        />
      </section>
    </div>
  );
};
export default UserDescription;
