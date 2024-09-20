import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";

const initialState = getCartFromLS();

export const cartSlice = createSlice({
   name: 'cartSlice',
   initialState,
   reducers: {
      saveInCart(state, action) {
         const price = action.payload.discount != 0 ? action.payload.discount : action.payload.price;
         state.items.push({ ...action.payload, selected: 1 });
         state.totalPrice = state.totalPrice + price;
      },
      removeFromCart(state, action) {
         state.items.map((item, index) => {
            if (JSON.stringify(action.payload.id) == JSON.stringify(item.id)) {
               state.items.splice(index, 1);
            }
         })
      },
      changeSelectedValue(state, action) {
         const { newValue, id } = action.payload;
         state.items.map((item) => {
            if (JSON.stringify(id) == JSON.stringify(item.id)) {
               item.selected = newValue;
            }
         })
      },
      changeTotalPrice(state, action) {
         const { isIncrease, value } = action.payload;
         isIncrease ? state.totalPrice = state.totalPrice + value : state.totalPrice = state.totalPrice - value;
      }
   }
});

export const { saveInCart, removeFromCart, changeSelectedValue, changeTotalPrice } = cartSlice.actions; 