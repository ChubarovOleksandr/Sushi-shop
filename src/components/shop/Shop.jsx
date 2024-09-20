import React, { useEffect, useRef } from 'react';
import '../../scss/components/_Shop.scss';
import '../../scss/components/_Items.scss';
import Slider from './Slider';
import arrowIcon from '../../assets/img/arrow-icon.png'
import Filters from './Filters';
import { useDispatch } from 'react-redux';
import { getItems } from '../../redux/slices/itemSlice';
import Item from '../item/Item';
import { useSelector } from 'react-redux';
import ItemsLoader from '../preloader/Preloader';
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
   const dispatch = useDispatch();
   const filtersRef = useRef();
   const items = useSelector(state => state.items.items);
   const favoriteItems = useSelector(state => state.favorite.items);
   const cartItems = useSelector(state => state.cart.items);
   const isLoadingRef = useRef(true);
   const [searchParams] = useSearchParams();
      
   useEffect(() => {
      let searchParamsArr = [];
      for (let [name, value] of searchParams) {
         searchParamsArr.push(`${name}=${value}`);
      }
      dispatch(getItems(searchParamsArr));
   }, [dispatch, searchParams])

   useEffect(() => {
      isLoadingRef.current = false;
   }, [])


   const ctaHandler = () => {
      filtersRef.current.scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <div className='shop'>
         <div className="shop__body">
            <Slider />
            <button onClick={ctaHandler} className='shop__cta'>
               <img src={arrowIcon} alt="arrow-icon" />
            </button>
            <div className="filters" ref={filtersRef}>
               <Filters />
            </div>
            <div className="items">
               <div className="items__body">
                  {isLoadingRef.current ?
                     <ItemsLoader />
                     :
                     items.map(itemData => (
                        <Item key={itemData.id} item={itemData}
                           isSaved={favoriteItems.some(favoriteItem => favoriteItem.id === itemData.id)}
                           isInCart={cartItems.some(inCart => inCart.id === itemData.id)} />
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default Shop;
