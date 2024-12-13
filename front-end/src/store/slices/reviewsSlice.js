import { createSlice } from "@reduxjs/toolkit";

const reviews = {
  reviews: [
    {
      id: 1,
      clientName: "Заказчик#1",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг.  Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг.Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 5, // float
      reviewDate: "10.12.2024",
    },
    {
      id: 1,
      clientName: "Заказчик#1",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 3, // float
      reviewDate: "09.12.2024",
    },
    {
      id: 1,
      clientName: "Заказчик#1",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 4, // float
      reviewDate: "05.11.2023",
    },
    {
      id: 1,
      clientName: "Заказчик#1",
      reviewTitle: "Всё сделали быстро и качественно!",
      reviewDescription:
        "Большое спасибо команде ... за своевременное выполнение работы, также они помогли выбрать хостинг. ",
      reviewRate: 5, // float
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
