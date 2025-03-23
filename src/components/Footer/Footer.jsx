import React from 'react'
import './Footer.css'
import git from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import link from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="footer-row">
            <img src={git} alt="" />
            <img src={instagram} alt="" />
            <img src={link} alt="" />
        </div>
        <img className='logo' src={Logo} alt="" />

    </div>
  )
}

export default Footer