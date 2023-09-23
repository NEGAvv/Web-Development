import React from 'react';
import '../Header/Header.css';
import Menu from '../Menu/Menu.jsx';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>JYSK</h1>
        <nav>
          <ul>
            <li><a href="#">питання-відповідь</a></li>
            <li><a href="#">акційні газети</a></li>
            <li><a href="#">магазини</a></li>
            <li><a href="#">вхід</a></li>
          </ul>
        </nav>
      </div>
        <Menu/>
    </header>
    
  );
}

export default Header;
