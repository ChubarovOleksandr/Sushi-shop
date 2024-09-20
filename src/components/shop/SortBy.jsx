import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SortBy = () => {

   const [isOpen, setIsOpen] = useState(false);
   const sortRef = useRef();
   const [searchParams, setSearchParams] = useSearchParams();
   const [activeIndex, setActiveIndex] = useState(-1);

   const sortByList = ['За замовчуванням', 'Спочатку дешевше', 'Спочатку дорожче', 'Спочатку легшe', 'Спочатку важчe', 'За акцією'];
   const sortByTypes = ['', 'price asc', 'price desc', 'weight asc', 'weight desc', 'discount desc'];

   useEffect(() => {
      let toggleIsOpened = event => {
         if (!event.composedPath().includes(sortRef.current)) {
            setIsOpen(false);
         }
      }

      document.addEventListener('click', toggleIsOpened);

      return () => {
         document.removeEventListener('click', toggleIsOpened);
      }
   }, [isOpen])

   useEffect(() => { // if we have already params in url, change textContent of button to current selected [sortByList] item
      if (searchParams != 0) {
         const urlParams = [searchParams.get('sortBy'), searchParams.get('order')];
         if (urlParams[1] === null && urlParams[0] != null) { // if we have sortingBy but haven't order, make order asc by default
            urlParams[1] = 'asc';
         }
         if (!urlParams.includes(null)) {
            sortByTypes.map((string, id) => {
               if (string == urlParams.join(' ')) {
                  setActiveIndex(id);
               }
            })
         }
      }
   }, [])

   const setSortBy = (id) => {
      let newSearchParams = new URLSearchParams(searchParams);
      const searchType = sortByTypes[id].split(' ')[0];
      const searchOrder = sortByTypes[id].split(' ')[1];
      if (id === 0) {
         newSearchParams.delete('sortBy');
         newSearchParams.delete('order');
      } else {
         newSearchParams.set('sortBy', searchType);
         newSearchParams.set('order', searchOrder);
      }
      setSearchParams(newSearchParams);
      setActiveIndex(id);
   }

   return (
      <div className="shop__sortBy" ref={sortRef} onClick={() => setIsOpen(!isOpen)}>
         <div className="shop__sortBy--active">{activeIndex === -1 ? 'Категорією' : sortByList[activeIndex]}</div>
         {isOpen &&
            <ul className="shop__sortBy-list">
               {sortByList.map((value, index) => <li onClick={() => setSortBy(index)} className='shop__sortBy-item' key={index}>{value}</li>)}
            </ul>
         }
      </div>
   );
}