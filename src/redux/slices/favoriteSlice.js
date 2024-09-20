import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: [],
}

export const favoriteSlice = createSlice({
   name: 'favoriteSlice',
   initialState,
   reducers: {
      saveInFavorite(state, action) {
         state.items.push(action.payload);
      },
      removeFromFavorite(state, action) {
         state.items.map((item, index) => {
            if (JSON.stringify(action.payload) == JSON.stringify(item)) {
               state.items.splice(index, 1);
            }
         })
      },
   }
});
export const { saveInFavorite, removeFromFavorite } = favoriteSlice.actions;