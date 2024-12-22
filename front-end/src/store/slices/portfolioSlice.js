import { createSlice } from "@reduxjs/toolkit";

const portfolioState = {
  works: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: portfolioState,
  reducers: {
    addWork: (state, action) => {
      const {
        workName,
        workDescription,
        workActivity,
        workPhotos,
        workVideos,
        workLink,
        workPrice,
        workTime,
      } = action.payload;

      state.works.push({
        workId: state.works.length + 1,
        workName,
        workDescription,
        workActivity,
        workPhotos,
        workVideos,
        workLink,
        workPrice,
        workTime,
      });
    },
  },
});
export const { addWork } = portfolioSlice.actions;

export default portfolioSlice.reducer;
