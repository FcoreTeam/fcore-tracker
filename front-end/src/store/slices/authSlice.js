import { createSlice } from "@reduxjs/toolkit";

const authState = {
  firstStage: {
    email: "",
    username: "",
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
    readyFirst: false, 
    readySecond: false,
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
