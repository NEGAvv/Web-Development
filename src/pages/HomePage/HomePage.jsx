import React, { useContext } from "react";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.categoryContainer}>
      <h2 className={styles.categoryTitle}>Категорії товарів</h2>
      {Object.keys(products).map((category) => (
        <Link
          key={category}
          to={`/category/${category}`}
          className={styles.categoryItem}
        >
          <h3 className={styles.categoryName}>
            {products[category].categoryName}
          </h3>
          <img
            className={styles.categoryImage}
            src={products[category].imageUrl}
            alt={category}
          />
        </Link>
      ))}
    </div>
  );
};
export default HomePage;
