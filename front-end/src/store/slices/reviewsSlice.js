import { createSlice } from "@reduxjs/toolkit";

const reviews = {
  reviews: [
    {
      id: 1,
      clientAvatar: "/maskots/maskotThird.png",
      clientName: "Заказчик#8",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо данном исполнителю, выполнил заказ с опережением сроков, а также помог выбрать хостинг и посоветовал нововведения для сайта, которые мы добавим в следующем обновлении. Ещё радует максимально быстрые ответы от исполнителя, отвечал в любое время суток. Будем работать ещё, рекомендую! ",
      reviewRate: 5, // float
      reviewDate: "10.12.2024",
    },
    {
      id: 2,
      clientAvatar: "/maskots/maskotSecond.png",
      clientName: "Заказчик#7",
      reviewTitle: "Немного опоздали, но в целом хорошо",
      reviewDescription:
        "Исполнитель дал срок 2 недели, а выполнил заказ за 3, некритично, но всё же. А в целом рекомедуем, качество кода отличное как и дизайн!",
      reviewRate: 4, // float
      reviewDate: "09.12.2024",
    },
    {
      id: 3,
      clientAvatar: "",
      clientName: "Заказчик#1",
      reviewTitle: "Самый лучший исполнитель!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 5, // float
      reviewDate: "05.11.2023",
    },
    {
      id: 4,
      clientAvatar: "",
      clientName: "Заказчик#1",
      reviewTitle: "Самый лучший исполнитель!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 5, // float
      reviewDate: "08.01.2024",
    },
    {
      id: 5,
      clientAvatar: "",
      clientName: "Заказчик#1",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 5, // float
      reviewDate: "08.01.2024",
    },
    {
      id: 6,
      clientAvatar: "",
      clientName: "Заказчик#1",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 4, // float
      reviewDate: "08.01.2024",
    },
  ],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviews,
  reducers: {
    setReview: (state, action) => {},
  },
});
export const { setReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
