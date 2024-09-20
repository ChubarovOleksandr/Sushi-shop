import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Categories = () => {

   const [activeIndex, setActiveIndex] = useState(-1);
   const [isOpen, setIsOpen] = useState(false);
   const categoriesRef = useRef();
   const [searchParams, setSearchParams] = useSearchParams();
   const categories = ['Усi', 'Сети', 'Роли'];

   useEffect(() => {
      let toggleIsOpened = event => {
         if (!event.composedPath().includes(categoriesRef.current)) {
            setIsOpen(false);
         }
      }

      document.addEventListener('click', toggleIsOpened);

      return () => {
         document.removeEventListener('click', toggleIsOpened);
      }
   }, [isOpen]);

   useEffect(() => { // if we have already params in url, change textContent of button to current selected [categories] item
      if (searchParams != 0) {
         const urlParam = searchParams.get('category');
         if(urlParam){
            setActiveIndex(urlParam)
         }
      }
   }, [])

   const setCategoryId = (id) => {
      let newSearchParams = new URLSearchParams(searchParams); 
      if(id === 0){
         newSearchParams.delete('category');
      } else {
         newSearchParams.set('category', id);
      }
      setSearchParams(newSearchParams);
      setActiveIndex(id);
   }

   return (
      <div className="shop__categories" ref={categoriesRef} onClick={() => setIsOpen(!isOpen)}>
         <div className="shop__category--active">{activeIndex === -1 ? 'Типом' : categories[activeIndex]}</div>
         {isOpen &&
            <ul className="shop__categories-list">
               {categories.map((value, index) => <li onClick={() => setCategoryId(index)} className='shop__categories-item' key={index}>{value}</li>)}
            </ul>
         }
      </div>
   );
}