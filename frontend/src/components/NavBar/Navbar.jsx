import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home") ;
  
 const token = localStorage.getItem("token")

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
                <p className='mt-[-10px] text-[var(--Highlight-text-color)]'>*</p>
                </div>
              
                
                 
               </div>
        </div>
    </nav>
  )
}

export default Navbar
