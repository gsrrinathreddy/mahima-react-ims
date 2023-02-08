import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfChocolates: 90,
  orderedchocolates: 0,
  cancelledchocolates: 0,
  faviconchoco: 0,
  chocolatesList: {
    name: "",
    qty: 0,
    actualPrice: null,
    discountedPrice: null,
  },
};

const chocolateSlice = createSlice({
  name: "chocolate",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfChocolates -= action.payload;
      state.orderedchocolates += parseInt(action.payload.qty);

      state.chocolatesList.qty = action.payload.qty;
      state.chocolatesList.actualPrice = action.payload.actualPrice;
      state.chocolatesList.discountedPrice = action.payload.discountedPrice;
      state.chocolatesList.name = action.payload.title;
    },
    restocked: (state, action) => {
      state.numOfChocolates += action.payload;
    },
    favs: (state, action) => {
      state.faviconchoco += action.payload;
    },
    cancelled: (state, action) => {
      state.orderedchocolates -= action.payload;
    },
  },
});
export default chocolateSlice.reducer;
export const { ordered, restocked, cancelled, favs } = chocolateSlice.actions;
