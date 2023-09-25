import React, { useState } from 'react';
import '../Header/Header.css';
import Menu from '../Menu/Menu.jsx';

const Header = ({selectedItemsCount}) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">JYSK</h1>
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
