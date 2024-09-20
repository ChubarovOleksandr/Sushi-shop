import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./slices/itemSlice";
import { favoriteSlice } from "./slices/favoriteSlice";
import { cartSlice } from "./slices/cartSlice";

const store = configureStore({
   reducer: {
      items: itemSlice.reducer,
      favorite: favoriteSlice.reducer,
      cart: cartSlice.reducer,
   },
});

export { store };