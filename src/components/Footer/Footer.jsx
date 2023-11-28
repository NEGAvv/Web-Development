import React from "react";
import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer_main}>
      <div className={styles.footer_container}>
        <div className={styles.footer_columns}>
          {/* Перша колонка */}
          <div className={styles.footer_column}>
            <h3>Категорії товарів</h3>
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
          </div>

          {/* Друга колонка */}
          <div className={styles.footer_column}>
            <h3>Інформація</h3>
            <ul>
              <li>
                <a
                  href="https://jysk.ua/customer-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Відділ по роботі з клієнтами
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/stores-locator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Магазини та графіки роботи
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/umovi-ta-polozhennya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Умови та положення
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/umovi-ta-polozhennya#5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/umovi-ta-polozhennya#6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Повернення без обмежень в часі
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/umovi-ta-polozhennya#8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Політика конфіденційності
                </a>
              </li>
            </ul>
          </div>

          {/* Третя колонка */}
          <div className={styles.footer_column}>
            <h3>JYSK</h3>
            <ul>
              <li>
                <Link to="/">JYSK.com</Link>
              </li>
              <li>
                <a
                  href="https://jysk.ua/presa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Преса
                </a>
              </li>
              <li>
                <a
                  href="https://robota.jysk.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Робота в JYSK
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/pidpysatys-na-rozsylku"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Підписатись на розсилку
                </a>
              </li>
              <li>
                <a
                  href="https://gojysk.com/ua"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GOJYSK.com
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/Sustainability"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Екораціональність
                </a>
              </li>
              <li>
                <a
                  href="https://jysk.ua/korysni-posylannya"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Корисні посилання
                </a>
              </li>

              <li>
                <a
                  href="https://jysk.ua/blahodiynist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Благодійність
                </a>
              </li>
            </ul>
          </div>

          {/* Четверта колонка */}
          <div className={styles.footer_column}>
            <h3>ЦЕНТРАЛЬНИЙ ОФІС</h3>
            <p>ТОВ "ЮСК УКРАЇНА"</p>
            <p>м. Київ</p>
            <p>вул. Іоанна Павла ІІ, 21</p>
            <p>01042</p>
            <h3>Відділ по роботі з клієнтами:</h3>
            <ul>
              <li>Зв’язатися з нами</li>
              <li>Тел: +380442470786</li>
              <li>onlineshopua@jysk.com</li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p>&copy; {new Date().getFullYear()} JYSK</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
