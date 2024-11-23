import { configureStore } from "@reduxjs/toolkit";
import popupsSlice from "./slices/popupsSlice";
import trackerSlice from "./slices/trackerSlice"

const store = configureStore({
    reducer: {
        tracker: trackerSlice,
        popups: popupsSlice,
    }
})
export default store