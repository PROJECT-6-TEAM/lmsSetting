import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setInputContent: (state, action) => {
      return action.payload;
    },
  },
});

export const { setInputContent } = contentSlice.actions;
export default contentSlice.reducer;
