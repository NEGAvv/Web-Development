import React, { useContext, useEffect, useState } from "react";
import styles from "../Header/Header.module.css";
import Menu from "../Menu/Menu.jsx";
import JyskLogo from "../../Jysk_logo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
import { Button } from "antd";
import LoginModal from "../LoginModal/LoginModal";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartModal from "../CartModal/CartModal";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

const Header = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [registrationModalOpen, setRegistrationModalOpen] = useState(false);

  //update an icon of amount items in cart
  useEffect(() => {
    const updateCartItemCount = () => {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      const itemCount = cartData ? cartData.length : 0;
      setCartItemCount(itemCount);
    };
    updateCartItemCount();
    const intervalId = setInterval(updateCartItemCount, 800);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleModal = () => {
    setRegistrationModalOpen(!registrationModalOpen);
  };

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    auth.toggleAuth();
    navigate("/");
  };
  const isLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("user from Local Storage:", user);

    if (
      user &&
      user.length > 0 &&
      user[0].hasOwnProperty("email") &&
      user[0].hasOwnProperty("password")
    ) {
      console.log("User is logged in.");
      return true;
    } else {
      console.log("User is not logged in.");
      return false;
    }
  };

  return (
    <header className={styles.main_header}>
      <div className={styles.header_container}>
        <Link className={styles.header_title} to="/">
          <img src={JyskLogo} alt="JYSK" />
        </Link>
        <nav className={styles.header_nav}>
          <ul>
            <li>
              <Link to="/products">Усі товари</Link>
            </li>
            <li>
              <a
                href="https://akciyna-gazeta.jysk.ua/ed3d11f7_4c6d_451a_9546_ac37416a88fd/?page=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                акційні газети
              </a>
            </li>
            <li>
              <Link to="/map">магазини</Link>
            </li>

            <li onClick={handleOpenCartModal} className={styles.cart}>
              <ShoppingCartOutlined style={{ fontSize: "24px" }} />
              {cartItemCount > 0 && (
                <span className={styles.cartItemCount}>{cartItemCount}</span>
              )}
            </li>
            <li>
              {console.log(isLoggedIn())}
              {isLoggedIn() ? (
                <Button onClick={handleLogout}>
                  <LogoutOutlined /> Вихід
                </Button>
              ) : (
                <Button onClick={toggleModal}>
                  <LoginOutlined /> Вхід
                </Button>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <Menu />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        cartItems={[]}
      />
      <RegistrationModal isOpen={registrationModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default Header;
