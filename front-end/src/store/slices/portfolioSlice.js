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
    editWork: (state, action) => {
      const {
        workId,
        workName,
        workDescription,
        workActivity,
        workPhotos,
        workVideo,
      } = action.payload;
      state.works.find((item) => item.workId == workId).workName = workName;
      state.works.find((item) => item.workId == workId).workDescription =
        workDescription;
      state.works.find((item) => item.workId == workId).workActivity =
        workActivity;
      state.works.find((item) => item.workId == workId).workPhotos = workPhotos;
    },
    deleteWork: (state, action) => {
      const { workId } = action.payload;
      state.works = state.works.filter((work) => work.workId !== workId);
    },
  },
});
export const { addWork, editWork, deleteWork } = portfolioSlice.actions;

export default portfolioSlice.reducer;
