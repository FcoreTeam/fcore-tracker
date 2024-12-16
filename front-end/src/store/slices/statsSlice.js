import { createSlice } from "@reduxjs/toolkit";

const statsState = {
  ordersCompleted: 15,
  ordersCompletedWithRate: 0,
  ordersCompletedInTime: 0,
  ordersCompletedSucessful: 0,
  monthlyTurnover: 0,
  isVerifed: false,
  isSelfEmployment: true,
};

const statsSlice = createSlice({
  name: "stats",
  initialState: statsState,
  reducers: {},
});

export default statsSlice.reducer;
