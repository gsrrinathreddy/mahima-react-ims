import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import chocolateReducer from "../features/chocolates/chocolateSlice";
import flowerReducer from "../features/flower/flowerSlice";
import cartReducer from "../features/carts/cartSlice";
import logger from "redux-logger";
import favoriteReducer from "../features/favorite/favoriteSlice";
import userReducer from "../features/users/usersSlice";
import productReducer from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    chocolate: chocolateReducer,
    flower: flowerReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
