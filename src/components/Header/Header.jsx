import React, { useContext, useState } from "react";
import styles from "../Header/Header.module.css";
import Menu from "../Menu/Menu.jsx";
import JyskLogo from "../../Jysk_logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../HOC/Providers/AuthProvider";
import { Button } from "antd";
import LoginModal from "../LoginModal/LoginModal";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";

const Header = () => {
  const auth = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
              <Link to="/">питання-відповідь</Link>
            </li>
            <li>
              <Link to="/">акційні газети</Link>
            </li>
            <li>
              <Link to="/">магазини</Link>
            </li>
            <li>
              {auth.auth ? (
                <Button onClick={auth.toggleAuth}>
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
        {/* <div className={styles.market_cart}></div> */}
      </div>
      <Menu />

      <LoginModal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default Header;
