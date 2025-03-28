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
    orderStatus: "",
    orderStatuses: [
      {
        statusName: "work",
        isCompleted: true,
        statusIco: "/icons/indevprocess.svg",
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
    orderDeadline: "",
    orderStart: 1736343976, // int "unix time"
    orderFinish: 1736354776, // int "unix time"
    orderReports: [
      {
        reportID: 0,
        reportName: "Отчёт по работе #1",
        reportDate: "03.01.2025",
        reportDescription:
          "ОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчётОтчёт",
        reportVideoLinks: [],
        reportPhotos: [],
      },
      {
        reportID: 1,
        reportName: "Отчёт по работе #2",
        reportDate: "03.01.2025",
        reportDescription: "",
        reportVideoLinks: [],
        reportPhotos: [],
      },
    ], // id array
    orderGitLink: "", // github api
  },
  paymentInfo: {
    isPayment: false, // оплата через сайт?
    paymentStages: [{ stagePrice: 0, stagePercent: 0 }], // этапы оплаты
  },
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState: trackerState,
  reducers: {},
});
export default trackerSlice.reducer;
