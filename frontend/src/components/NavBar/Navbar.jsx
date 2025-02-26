import React, { useState } from 'react'; // React-related imports first
import { Link, useNavigate } from 'react-router-dom'; // Third-party library imports
import { IoSearchSharp, IoLogOut } from 'react-icons/io5';
import { FiShoppingBag } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { FaBagShopping } from 'react-icons/fa6';

import './Navbar.css'; // Local file imports come last
//  set show login is for check user loged in or not 
const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home") ;
  // const [cart, setCart] = us 
 const token = localStorage.getItem("token")
 const navigate = useNavigate();

//  logot function for user 
 const Logout = ()=>{
     localStorage.removeItem("token");
     navigate("/")
 }


 let cart = JSON.parse(localStorage.getItem('cart')) || []; { /* get cart from localstorage */}

  return (
    <nav>
        <div className='nav-container bg-white flex justify-between align-middle'>
            <div className='w-[150px]'>
             <Link to='/'><img src="images/short-logo.png" alt='' /></Link>   
            </div>
            <div>
                 <ul className='flex justify-between gap-12 align-middle'>
                    <li onClick={()=>{setMenu("home")}} className={menu==='home' ? "active":''}>Home</li>
                    <li onClick={()=>{setMenu("about")}} className={menu==="about"?'active':''}>About</li>
                    <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?'active':''}>Menu</li>

                    {
                        !token ? <li onClick={()=>{setShowLogin(true);setMenu("signIn")}}>SignIn</li> : 
                        <div className='navbar-profile'>
                             <CgProfile/>
                             <ul className='nav-profile-dropdown'>
                              <li className="flex items-center gap-x-2 text-[16px]"><FaBagShopping/>Orders</li>
                              <li onClick={Logout} className="flex items-center gap-x-2 text-[16px]"><IoLogOut/>Logout</li>
                             
                             </ul>
                        </div>
                    }
                    
                 </ul>
            </div>
            <div className='search-input-box rounded-lg flex px-4 py-2'>
               <div className='flex items-center'>
                 <IoSearchSharp />
                 <input type="search" className='pl-2  border-r border-black mr-2' placeholder='search' />
                 
                </div> 
                <div className='flex'>
                <Link to="./cart"><FiShoppingBag /></Link>  
                <p className='mt-[-10px] text-[var(--Highlight-text-color)]'>{cart.length <=0 ? '*' : cart.length}</p>
                </div>
              
                
                 
               </div>
        </div>
    </nav>
  )
}

export default Navbar
