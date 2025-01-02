import { configureStore } from "@reduxjs/toolkit";

import popupsSlice from "./slices/popupsSlice";
import trackerSlice from "./slices/trackerSlice";
import authSlice from "./slices/authSlice";
import ordersSlice from "./slices/ordersSlice";
import reviewsSlice from "./slices/reviewsSlice";
import withdrawSlice from "./slices/withdrawSlice";
import portfolioSlice from "./slices/portfolioSlice";
import statsSlice from "./slices/statsSlice";
import chatSlice from "./slices/chatSlice";
import adminSlice from "./slices/adminSlice";

const store = configureStore({
  reducer: {
    tracker: trackerSlice,
    popups: popupsSlice,
    auth: authSlice,
    orders: ordersSlice,
    reviews: reviewsSlice,
    withdraw: withdrawSlice,
    portfolio: portfolioSlice,
    stats: statsSlice,
    chat: chatSlice,
    admin: adminSlice,
  },
});
export default store;
