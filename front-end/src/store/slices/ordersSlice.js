import { createSlice } from "@reduxjs/toolkit";

const orderState = {
  orders: [
    {
      orderID: 1, // int
      orderName: "order1", // str
      orderDescription: "", // str
      orderDateStart: 1733764767, // date (unix)
      orderDateFinish: 1734531565,
      orderPrice: 20000, // float
      orderTrackCode: "1241-5251-7322", // str
    },
    {
        orderID: 2, // int
        orderName: "order2", // str
        orderDescription: "", // str
        orderDateStart: "", // date
        orderDateFinish: "",
        orderPrice: 100500, // float
        orderTrackCode: "3541-5144-6638", // str
      },
  ],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: orderState,
  reducers: {},
});
export default ordersSlice.reducer;
