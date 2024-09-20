import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../scss/components/_Shop.scss';
import { NavLink } from 'react-router-dom';

const ShopSlider = () => {

   const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: true,
   };

   return (
      <Slider {...settings}>

         <div className='slider__item slider__coupon'>
            <div className="overlay"></div>
            <h1 className="slider__item-title">Отримайте <span>10%</span><br />знижку!</h1>
            <p className="slider__item-subtitle">Порадуйте себе та близьких дивовижним кулінарним досвідом!
               Наші неповторні роли – це справжнє втілення <span>смаку</span> та <span>задоволення</span></p>
            <NavLink to='/info' className='slider__item-button'>Забрати</NavLink>
         </div>

         <div className='slider__item slider__birthday'>
            <div className="overlay"></div>
            <h2 className="slider__item-title">Розгадайте<br />секрети смаку</h2>
            <p className="slider__item-subtitle">
               Створюйте яскраві спогади разом із нами, вибираючи <span>подарункові талони</span>, які запам'ятаються на довгі роки.</p>
            <NavLink to='/info' className='slider__item-button'>Докладніше</NavLink>
         </div>
         
         <div className='slider__item slider__delievery'>
            <div className="overlay"></div>
            <h3 className="slider__item-title"><span>Швидка i безкоштовна</span> доставка прямо до Вас!</h3>
            <p className="slider__item-subtitle">До 59 хв</p>
            <NavLink to='/info' className='slider__item-button'>Докладніше</NavLink>
         </div>
      </Slider>
   )
}

export default ShopSlider;