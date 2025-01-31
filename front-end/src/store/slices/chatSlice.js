import { createSlice } from "@reduxjs/toolkit";

const chatState = {
  chatInfo: {
    chatName: "",
  },
  messages: [
    {
      chatID: 2152671,
      messageID: 1,
      chatType: "support",
      chatAvatar: "/maskots/maskotFirst.png",
      chatSender: "",
      chatMessage:
        "Добрый день! Подскажите пожалуйста, как прогресс? Получится сегодня созвониться?",
      isEdited: false,
      chatDate: "",
      isUserMessage: false,
    },
  ],
  supportMessages: [],
};
// w - worker
// o - order
// s - support
// Это ID сообщеий, если начинаается с #W то это сообщение работника и.т.д

const chatSlice = createSlice({
  name: "chat",
  initialState: chatState,
  reducers: {
    setChatType: (state, action) => {
      state.chatInfo.chatType = action.payload.chatType;
    },
    addMessage: (state, action) => {
      state.messages.push({
        isUserMessage: action.payload.isUserMessage,
        chatMessage: action.payload.message,
      });
    },
  },
});

export const { addMessage, setChatType } = chatSlice.actions;

export default chatSlice.reducer;
