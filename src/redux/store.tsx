import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import contentReducer from "./contentSlice";

import classroomModalReducer from "./slice/classroomModalSlice";

export const store = configureStore({
  reducer: {
    title: titleReducer,
    content: contentReducer,
    classroomModal: classroomModalReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
