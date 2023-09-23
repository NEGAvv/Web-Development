import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          {/* Перша колонка */}
          <div className="footer-column">
            <h3>Категорії товарів</h3>
            <ul>
              <li>Спальня</li>
              <li>Ванна</li>
              <li>Офіс</li>
              <li>Вітальня</li>
              <li>Кухня та їдальня</li>
              <li>Зберігання</li>
              <li>Для вікон</li>
              <li>Для саду</li>
              <li>Для дому</li>
              <li>Усі категорії</li>
            </ul>
          </div>

          {/* Друга колонка */}
          <div className="footer-column">
            <h3>Інформація</h3>
            <ul>
              <li>Відділ по роботі з клієнтами</li>
              <li>Магазини та графіки роботи</li>
              <li>Умови та положення</li>
              <li>Доставка</li>
              <li>Повернення без обмежень в часі</li>
              <li>Політика конфіденційності</li>
              <li>Змінити згоду на використання cookies</li>
              <li>Безготівковий розрахунок</li>
            </ul>
          </div>

          {/* Третя колонка */}
          <div className="footer-column">
            <h3>JYSK</h3>
            <ul>
              <li>JYSK.com</li>
              <li>Преса</li>
              <li>Робота в JYSK</li>
              <li>Підписатись на розсилку</li>
              <li>GOJYSK.com</li>
              <li>Екораціональність</li>
              <li>Корисні посилання</li>
              <li>Благодійність</li>
            </ul>
          </div>

          {/* Четверта колонка */}
          <div className="footer-column">
            <h3>ЦЕНТРАЛЬНИЙ ОФІС</h3>
            <p>ТОВ "ЮСК УКРАЇНА"</p>
            <p>м. Київ</p>
            <p>вул. Іоанна Павла ІІ, 21</p>
            <p>01042</p>
            <h3>Відділ по роботі з клієнтами:</h3>
            <ul>
              <li>Зв’язатися з нами</li>
              <li>Тел: +380442470786</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JYSK</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
