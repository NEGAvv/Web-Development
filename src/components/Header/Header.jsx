import React, { useContext, useState } from "react";
import "../Header/Header.css";
import Menu from "../Menu/Menu.jsx";
import JyskLogo from "../../Jysk_logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../HOC/Providers/AuthProvider";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <header className="header">
      <div className="container">
        <Link className="header-title" to="/">
          <img src={JyskLogo} alt="JYSK" />
        </Link>
        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/">питання-відповідь</Link>
            </li>
            <li>
              <Link to="/">акційні газети</Link>
            </li>
            <li>
              <Link to="/">магазини</Link>
            </li>
            <li>
              <Link to="/" onClick={auth.toggleAuth}>
                {auth.auth ? "Logout" : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="market-cart"></div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
