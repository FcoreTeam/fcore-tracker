import { createSlice } from "@reduxjs/toolkit";

const chatState = {
  chatInfo: {
    chatName: "Чат с заказчком#1",
    globalType: "client",
  },
  chatMessages: [
    {
      chatId: "#O",
      chatAvatar: "/maskots/maskotFirst.png",
      chatSender: "",
      chatMessage:
        "Добрый день! Подскажите пожалуйста, как прогресс? Получится сегодня созвониться?",
      isEdited: false,
      chatDate: "",
      isMessageUser: false,
    },
    {
      chatId: "#W",
      chatSender: "",
      chatMessage:
        "День добрый, да получится, во сколько будет удобно? Обсудим прогресс.",
      chatAvatar: "/logotype.jpg",
      isEdited: true,
      chatDate: "",
      isMessageUser: false,
    },
    {
      chatId: "#O",
      chatAvatar: "/maskots/maskotFirst.png",
      chatSender: "",
      chatMessage:
        "Давайте в 20:00",
      isEdited: false,
      chatDate: "",
      isMessageUser: false,
    },
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
      state.chatMessages.push(action.payload);
    },
  },
});

export default chatSlice.reducer;
