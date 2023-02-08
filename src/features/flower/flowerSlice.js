import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfFlowers: 100,
  orderedflowers: 0,
  cancelledflowers: 0,
  faviconflower: 0,
  flowersList: {
    name: "",
    qty: 0,
    actualPrice: null,
    discountedPrice: null,
  },
};

const flowerSlice = createSlice({
  name: "flower",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfFlowers -= action.payload;
      state.orderedflowers += parseInt(action.payload.qty);

      state.flowersList.qty = action.payload.qty;
      state.flowersList.actualPrice = action.payload.actualPrice;
      state.flowersList.discountedPrice = action.payload.discountedPrice;
      state.flowersList.name = action.payload.title;
    },
    restocked: (state, action) => {
      state.numOfFlowers += action.payload;
    },
    favs: (state, action) => {
      state.faviconflower += action.payload;
    },
    cancelled: (state, action) => {
      state.orderedflowers -= action.payload;
    },
  },
  extraReducers: {
    ["icecream/ordered"]: (state, action) => {
      if (action.payload >= 4) {
        state.numOfFlowers--;
        state.orderedflowers++;
      }
    },
  },
});
export default flowerSlice.reducer;
export const { ordered, restocked, cancelled, favs } = flowerSlice.actions;
