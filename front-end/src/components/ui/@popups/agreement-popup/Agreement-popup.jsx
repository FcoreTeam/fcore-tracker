import { useSelector } from "react-redux";

import Popup from "../Popup";

import styles from "./agreement-popup.module.scss";
import OrderInfo from "./order-info/Order-info";
import PaymentStage from "../constructor-popup/constructor-stage/payment-stage/Payment-stage";
import ConstructorUploader from "../constructor-popup/constructor-stage/constructor-uploader/Constructor-uploader";
import Agreement from "./agreement/Agreement";
import Input from "../../input/Input";
import Button from "../../button/Button";

const AgreementPopup = () => {
  const { isOpen, popupType } = useSelector(
    (state) => state.popups.generalInfo
  );

  const mockedData = [
    // Иммитация данных
    {
      orderName: "Имя заказа",
      orderPrice: 100000,
      orderStages: "По этапам",
      orderDeadline: "01.04.2025",
    },
  ];

  return (
    <>
      {(isOpen && popupType === "agreement") && (
        <Popup>
          <div className={styles.popup__wrap}>
            <div className={styles.agreement__popup}>
              <p className={styles.popup__name}>Подпишите соглашения 📝</p>
              <p className={styles.popup__description}>
                И приступайте к работе
              </p>
              <div className={styles.popup__body}>
                {mockedData.map((item, i) => (
                  <OrderInfo key={i} {...item} />
                ))}
                {mockedData[0].orderStages === "Постоплата" ? (
                  <></>
                ) : (
                  <div className={styles.stages}>
                    <p className={styles.popup__subtitle}>1. Этапы оплаты</p>
                    <PaymentStage
                      stageName="1. Разработка дизайна UI / UX"
                      stagePercent={20}
                      stagePrice={20000}
                    />
                    <PaymentStage
                      stageName="2. Разработка Front-end части"
                      stagePercent={20}
                      stagePrice={20000}
                    />
                    <PaymentStage
                      stageName="3. Разработка Back-end части"
                      stagePercent={20}
                      stagePrice={20000}
                    />
                    <PaymentStage
                      stageName="4. Установка на хостинг и тестирование"
                      stagePercent={20}
                      stagePrice={20000}
                    />
                    <PaymentStage
                      stageName="5. Поддержка 3 мес"
                      stagePercent={20}
                      stagePrice={20000}
                    />
                    <p className={styles.popup__subtitle}>
                      2. Соглашения и условия работы
                    </p>
                    <p className={styles.popup__agreement}>
                      Для продолжения работы, вам потребуется заключить
                      соглашение "О сотрудничестве", действительное в пределах
                      сайта. Пункт пользовательского соглашения 7.1. Нажмите на
                      документ для просмотра
                    </p>
                    <div className={styles.agreements}>
                      <Agreement
                        agreementLink="/"
                        agreementName="Условия выполнения заказа"
                      />
                      <Agreement
                        agreementLink="/"
                        agreementName="NDA (Соглашение о неразглашении)"
                      />
                      <Agreement
                        agreementLink="/"
                        agreementName="ГПД (Гражданско-правовой договор)"
                      />
                    </div>
                    <p className={styles.popup__subtitle}>
                      3. Подпишите соглашение "О сотрудничестве"
                    </p>
                    <div className={styles.agreement__inputs}>
                      <div className={styles.input__place}>
                        <Input inputType="checkbox" inputClass="checkbox" />
                        <p className={styles.checkbox__info}>
                          Я полностью согласен(на) со всеми вышеперечисленными
                          условиями, и готов заключить соглашение "О
                          сотрудничестве", согласно пользовательскому
                          соглашению.
                        </p>
                      </div>
                      <div className={styles.input__place}>
                        <Input inputType="checkbox" inputClass="checkbox" />
                        <p className={styles.checkbox__info}>
                          Я полностью ознакомлен(а) с требованиями заказчика
                        </p>
                      </div>
                      <Input
                        inputClass="agreement__input"
                        inputPlaceholder="Соглашение подписал(а)"
                      />
                    </div>
                  </div>
                )}
              </div>
              <Button buttonClass="agreement__btn" buttonText="Начать работу" />
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};
export default AgreementPopup;
