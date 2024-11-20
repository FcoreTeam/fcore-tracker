"use client";
import { Provider } from "react-redux";

import store from "@/store/store";

import WarningPopup from "@/components/ui/popup/warning-popup/Warning-popup";

import { useSelector } from "react-redux";

export default function StoreProvider({children}) {
  // const { isOpen, popupType } = useSelector(
  //   (state) => state.generalInfo.popups
  // );

  return (
    <Provider store={store}>
      {children}
      {/* {isOpen && popupType === "warning" && <WarningPopup />} */}
    </Provider>
  );
};
