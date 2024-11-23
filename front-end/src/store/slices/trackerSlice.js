import { createSlice } from "@reduxjs/toolkit";

const trackerState = {
  trackNumber: "12FA-4FH5-M0D4", //str
  studioInfo: {
    studioName: "Fcore", // str
    studioRating: "5.0", // str? or float
    studioAvatar: "/logotype.jpg", // avatar link,
    studioDescription: "Веб-Студия", // str
  },
  orderInfo: {
    orderID: 0, // int
    orderName: "Название заказа", // str
    orderDescription: "Описание заказа", // str
    orderDate: "", // str
    orderStatus: "",
    orderStatuses: [
      {
        statusName: "work",
        isCompleted: true,
        statusIco: "/icons/indevcompleted.svg",
      },
      {
        statusName: "check",
        isCompleted: false,
        isProcess: false,
        statusIco: "/icons/oncheckprocess.svg",
      },
      {
        statusName: "completed",
        isCompleted: false,
        statusIco: "/icons/notcompleted.svg",
      },
    ], // str
    orderPrice: "", // int
    orderStart: "", // int "unix time"
    orderFinish: "", // int "unix time"
    orderPictures: [], // id array
    orderVideos: [], // image ID from database,
    orderGitLink: "", // github api
  },
  paymentInfo: {
    isPayment: false, // оплата через сайт?
    paymentStages: [], // этапы оплаты
  },
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState: trackerState,
  reducers: {},
});
export default trackerSlice.reducer;
