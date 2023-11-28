import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";
import styles from "./CategoryPage.module.css";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import CategoryList from "../../components/CategoryList/CategotyList";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const CategoryPage = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  if (!products[category]) {
    return <div>Категорія не знайдена</div>;
  }

  const categoryData = products[category];

  return (
    <>
      <Breadcrumb />
      <div className={styles.categoryContainer}>
        <CategoryList categoryData={categoryData} />
        <div className={styles.mainContent}>
          <p className={styles.categoryTitle}>{categoryData.categoryTitle}</p>
          <p className={styles.categoryDescription}>
            {categoryData.categoryDescription}
          </p>
          {Object.keys(categoryData).map((subCategory) => (
            <Link
              key={subCategory}
              to={`/${category}/${subCategory}`}
              className={styles.viewProductsLink}
            >
              <CategoryItem
                key={subCategory}
                subCategory={subCategory}
                categoryData={categoryData}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
