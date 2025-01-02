import { createSlice } from "@reduxjs/toolkit";

const authState = {
  isValidate: false,
  isAuth: true,
  accountType: "admin",
  firstStage: {
    email: "",
    username: "BestDev",
    password: "",
    userID: "425267",
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
    userAvatar: '',
    skills: [
      { skillName: "HTML", skillImage: "/icons/html.png" },
      { skillName: "CSS", skillImage: "/icons/css.png" },
      { skillName: "SCSS", skillImage: "/icons/scss.png" },
      // { skillName: "JavaScript", skillImage: "/icons/javascript.png" },
      // { skillName: "React JS", skillImage: "/icons/reactjs.png" },
      // { skillName: "Vue.js", skillImage: "/icons/vuejs.png" },
      // { skillName: "TypeScript", skillImage: "/icons/typescript.png" },
      // { skillName: "Next JS", skillImage: "/icons/nextjs.png" },
      // { skillName: "Angular", skillImage: "/icons/angular.png" },
      // { skillName: "Node JS", skillImage: "/icons/nodejs.webp" },
      // { skillName: "PHP", skillImage: "/icons/php.png" },
      // { skillName: "Python", skillImage: "/icons/python.png" },
      // { skillName: "Golang", skillImage: "/icons/golang.png" },
      // { skillName: "Django", skillImage: "/icons/django.png" },
      // { skillName: "Postgresql", skillImage: "/icons/postgre.png" },
      // { skillName: "MongoDB", skillImage: "/icons/mongodb.png" },
      // { skillName: "Redux", skillImage: "/icons/redux.png" },
      // { skillName: "Mobx", skillImage: "/icons/mobx.png" },
      // { skillName: "Nest JS", skillImage: "/icons/nestjs.webp" },
      // { skillName: "C", skillImage: "/icons/c.png" },
      { skillName: "C++", skillImage: "/icons/cplusplus.png" },
      { skillName: "C#", skillImage: "/icons/csharp.webp" },
      { skillName: "Ruby", skillImage: "/icons/ruby.png" },
      { skillName: "Swift", skillImage: "/icons/swift.png" },
      { skillName: "Jquery", skillImage: "/icons/jquery.png" },
      { skillName: "Kotlin", skillImage: "/icons/kotlin.png" },
      { skillName: "1C", skillImage: "/icons/1c.webp" },
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
