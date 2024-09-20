import '../../scss/components/_Info.scss';
import AccordionItem from './AccordionItem';

const Info = () => {



   return (
      <div className="info">
         <div className="info__title">
            <span>%</span>
            <h1>Інформацiя та бонуси</h1>
         </div>
         <div className="accordion">
            <AccordionItem title={'Забери замовлення сам і отримай знижку у 10%!'}>
               <p className="accordion__text">Забери суші у Кропивницькому з самовивозом з нашої точки і отримай знижку 10%.
                  Точка самовивозу знаходиться за адересою вул. Полтавська 28
               </p>
               <p className="accordion__text">Вигідна пропозиція для тих, хто живе або працює поруч з нами! Тож швидше біжи забирати знижку)</p>
               <p className="accordion__text accordion__text--alert">P.S Знижка не підсумовується з іншими акційними пропозиціями!</p>
            </AccordionItem>
            <AccordionItem title={'День Народження – знижка 10%'}>
               <p className="accordion__text">Акція діє як в день свята так і тиждень після Дня народження!
                Знижка активується після надання документа, який підтверджує, що Ви іменинник.</p>
            </AccordionItem>
            <AccordionItem title={'Подарункові талони для твоєї половинки!'}>
               <p className="accordion__text">Подарункові талони - це чудовий спосіб порадувати вашу половинку, друзів або колег і дозволити їм самостійно обрати смаколики з нашого рознообразного меню.</p>
               <p className="accordion__text">Ми пропонуємо талони на різні суми, щоб ви могли знайти той, який задовольнить всі їхні бажання. Нехай ваші близькі відчувають смак Японії, обираючи саме те, що хочуть спробувати!</p>
               <p className="accordion__text">Ви можете купити талон на необмежений термін від <span>250</span> до <span>10.000</span> ₴</p>
            </AccordionItem>
         </div>
      </div>
   );
}

export default Info;