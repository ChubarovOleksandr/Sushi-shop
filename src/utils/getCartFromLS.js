import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
   let totalPrice = 0;
   const data = localStorage.getItem('cart');
   const items = data && JSON.parse(data).length != 0 ? JSON.parse(data) : [];
   if(items.length != 0){
      totalPrice = calcTotalPrice(items);
   }
   return {items, totalPrice};
}