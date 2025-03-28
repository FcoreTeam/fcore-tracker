import { createSlice } from "@reduxjs/toolkit";

const statsState = {
  ordersCompleted: 15,
  ordersCompletedWithRate: 12,
  ordersSucess: 14,
  ordersCancelled: 1,
  ordersLate: 0,
  monthlyTurnover: 0,
  isVerifed: false,
  isSelfEmployment: true,
  currentRate: "without"
};

const statsSlice = createSlice({
  name: "stats",
  initialState: statsState,
  reducers: {},
});

export default statsSlice.reducer;
