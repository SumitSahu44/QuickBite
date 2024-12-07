import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { IoIosAddCircle } from "react-icons/io";
import { IoListCircle } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-options">
         <NavLink to='/add' className="sidebar-option">
            <IoIosAddCircle className='sidebar-icon'/>
           <p>Add Item</p>
         </NavLink>
     
       
         <NavLink to='/list' className="sidebar-option">
            <IoListCircle className='sidebar-icon'/>
           <p>List Item</p>
         </NavLink>
       
         <NavLink to='/orders' className="sidebar-option">
         <FaBasketShopping className='sidebar-icon'/>
           <p>Orders</p>
         </NavLink>
   
      </div>
    </div>
  )
}

export default Sidebar
