import { createSlice } from "@reduxjs/toolkit";

const authState = {
  isValidate: false,
  accountType: "self-employment",
  firstStage: {
    email: "",
    username: "Lonfich",
    password: "",
  },
  secondStage: {
    code: "", // int
  },
  thirdStage: {
    about: "Front-end разработчик",
    description: "Fcore - многопрофильная команда разработчиков из России, сформированная в 2022 году. В спектор наших услуг входит очень многое: от веб-разработки до геймдева. Заказывая у нас, вы гарантируете успех себе и своему проекту.",
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
    skills: [],
    secondFA: true,
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
