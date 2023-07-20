import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputTitle: "",
};

const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    setInputTitle: (state, action) => {
      return action.payload;
    },
  },
});

export const { setInputTitle } = titleSlice.actions;
export default titleSlice.reducer;
