import React, { useContext } from "react";
import styles from "../Body/Body.module.css";
import Product from "../Product/Product.jsx";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link, useParams } from "react-router-dom";

const Body = () => {
  const { products } = useContext(ProductContext);
  const { category, subCategory } = useParams();

  // Відображення товарів за вибраною категорією та підкатегорією
  const renderProducts = () => {
    if (
      category &&
      subCategory &&
      products[category] &&
      products[category][subCategory]
    ) {
      return products[category][subCategory].map((product) => (
        <Link key={product.id} to={`/${category}/${subCategory}/${product.id}`}>
          <Product product={product} />
        </Link>
      ));
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.body_container}>
        <h2 className={styles.title}>Список товарів</h2>
        <div className={styles.product_list}>{renderProducts()}</div>
      </div>
    </main>
  );
};

export default Body;
