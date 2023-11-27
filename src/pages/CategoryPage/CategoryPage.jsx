import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";
import styles from "./CategoryPage.module.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import CategoryList from "../../components/CategoryList/CategotyList";

const CategoryPage = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  if (!products[category]) {
    return <div>Категорія не знайдена</div>;
  }

  const categoryData = products[category];

  return (
    <div className={styles.categoryContainer}>
      <CategoryList categoryData={categoryData} />
      <div className={styles.mainContent}>
        <h2>{categoryData.categoryName}</h2>
        {Object.keys(categoryData).map((subCategory) => (
          <CategoryItem
            key={subCategory}
            subCategory={subCategory}
            categoryData={categoryData}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
