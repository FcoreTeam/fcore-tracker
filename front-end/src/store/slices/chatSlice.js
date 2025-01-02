import { createSlice } from "@reduxjs/toolkit";

const chatState = {
  chatInfo: {
    chatName: "Чат с заказчком#1",
    globalType: "client",
  },
  chatMessages: [
    // {
    //   chatID: "2152671",
    //   messageID: 1,
    //   chatAvatar: "/maskots/maskotFirst.png",
    //   chatSender: "",
    //   chatMessage:
    //     "Добрый день! Подскажите пожалуйста, как прогресс? Получится сегодня созвониться?",
    //   isEdited: false,
    //   chatDate: "",
    //   isUserMessage: false,
    // },
    // {
    //   chatID: "4252672",
    //   messageID: 2,
    //   chatSender: "",
    //   chatMessage:
    //     "День добрый, да получится, во сколько будет удобно? Обсудим прогресс.",
    //   chatAvatar: "/logotype.jpg",
    //   isEdited: true,
    //   chatDate: "",
    //   isUserMessage: false,
    // },
    // {
    //   chatID: "4255673",
    //   messageID: 3,
    //   chatAvatar: "/maskots/maskotFirst.png",
    //   chatSender: "",
    //   chatMessage: "Давайте в 20:00",
    //   isEdited: false,
    //   chatDate: "",
    //   isUserMessage: false,
    // },
  ],
};
// w - worker
// o - order
// s - support
// Это ID сообщеий, если начинаается с #W то это сообщение работника и.т.д

const chatSlice = createSlice({
  name: "chat",
  initialState: chatState,
  reducers: {
    addMessage: (state, action) => {
      state.chatMessages.push({
        chatID: action.payload.chatID.toString(),
        chatMessage: action.payload.chatMessage,
      });
    },
  },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
