import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lock: false,
};

export const lockSlice = createSlice({
  name: "lock",
  initialState,
  reducers: {
    setLock: (state, action) => {
      state.lock = action.payload;
    },
  },
});

export const { setLock } = lockSlice.actions;

export default lockSlice.reducer;
