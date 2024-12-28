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
      state.works[workId].workName = workName;
      state.works[workId].workDescription = workDescription;
      state.works[workId].workActivity = workActivity;
      // state.works[workId].workPhotos = workPhotos;
      // state.works[workId].workVideo = workVideo;
      // Поменять под ID а не индексы
    },
    deleteWork: (state, action) => {
      const { workId } = action.payload;
      state.works = state.works.filter((work) => work.workId !== workId);
    },
  },
});
export const { addWork, editWork, deleteWork } = portfolioSlice.actions;

export default portfolioSlice.reducer;
