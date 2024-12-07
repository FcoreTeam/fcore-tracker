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
    cardInitials: "Николаев Андрей Кириллович",
    bankType: "sber",
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
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setAuthData: (state, action) => {
      state.firstStage.email = action.payload.email;
      state.fourthStage.cardNumber = action.payload.cardNumber;
    },
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
