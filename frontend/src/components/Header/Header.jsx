import React from 'react'
import Navbar from '../NavBar/Navbar'
import { TbPlayerPlayFilled } from "react-icons/tb";

import './Header.css'

const Header = () => {
  return (
     <header className='header-container'>
        <Navbar />
        {/* hero section start  */}

        <div className='flex mt-8 justify-between items-center flex-wrap'>
            <div className='hero-left w-[50%] mt-[-30px] font-medium' >
                <div className='text-[85px]'>
                        <p>Order Your</p>
                        <p className='Highlight-text mt-[-20px]'>Meal</p>
                        <p className=' mt-[-20px]'>In <span className='Highlight-text'> Your College</span></p>
                
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique numquam non explicabo mollitia ipsum alias vitae excepturi blanditiis, expedita optio.
                Aliquam enim praesentium ducimus!</p>
                
              <div className='flex mt-10 items-center gap-[80px] text-center items-center'>
                 <button className='bg-[var(--Highlight-text-color)] h-[50px] w-[180px] text-center rounded-lg text-white'>Order Now</button>
                 <button className='h-[50px] w-[180px] flex border border-orange-500 items-center rounded-lg'><TbPlayerPlayFilled className='text-4xl text-orange-400 text-center float-left mr-[15px] items-center'  /> <p>Order Process</p></button>
                
              </div>

            </div>
            
            <div className='hero-right'>
                <img src="./images/short-chef.png" className='w-[450px]' alt="" srcset="" />
            </div>
        </div>
     </header>
  )
}

export default Header
