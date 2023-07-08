import React from 'react'
import './Header.css'

export  function Header() {
  return (
    <div className='header'>
        <div className="header__logo"><p>.Food</p></div>
        <div className="header__menu">
          <ul className='menu__item' >
              <li><a>Home</a></li>
              <li><a>Menu</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
          </ul>
        </div>
       
    </div>
  )
}
