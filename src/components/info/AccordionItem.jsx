import { useRef, useState } from "react";
import '../../scss/components/_Info.scss';

const AccordionItem = ({ children, title }) => {

   const contentRef = useRef();

   const onClick = (e) => {
      e.target.classList.toggle('active');
      if (contentRef.current.style.maxHeight) {
         contentRef.current.style.maxHeight = null;
      } else {
         contentRef.current.style.maxHeight = 200 + "px";
      }
   }

   return (
      <div className="accordion__item">
         <button className="accordion__button" onClick={onClick}>{title}</button>
         <div className="accordion__content" ref={contentRef}>
            {children}
         </div>
      </div>
   );
}

export default AccordionItem;