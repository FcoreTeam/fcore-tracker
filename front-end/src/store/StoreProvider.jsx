"use client";
import { Provider } from "react-redux";
import store from "@/store/store";
import { useSelector } from "react-redux";

import WarningPopup from "@/components/ui/@popups/warning-popup/Warning-popup";
import PaymentPopup from "@/components/ui/@popups/payment-popup/Payment-popup";
import SettingsPopup from "@/components/ui/@popups/settings-popup/Settings-popup";
import CompanyPopup from "@/components/ui/@popups/company-popup/Company-popup";
import RatingPopup from "@/components/ui/@popups/rating-popup/Rating-popup";
import PortfolioPopup from "@/components/ui/@popups/portfolio-popup/Portfolio-popup";
import ChatPopup from "@/components/ui/@popups/chat-popup/Chat-popup";
import EditPopup from "@/components/ui/@popups/edit-popup/Edit-popup";
import AgreementPopup from "@/components/ui/@popups/agreement-popup/Agreement-popup";
import ConstructorPopup from "@/components/ui/@popups/constructor-popup/Constructor-popup";
import ReviewPopup from "@/components/ui/@popups/review-popup/Review-popup";

function Popups() {
  const { works } = useSelector((state) => state.portfolio);
  const { popupType } = useSelector((state) => state.popups.generalInfo);
  return (
    <>
      <ReviewPopup />
      <WarningPopup />
      <PaymentPopup />
      <SettingsPopup />
      <CompanyPopup />
      <RatingPopup />
      <PortfolioPopup />
      <ChatPopup />
      {works.length !== 0 && popupType === "edit" && <EditPopup />}
      <ConstructorPopup />
      <AgreementPopup />
    </>
  );
}

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <Popups />
    </Provider>
  );
}
