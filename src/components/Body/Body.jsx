import React, { useContext } from "react";
import styles from "../Body/Body.module.css";
import Product from "../Product/Product.jsx";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";

const Body = () => {
  const value = useContext(ProductContext);

  return (
    <main className={styles.main}>
      <div className={styles.body_container}>
        <h2 className={styles.title}>Список товарів</h2>
        <div className={styles.product_list}>
          {value.products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;
