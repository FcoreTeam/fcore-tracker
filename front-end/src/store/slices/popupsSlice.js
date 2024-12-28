import { createSlice } from "@reduxjs/toolkit";

const popupState = {
  generalInfo: {
    isOpen: false,
    popupType: "",
  },

  popupInfo: {
    popupName: "",
    popupDescription: "",
    workId: 0,
  },
};

const popupsSlice = createSlice({
  name: "popups",
  initialState: popupState,
  reducers: {
    setPopupData: (state, action) => {
      state.generalInfo.isOpen = action.payload.isOpen;
      state.generalInfo.popupType = action.payload.popupType;
      state.popupInfo.popupName = action.payload.popupName;
      state.popupInfo.popupDescription = action.payload.popupDescription;
      state.popupInfo.workId = action.payload.workId;
    },
  },
});

export const { setPopupData } = popupsSlice.actions;

export default popupsSlice.reducer;
