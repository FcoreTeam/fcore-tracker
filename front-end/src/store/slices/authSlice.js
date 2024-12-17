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
    description:
      "Fcore - многопрофильная команда разработчиков из России, сформированная в 2022 году. В спектор наших услуг входит очень многое: от веб-разработки до геймдева. Заказывая у нас, вы гарантируете успех себе и своему проекту.",
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
    skills: [
      { skillName: "HTML", skillImage: "/icons/html.svg" },
      { skillName: "CSS", skillImage: "/icons/css.svg" },
      { skillName: "SCSS", skillImage: "/icons/scss.svg" },
      { skillName: "JavaScript", skillImage: "/icons/javascript.svg" },
      { skillName: "React JS", skillImage: "/icons/reactjs.svg" },
      { skillName: "Vue.js", skillImage: "/icons/vuejs.svg" },
      { skillName: "TypeScript", skillImage: "/icons/typescript.svg" },
      { skillName: "Next JS", skillImage: "/icons/nextjs.svg" },
      { skillName: "Angular", skillImage: "/icons/angular.svg" },
      { skillName: "Node JS", skillImage: "/icons/nodejs.svg" },
      { skillName: "PHP", skillImage: "/icons/php.svg" },
      // { skillName: "Python", skillImage: "/icons/python.svg" },
      // { skillName: "Golang", skillImage: "/icons/golang.svg" },
      // { skillName: "Django", skillImage: "/icons/django.svg" },
      // { skillName: "Postgresql", skillImage: "/icons/postgresql.svg" },
      // { skillName: "MongoDB", skillImage: "/icons/mongodb.svg" },
      // { skillName: "Redux", skillImage: "/icons/redux.svg" },
      // { skillName: "Mobx", skillImage: "/icons/mobx.svg" },
      // { skillName: "Nest JS", skillImage: "/icons/nestjs.svg" },
      // { skillName: "C", skillImage: "/icons/c.svg" },
      // { skillName: "C++", skillImage: "/icons/cplusplus.svg" },
      // { skillName: "C#", skillImage: "/icons/csharp.svg" },
      // { skillName: "Ruby", skillImage: "/icons/ruby.svg" },
      // { skillName: "Swift", skillImage: "/icons/swift.svg" },
      // { skillName: "Jquery", skillImage: "/icons/jquery.svg" },
      // { skillName: "Kotlin", skillImage: "/icons/kotlin.svg" },
      // { skillName: "1C", skillImage: "/icons/1c.svg" },
    ],
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
