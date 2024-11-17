import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import './Navbar.css'


const Navbar = () => {
  return (
    <nav>
        <div className='nav-container flex justify-between align-middle'>
            <div className='w-[150px]'>
                <img src="images/short-logo.png" />
            </div>
            <div>
                 <ul className='flex justify-between gap-12 align-middle'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Signup</li>
                 </ul>
            </div>
            <div className='search-input-box rounded-lg flex px-4 py-2'>
                <IoSearchSharp />
                 <input type="search" className='pl-2  border-r border-black mr-2' placeholder='search' />
                 <FiShoppingBag />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
