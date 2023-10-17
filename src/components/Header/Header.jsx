import React, { useState } from 'react';
import '../Header/Header.css';
import Menu from '../Menu/Menu.jsx';
import JyskLogo from '../../Jysk_logo.svg'

const Header = ({returnToMain}) => {
  return (
    <header className="header">
      <div className="container">
        <a className="header-title" href="#" onClick={returnToMain} >
        <img
              src={JyskLogo}
              alt="JYSK"
            />
        </a>
        <nav className="header-nav">
          <ul>
            <li><a href="#">питання-відповідь</a></li>
            <li><a href="#">акційні газети</a></li>
            <li><a href="#">магазини</a></li>
            <li><a href="#">вхід</a></li>
          </ul>
        </nav>
        <div className='market-cart'>.</div>
      </div>
        <Menu/>
    </header>
    
  );
}

export default Header;
