"use client";
import { Provider } from "react-redux";

import store from "@/store/store";
import WarningPopup from "@/components/ui/@popups/warning-popup/Warning-popup";
import PaymentPopup from "@/components/ui/@popups/payment-popup/Payment-popup";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
      <WarningPopup />
      <PaymentPopup />
    </Provider>
  );
}
