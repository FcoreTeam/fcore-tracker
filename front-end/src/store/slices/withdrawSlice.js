import { createSlice } from "@reduxjs/toolkit";

const withdrawState = {
  balance: 50000,
  withdrawHistory: [
    {
      id: 1,
      withdrawName: "Вывод Средств №3",
      withdrawStatus: "Выполнено ✅",
      withdrawDate: "14.12.2024",
      withdrawBalance: 35255.12,
      withdrawCard: "2202 2032 5930 6543",
    },
    {
      id: 2,
      withdrawName: "Вывод Средств №2",
      withdrawStatus: "Выполняется ⏳",
      withdrawDate: "14.12.2024",
      withdrawBalance: 23525.96,
      withdrawCard: "2202 2032 5930 6543",
    },
    {
      id: 3,
      withdrawName: "Вывод Средств №1",
      withdrawStatus: "Отменен ❌",
      withdrawDate: "14.12.2024",
      withdrawBalance: 4324.73,
      withdrawCard: "2202 2032 5930 6543",
    },
  ],
};

const withdrawSlice = createSlice({
  name: "withdraw",
  initialState: withdrawState,
  reducers: {},
});

export default withdrawSlice.reducer;
