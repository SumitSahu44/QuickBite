import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import './Navbar.css'


const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home") ;
  

  return (
    <nav>
        <div className='nav-container flex justify-between align-middle'>
            <div className='w-[150px]'>
                <img src="images/short-logo.png" alt='' />
            </div>
            <div>
                 <ul className='flex justify-between gap-12 align-middle'>
                    <li onClick={()=>{setMenu("home")}} className={menu==='home' ? "active":''}>Home</li>
                    <li onClick={()=>{setMenu("about")}} className={menu==="about"?'active':''}>About</li>
                    <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?'active':''}>Menu</li>
                    <li onClick={()=>{setShowLogin(true);setMenu("signIn")}} className={menu==="signIn"?'active':''}>SignIn</li>
                   
                 </ul>
            </div>
            <div className='search-input-box rounded-lg flex px-4 py-2'>
                <IoSearchSharp />
                 <input type="search" className='pl-2  border-r border-black mr-2' placeholder='search' />
                 <FiShoppingBag /><span className={'text-[15px] mt-[-10px] text-[var(--Highlight-text-color)]' }>*</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
