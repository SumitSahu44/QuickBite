import './index.css'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';


import LoginPopup from './components/LoginPopup/LoginPopup';
import Navbar from './components/NavBar/Navbar';
import { useState, useEffect } from 'react';
function App() {

  //  login component by defalut false 
  const [showLogin,setShowLogin] = useState(false)


  useEffect(() => {
    // if login component is visible or true than screen overflow in Y axis is hidden for no scrolling 
      if (showLogin) {
        document.body.style.overflowY = 'hidden'; // Disable scrolling
      } else {
        document.body.style.overflowY = 'auto'; // Enable scrolling
      }
  
      return () => {
        document.body.style.overflowY = 'auto'; // Ensure scrolling is restored
      };
    }, [showLogin]);


  return (
  <>
   
   {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : ''}

  
  <div className='home'>
      
      <Navbar setShowLogin={setShowLogin}/>
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
