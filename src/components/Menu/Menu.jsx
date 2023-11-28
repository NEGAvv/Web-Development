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
              <Link to="/bedroom">Спальня</Link>
            </li>
            <li>
              <Link to="/bathroom">Ванна</Link>
            </li>
            <li>
              <Link to="/office">Офіс</Link>
            </li>
            <li>
              <Link to="/livingroom">Вітальня</Link>
            </li>
            <li>
              <Link to="/diningRoom">Кухня та їдальня</Link>
            </li>
            <li>
              <Link to="/storage">Зберігання</Link>
            </li>
            <li>
              <Link to="/windows">Для вікон</Link>
            </li>
            <li>
              <Link to="/garden">Для саду</Link>
            </li>
            <li>
              <Link to="/forHome">Для дому</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
