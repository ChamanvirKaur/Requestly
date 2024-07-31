import React, { useState } from 'react'
import './Header.css'
function Header() {
  const [showHover,setshowHover]=useState(false);
  
  const openhover = (event) =>{
    setshowHover(true);
  }
  const closehover = (event) =>{
    setshowHover(false);
  }
  return (
    <div className='header-content'>
        <div className="header-logo">
            <img className='header-logo-image' src= "./images/requestlylogo.png" alt="" />
        </div>
        <div className="header-options">
           <ul>
            <li>Login</li>
            <li>Signup</li>
           </ul>
        </div>
    </div>
  )
}

export default Header
