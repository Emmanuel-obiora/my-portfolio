import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/panther1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello i'm</h5>
        <h1>Emmanuel Obiora</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
