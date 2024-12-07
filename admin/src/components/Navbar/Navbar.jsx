import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
       <img className="logo" src={assets.shortLogo} alt="5" />
       <img className="profile" src={assets.profile} alt="" />
    </div>
  )
}

export default Navbar
