import { createSlice } from "@reduxjs/toolkit";

const portfolioState = {
  works: [
    // {
    //   workId: 1,
    //   workName: "",
    //   workDescription: "",
    //   workPreview: "",
    //   workPhotos: [],
    //   workVideos: [],
    //   workLink: "",
    //   workPrice: 0,
    //   workTime: 0,
    // },
  ],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: portfolioState,
  reducers: {
    addWork: (state, action) => {
      const {
        workName,
        workDescription,
        workPreview,
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
        workPreview,
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
