import { createSlice } from "@reduxjs/toolkit";

const orderState = {
  orders: [
    // {
    //   orderID: 1, // int
    //   orderName: "order1", // str
    //   orderDescription: "", // str
    //   orderDateStart: 1733764767, // date (unix)
    //   orderDateFinish: 1734531565,
    //   orderPrice: 20000, // float
    //   orderTrackCode: "1241-5251-7322", // str
    //   orderReport: [
    //     {
    //       mediaID: 0, // unique
    //       orderMedia: null,
    //       isVideo: false,
    //     },
    //   ],
    // },
    // {
    //   orderID: 2, // int
    //   orderName: "order2", // str
    //   orderDescription: "", // str
    //   orderDateStart: "", // date
    //   orderDateFinish: "",
    //   orderPrice: 100500, // float
    //   orderTrackCode: "3541-5144-6638", // str
    //   orderReport: [
    //     {
    //       mediaID: 1, // unique
    //       orderMedia: null,
    //       isVideo: false,
    //     },
    //   ],
    // },
  ],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: orderState,
  reducers: {
    createOrder: (state, action) => {
      const {
        orderID,
        orderName,
        orderDescription,
        orderPrice,
        orderDateFinish,
        orderAgreements,
        orderTrackCode,
        orderReports,
        isOrderActivated,
        orderSteps,
        orderMessages,
      } = action.payload;
      state.orders.push({
        orderID: orderID,
        orderName: orderName,
        orderDescription: orderDescription,
        orderPrice: orderPrice,
        orderDateFinish: orderDateFinish,
        orderAgreements: orderAgreements,
        orderReports: orderReports,
        orderTrackCode: orderTrackCode,
        isOrderActivated: isOrderActivated,
        orderSteps: orderSteps,
        orderMessages: orderMessages,
      });
    },
    editStatus: (state, action) => {},
  },
});
export const { createOrder, editStatus } = ordersSlice.actions;
export default ordersSlice.reducer;
