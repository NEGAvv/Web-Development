import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const translations = {
    home: "Домашня сторінка",
    category: "Категорія",
    bedroom: "Спальня",
    bathroom: "Ванна",
    office: "Офіс",
    livingroom: "Вітальня",
    diningRoom: "Кухня Та Їдальня",
    storage: "Зберігання",
    windows: "Для Вікон",
    garden: "Для Саду",
    forHome: "Для Дому",
    accessories: "Аксесуари",
    beds: "Ліжка",
    pillows: "Подушки",
    mirrors: "Дзеркала",
    wardrobes: "Шафи",
    towels: "Рушники",
    bathrobes: "Халати та капці",
    officeChairs: "Крісла офісні",
    tables: "Столи",
    shelves: "Шафи",
    chairs: "Стільці",
    sofas: "Софи",
    buffets: "Буфети",
    curtains: "Штори",
    rollerBlinds: "Ролети",
    loungeNetworks: "Лаунж сети",
    childrenFurniture: "Дитячі меблі",
    blankets: "Пледи",
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        {pathnames.length > 0 && (
          <nav>
            <ul>
              <li>
                <Link to="/">{translations.home}</Link>
              </li>
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                const translatedName = translations[name] || name;
                return (
                  <li key={name}>
                    {isLast ? (
                      <span>/ {translatedName}</span>
                    ) : (
                      <>
                        <span>/</span>
                        <Link to={routeTo}> {translatedName} </Link>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
