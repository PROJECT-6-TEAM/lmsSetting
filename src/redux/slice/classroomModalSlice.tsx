// modalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  lectureTypeModal: boolean;
  noteModal: boolean;
  linkModal: boolean;
  videoFileModal: boolean;
  lectureDurationModal: boolean;
  commnetModal: boolean;
  replyCommnetModal: boolean;
  [key: string]: boolean;
}

const initialState: ModalState = {
  lectureTypeModal: false,
  noteModal: false,
  linkModal: false,
  videoFileModal: false,
  lectureDurationModal: false,
  commnetModal: false,
  replyCommnetModal: false,
};

const classroomModalSlice = createSlice({
  name: "classroomModal",
  initialState,
  reducers: {
    setModalVisibility: (
      state,
      action: PayloadAction<{ modalName: string; visible: boolean }>,
    ) => {
      const { modalName, visible } = action.payload;
      state[modalName] = visible;
    },
    closeModal: () => initialState,
  },
});

export const { setModalVisibility, closeModal } = classroomModalSlice.actions;
export default classroomModalSlice.reducer;
