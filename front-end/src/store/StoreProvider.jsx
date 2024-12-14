"use client";
import { Provider } from "react-redux";

import store from "@/store/store";
import WarningPopup from "@/components/ui/@popups/warning-popup/Warning-popup";
import PaymentPopup from "@/components/ui/@popups/payment-popup/Payment-popup";
import SettingsPopup from "@/components/ui/@popups/settings-popup/Settings-popup";
import CompanyPopup from "@/components/ui/@popups/company-popup/Company-popup";
import RatingPopup from "@/components/ui/@popups/rating-popup/Rating-popup";
import PortfolioPopup from "@/components/ui/@popups/portfolio-popup/Portfolio-popup";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <WarningPopup />
      <PaymentPopup />
      <SettingsPopup />
      <CompanyPopup />
      <RatingPopup />
      <PortfolioPopup />
    </Provider>
  );
}
