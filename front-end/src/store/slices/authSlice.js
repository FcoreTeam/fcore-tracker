import { createSlice } from "@reduxjs/toolkit";

const authState = {
  isValidate: false,
  accountType: "self-employment",
  firstStage: {
    email: "",
    username: "username",
    password: "",
  },
  secondStage: {
    code: Number,
  },
  thirdStage: {
    about: "",
    category: "",
  },
  fourthStage: {
    cardNumber: "",
    cardInitials: "",
    bankType: "Сбер",
    readyOfert: false,
  },
  fifthStage: {
    readyFirst: false,
    readySecond: false,
  },
  sixStage: {
    initials: "",
    phoneNumber: "",
    INN: "",
  },
  otherInfo: {
    userAvatar: null,
    secondFA: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setAuthData: (state, action) => {
      state.firstStage.email = action.payload.email;
    },
    setBankData: (state, action) => {
      state.fourthStage.bankType = action.payload.bankType;
      state.fourthStage.cardInitials = action.payload.cardInitials;
      state.fourthStage.cardNumber = action.payload.cardNumber;
    },
  },
});

export const { setAuthData, setBankData } = authSlice.actions;

export default authSlice.reducer;
