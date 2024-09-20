import '../../scss/components/_Basket.scss';
import cart from '../../assets/img/cart.png';
import trash from '../../assets/img/trash.png';
import emptyBin from '../../assets/img/empty-bin.png';
import { useSelector } from 'react-redux';
import ItemList from '../item/ItemList';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromCart, changeTotalPrice } from '../../redux/slices/cartSlice';

const Basket = () => {
   
   const { totalPrice, items: cartItems } = useSelector(state => state.cart);

   const dispatch = useDispatch();

   const removeAllItems = () => {
      cartItems.forEach(item => dispatch(removeFromCart(item)));
      dispatch(changeTotalPrice({isIncrease: false, value: totalPrice}));
   }

   return (
      <div className="basket">
         <div className="basket__wrapper">
            {cartItems.length ?
               <div className="basket__content">
                  <div className="basket__header">
                     <div className="basket__header-left">
                        <img src={cart} alt="cart" />
                        <span>Ваш кошик</span>
                     </div>
                     <div className="basket__header-right">
                        <button className="basket__header-button" onClick={()=> removeAllItems()}>
                           <img src={trash} alt="trash" />
                           Очистити кошик
                        </button>
                     </div>
                  </div>
                  <div className="basket__body">
                     {cartItems.map(itemData => <ItemList key={itemData.id} item={itemData} />)}
                  </div>
                  <div className="basket__footer">
                     <div className="basket__total-price">
                        <span className="basket__total-price-value">{totalPrice}</span>
                     </div>
                     <div className="basket__confirm">
                        <button className="basket__confirm-button">Замовити</button>
                     </div>
                  </div>
               </div>
               :
               <div className="basket__empty">
                  <div className="basket__title"><span>На жаль</span>, зараз тут порожненько 😕</div>
                  <p>Найімовірніше ви ще не додали жодного товару. Щоб щось замовити, перейдіть в <NavLink to={'/shop'}>меню</NavLink></p>
                  <img src={emptyBin} alt="emptyBin" />
               </div>
            }
         </div>
      </div>
   );
}

export default Basket;