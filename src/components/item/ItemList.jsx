import '../../scss/components/_ItemList.scss';
import remove from '../../assets/img/close.png';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, changeSelectedValue, changeTotalPrice } from '../../redux/slices/cartSlice';

const ItemList = ({ item }) => {

   const price = item.discount != 0 ? item.discount : item.price
   const minusBtnRef = useRef();
   const dispatch = useDispatch();

   const setSelectedValue = (isIncrease) => {
      let newSelectedValue = item.selected;

      if (isIncrease) {
         newSelectedValue++;
         dispatch(changeSelectedValue({ newValue: newSelectedValue, id: item.id }))
      } else if (newSelectedValue > 1) {
         newSelectedValue--;
         dispatch(changeSelectedValue({ newValue: newSelectedValue, id: item.id }))
      }

      newSelectedValue != 1 ? minusBtnRef.current.classList.remove('disabled') : minusBtnRef.current.classList.add('disabled');
   }

   const changeCounter = (isIncrease) => {

      setSelectedValue(isIncrease);
      dispatch(changeTotalPrice({isIncrease, value: price}));

   }

   const removeItem = (item) => {
      dispatch(removeFromCart(item));
      dispatch(changeTotalPrice({isIncrease: false, value: price * item.selected}));

   }

   return (
      <div className="item">
         <div className="item__topic">
            <img src={item.imageUrl} alt="itemImage" />
            <span className="item__title">{item.name}</span>
         </div>
         <div className="item__counter">
            <button ref={minusBtnRef} className="item__counter-button disabled minus" onClick={() => changeCounter(false)}>-</button>
            <span className="item__counter-value">{item.selected}</span>
            <button className="item__counter-button plus" onClick={() => changeCounter(true)}>+</button>
         </div>
         <div className="item__price">
            <span className="item__price-value">{item.selected * price}</span>
         </div>
         <div className="item__remove">
            <button className="item__remove-button" onClick={() => removeItem(item)}>
               <img src={remove} alt="delete" />
            </button>
         </div>
      </div>

   );
}

export default ItemList;