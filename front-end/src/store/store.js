import { configureStore } from "@reduxjs/toolkit";
import popupsSlice from "./slices/popupsSlice";
import trackerSlice from "./slices/trackerSlice"
import authSlice from "./slices/authSlice"
import ordersSlice from "./slices/ordersSlice"

const store = configureStore({
    reducer: {
        tracker: trackerSlice,
        popups: popupsSlice,
        auth: authSlice,
        orders: ordersSlice,
    }
})
export default store