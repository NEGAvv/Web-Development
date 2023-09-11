import React from 'react';
import '../style/Header.css';

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
    </header>
  );
}

export default Header;
