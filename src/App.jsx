import { Route, Routes } from 'react-router-dom'
import { Intro } from './components/intro/Intro'
import Shop from './components/shop/Shop'
import Layout from './layouts/Layout'
import Favorites from './components/favorites/Favotires'
import Info from './components/info/Info'
import Basket from './components/basket/Basket'

function App() {


   return (
      <div className="wrapper">
         <Routes>
            <Route index element={<Intro />} /> {/* не вложен в layout для корректного отображения верстки по дизайну */}
            <Route path='/' element={<Layout />}>
               <Route path='basket' element={<Basket />} />
               <Route path='shop' element={<Shop />} />
               <Route path='favorites' element={<Favorites />} />
               <Route path='info' element={<Info />} />
            </Route>
         </Routes>
      </div>
   )
}

export default App
