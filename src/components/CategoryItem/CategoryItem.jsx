import React from "react";
import { Link } from "react-router-dom";
import styles from "../../pages/CategoryPage/CategoryPage.module.css";

const CategoryItem = ({ subCategory, categoryData }) => {
  if (
    subCategory === "categoryName" ||
    subCategory === "imageUrl" ||
    subCategory === "categoryTitle" ||
    subCategory === "categoryDescription"
  ) {
    return null;
  }

  const subCategoryItems = categoryData[subCategory]?.slice(0, 1) ?? [];

  return (
    <div key={subCategory} className={styles.categoryItem}>
      {subCategoryItems.map((item) => (
        <div key={item.id}>
          <p className={styles.categoryName}>{item.subCategoryName}</p>
          <img
            className={styles.categoryImage}
            src={item.imageUrl}
            alt={item.subCategoryName}
          />
        </div>
      ))}
      {!subCategoryItems.length && (
        <div>Дані для підкатегорії не є масивом або відсутні</div>
      )}
    </div>
  );
};

export default CategoryItem;
