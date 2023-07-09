import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

export  function Header() {
  return (
    <div className='header'>
        <div className="header__logo"><p>.Food</p></div>
        <div className="header__menu">
          <ul className='menu__item' >
              <Link to="/"><li><a>Home</a></li> </Link>
              <Link to="/menu"><li><a>Menu</a></li></Link>
              <Link to="/about"><li><a>About</a></li></Link>
              <Link to="/contact"><li><a>Contact</a></li></Link>
          </ul>
        </div>
       
    </div>
  )
}
