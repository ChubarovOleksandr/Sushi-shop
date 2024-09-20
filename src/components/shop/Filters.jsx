import { Categories } from './Categories'
import { SortBy } from './SortBy';

const Filters = () => {
   return ( 
      <div className="shop__filters">
         <span>Сортувати за:</span>         
         <Categories />
         <SortBy />
      </div>
    );
}
 
export default Filters;