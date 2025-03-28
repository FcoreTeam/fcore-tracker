import { createSlice } from "@reduxjs/toolkit";

const adminState = {
  adminSearch: {
    data: [
      { searchName: "Разработка сайта для компании", searchId: 1, searchType: "Заказ" },
      { searchName: "Lonfich", searchId: 1, searchType: "Аккаунт" },
      { searchName: "Чат с заказчиком#1", searchId: 1, searchType: "Чат" },
      { searchName: "Чат с заказчиком#2", searchId: 2, searchType: "Чат" },
    ],
  },
  adminChat: {
    chatRequests: [
      {
        requestID: 1,
        requestKey: "CR-1233",
        requestExecutor: "Николаев Андрей",
        requestFrom: "worker",
        executorID: 1,
      },
      {
        requestID: 2,
        requestKey: "CR-1234",
        requestExecutor: "Артыкбаев Савва",
        requestFrom: "client",
        executorID: 2,
      },
      {
        requestID: 3,
        requestKey: "CR-1235",
        requestExecutor: "Артёмов Даниил",
        requestFrom: "workerClient",
        executorID: 3,
      },
    ],
  },
};
const adminSlice = createSlice({
  name: "admin",
  initialState: adminState,
  reducers: {
    addRequest: (state, action) => {},
    removeRequestTemp: (state, action) => {
      const requestIndex = state.adminChat.chatRequests.findIndex(
        (request) =>
          request.requestID === action.payload.connectedObject.requestID
      );
      state.adminChat.chatRequests.slice(requestIndex, requestIndex + 1);
    },
    closeRequest: (state, action) => {
      const requestIndex = state.adminChat.chatRequests.findIndex(
        (request) =>
          request.requestID === action.payload.connectedObject.requestID
      );
      if (requestIndex !== -1) {
        state.adminChat.chatRequests.splice(requestIndex, 1);
      }
    },
  },
});

export const { addRequest, removeRequestTemp, closeRequest } =
  adminSlice.actions;
export default adminSlice.reducer;
