import React from "react";
import styles from "../Menu/Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_menu}>
        <nav className={styles.menu}>
          <ul>
            <li>
              <a href="/">Спальня</a>
            </li>
            <li>
              <a href="/">Ванна</a>
            </li>
            <li>
              <a href="/">Офіс</a>
            </li>
            <li>
              <a href="/">Вітальня</a>
            </li>
            <li>
              <a href="/">Кухня та їдальня</a>
            </li>
            <li>
              <a href="/">Зберігання</a>
            </li>
            <li>
              <a href="/">Для вікон</a>
            </li>
            <li>
              <a href="/">Для саду</a>
            </li>
            <li>
              <a href="/">Для дому</a>
            </li>
            <li>
              <a href="/">Outlet</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
