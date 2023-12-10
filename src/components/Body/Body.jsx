import React, { useContext } from "react";
import styles from "../Body/Body.module.css";
import Product from "../Product/Product.jsx";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  // const value = useContext(ProductContext);
  const productState = useSelector((state) => state.products);

  return (
    <main className={styles.main}>
      <div className={styles.body_container}>
        <h2 className={styles.title}>Список товарів</h2>
        <div className={styles.product_list}>
          {productState.map((product) => (
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
