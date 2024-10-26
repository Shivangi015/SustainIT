import './App.css';
import Navbar from './components/navbar/Navbar.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home.js'
import EcoStore from './Pages/eco.js'
import SecondHandMarket from './Pages/second.js';
import Product from './Pages/Product.js'
import Login from './Pages/login.js'
import Cart from './Pages/cart.js'
function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ecoStore' element={<EcoStore/>}/>
          <Route path='/secondHand' element={<SecondHandMarket/>}/>
          <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
