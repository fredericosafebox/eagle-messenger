import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalOpen(state) {
      state.modal = true;
    },
    setModalClosed(state) {
      state.modal = false;
    },
  },
});
export const { setModalOpen, setModalClosed } = modalSlice.actions;
export default modalSlice.reducer;
