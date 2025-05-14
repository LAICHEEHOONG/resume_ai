import { createSlice } from "@reduxjs/toolkit";

// no need sign in
const initialState = {
  language: "en",
  //   username: "phc05user",
  //   password: "PcD05*01Sep23",
  //   status: 200,
  //   status_2: 0,
  //   firstOpen: true,
};

// dataSlice set a default date

// prevent singin
// prevent singin default set username and password and status to 200
// hidden signout button

// activate singin
// username = "", password = "", status = 0
// show signout button

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    // setUsername: (state, action) => {
    //   state.username = action.payload;
    // },
    // setPassword: (state, action) => {
    //   state.password = action.payload;
    // },
    // setStatus: (state, action) => {
    //   state.status = action.payload
    // },
    // signOut: (state) => {
    //   state.username = ''
    //   state.password = ''
    //   state.status = 0
    // },
    // setStatus_2: (state, action) => {
    //   state.status_2 = action.payload
    // },
    // setFirstOpen: (state, action) => {
    //   state.firstOpen = action.payload
    // }
  },
});

export const {
  setLanguage,
  // setUsername, setPassword, setStatus, signOut, setStatus_2, setFirstOpen
} = languageSlice.actions;

export default languageSlice.reducer;
