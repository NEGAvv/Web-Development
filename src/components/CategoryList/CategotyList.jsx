import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryList.module.css";

const CategoryList = ({ categoryData }) => {
  return (
    <div className={styles.categoryList}>
      <ul>
        {Object.keys(categoryData).map((subCategory) => {
          if (
            subCategory !== "categoryName" &&
            subCategory !== "imageUrl" &&
            subCategory !== "categoryTitle" &&
            subCategory !== "categoryDescription"
          ) {
            const subCategoryItems = categoryData[subCategory];

            if (
              Array.isArray(subCategoryItems) &&
              subCategoryItems.length > 0
            ) {
              const firstItem = subCategoryItems[0];

              // Перевіряємо, чи у першого елемента є 'subCategoryName'
              if (firstItem.subCategoryName) {
                return (
                  <li key={subCategory}>
                    <Link
                      to={`#${subCategory}`}
                      className={styles.categoryLink}
                    >
                      {firstItem.subCategoryName}
                    </Link>
                  </li>
                );
              }
            }
          }
          return null;
        })}
      </ul>
    </div>
  );
};
export default CategoryList;
