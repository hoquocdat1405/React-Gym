import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
const Header = () => {
  return (
    <div className="header">
      <div className="blur"></div>
      <img src={Logo} alt="" className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Program</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header