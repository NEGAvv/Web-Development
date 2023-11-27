import React from "react";
import styles from "../Menu/Menu.module.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_menu}>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link to="/category/bedroom">Спальня</Link>
            </li>
            <li>
              <Link to="/category/bathroom">Ванна</Link>
            </li>
            <li>
              <Link to="/category/office">Офіс</Link>
            </li>
            <li>
              <Link to="/category/livingroom">Вітальня</Link>
            </li>
            <li>
              <Link to="/category/diningRoom">Кухня та їдальня</Link>
            </li>
            <li>
              <Link to="/category/storage">Зберігання</Link>
            </li>
            <li>
              <Link to="/category/windows">Для вікон</Link>
            </li>
            <li>
              <Link to="/category/garden">Для саду</Link>
            </li>
            <li>
              <Link to="/category/forHome">Для дому</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
