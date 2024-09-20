export const calcTotalPrice = (arr) => {
   let totalPrice = 0;
   arr.map(item => {
      const price = item.discount != 0 ? item.discount : item.price;
      totalPrice += (price * item.selected);
   })
   return totalPrice;
}