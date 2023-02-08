import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOficecreams: 90,
  orderedicecreams: 0,
  cancelledicecreams: 0,
  faviconice: 0,
  icecreamsList: {
    name: "",
    qty: 0,
    actualPrice: null,
    discountedPrice: null,
  },
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOficecreams -= action.payload;
      state.orderedicecreams += parseInt(action.payload.qty);

      state.icecreamsList.qty = action.payload.qty;
      state.icecreamsList.actualPrice = action.payload.actualPrice;
      state.icecreamsList.discountedPrice = action.payload.discountedPrice;
      state.icecreamsList.name = action.payload.title;
    },
    restocked: (state, action) => {
      state.numOficecreams += action.payload;
    },
    favs: (state, action) => {
      state.faviconice += action.payload;
    },
    cancelled: (state, action) => {
      state.orderedicecreams -= action.payload;
    },
  },
  extraReducers: {
    ["cake/ordered"]: (state, action) => {
      if (action.payload >= 4) {
        state.numOficecreams--;
        state.orderedicecreams++;
      }
    },
  },
});
export default icecreamSlice.reducer;
export const { ordered, restocked, cancelled, favs } = icecreamSlice.actions;
