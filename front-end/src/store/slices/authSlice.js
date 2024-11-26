import { createSlice } from "@reduxjs/toolkit";

const authState = {
  email: "example@gmail.com",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    setAuthData: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
