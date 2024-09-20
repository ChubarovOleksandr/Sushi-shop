import Item from '../item/Item';
import '../../scss/components/_Favorites.scss';
import '../../scss/components/_Items.scss';
import arrow from '../../assets/img/white-arrow.png';
import heartFill from '../../assets/img/heart-fill.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Favorites = () => {

   const items = useSelector(state => state.favorite.items);

   return (
      <div className="favorites">
         <div className="favorites__body">
            <div className="favorites__title">
               <div className="favorites__image-block">
                  <img src={heartFill} alt="heart" />
               </div>
               <h1>Перегляньте, що ви обирали</h1>
            </div>
            <div className="items">
               <div className="items__body">
                  {items && items.length > 0 ?
                     items.map(itemData => <Item key={itemData.id} item={itemData} isSaved={true} />)
                     :
                     <div className='item__empty'>
                        <div className="item__empty-block">
                           <span>На жаль</span>, зараз тут порожненько 😕
                        </div>
                        <NavLink to='/shop'><img className='item__empty-arrow' src={arrow} alt="arrow" /></NavLink>
                     </div>
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default Favorites;