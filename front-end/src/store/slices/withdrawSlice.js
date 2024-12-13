import { createSlice } from "@reduxjs/toolkit";

const withdrawState = {
  balance: 0,
  withdrawHistory: [
    {
      id: 1,
      withdrawStatus: "Выполнено",
      withdrawDate: "14.12.2024",
      withdrawBalance: 1000,
      withdrawCard: "2202 2032 5930 6506",
    },
    {
      id: 2,
      withdrawStatus: "Выполняется",
      withdrawDate: "14.12.2024",
      withdrawBalance: 1000,
      withdrawCard: "2202 2032 5930 6506",
    },
    {
      id: 3,
      withdrawStatus: "Отменено",
      withdrawDate: "14.12.2024",
      withdrawBalance: 1000,
      withdrawCard: "2202 2032 5930 6506",
    },
  ],
};

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState: withdrawState,
  reducers: {},
});

export default withdrawSlice.reducer;
