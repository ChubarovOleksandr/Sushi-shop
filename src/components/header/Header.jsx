import { NavLink } from 'react-router-dom';
import '../../scss/components/_Header.scss'
import logoImage from '../../assets/img/logo.png';
import basketImage from '../../assets/img/basket.png';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

const Header = () => {

   const cartItems = useSelector(state => state.cart.items);
   const isMounted = useRef(false);

   if (isMounted.current) {
      const json = JSON.stringify(cartItems)
      localStorage.setItem('cart', json);
   }
   isMounted.current = true;

   return (
      <header className="header">
         <nav className="header__body">
            <div className="left">
               <img src={logoImage} alt="logo" className="header__logo" />
               <NavLink to='basket' className="card__basket">
                  <span className="card__counter">{cartItems.length}</span>
                  <img src={basketImage} className='card__basket-icon' alt="basket" />
                  Кошик
               </NavLink>
            </div>
            <div className="right">
               <NavLink to='/' className='main'>Головна</NavLink>
               <NavLink to='/shop'>Меню</NavLink>
               <NavLink to='/favorites'>Вибране</NavLink>
               <NavLink to='/info'>Інформація</NavLink>
            </div>
         </nav>
      </header>
   );
}

export default Header;