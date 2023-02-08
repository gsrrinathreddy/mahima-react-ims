import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
  totalItems: 0,
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  extraReducers: {
    ["cake/favs"]: (state, action) => {
      console.log("favorite", action.payload);
      state.favoriteList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["chocolate/favs"]: (state, action) => {
      console.log("favorite", action.payload);
      state.favoriteList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["icecream/favs"]: (state, action) => {
      console.log("favorite", action.payload);
      state.favoriteList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
    ["flower/favs"]: (state, action) => {
      console.log("favorite", action.payload);
      state.favoriteList.push(action.payload);
      state.totalItems += parseInt(action.payload.qty);
    },
  },
});

export default favoriteSlice.reducer;
