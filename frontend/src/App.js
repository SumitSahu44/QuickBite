
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';


import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/NavBar/Navbar';
import { useState } from 'react';
function App() {

  const [showLogin,setShowLogin] = useState(false)


  return (
  <>
   
   {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : ''}

  
  <div className='home'>
      
      <Navbar setShowLogin={setShowLogin}/>
      
       {/* <div>
          <p className='text-sm mt-[120px] text-center text-[var(--Highlight-text-color)]'>Product</p>
          <h2 className='text-[25px] text-center font-bold'>Most Popular Items</h2>
          
          <Product/>
       </div> */}


       {/* <div>
          <p className='text-sm mt-[120px] text-center text-[var(--Highlight-text-color)]'>Services</p>
       </div> */}
       


       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/order' element={<PlaceOrder/>} />
       </Routes>
    </div>
  </>
  
    
   
  );
}

export default App;
