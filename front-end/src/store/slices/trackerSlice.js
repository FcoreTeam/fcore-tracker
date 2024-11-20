import { createSlice } from "@reduxjs/toolkit";



const trackerState = {
  trackNumber: "", //str
  studioInfo: {
    studioName: "Fcore", // str
    studioRating: '5.0', // str? or float
    studioAvatar: "/logotype.jpg", // avatar link,
    studioDescription: "Студия", // str
  },
  orderInfo: {
    orderID: 0, // int
    orderDate: "", // str
    orderStatus: "", // str
    orderPrice: "", // int
    orderStart: "", // int "unix time"
    orderFinish: "", // int "unix time"
    orderPictures: [],
    orderVideos: [], // image ID from database,
    orderGitLink: "",
  },
  paymentInfo: {
    isPayment: false, // оплата через сайт?
    paymentStages: [], // этапы оплаты
  }
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState: trackerState,
  reducers: {},
});
export default trackerSlice.reducer;
