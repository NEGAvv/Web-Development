import React, { useContext } from "react";
import styles from "../Body/Body.module.css";
import Product from "../Product/Product.jsx";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";

const Body = () => {
  const { products } = useContext(ProductContext);

  return (
    <main className={styles.main}>
      <div className={styles.body_container}>
        <h2 className={styles.title}>Список товарів</h2>
        {Object.entries(products).map(([category, subcategories]) => (
          <div key={category} className={styles.product_list}>
            <h3>{category}</h3>
            {Object.entries(subcategories).map(([subcategory, products]) => (
              <div key={subcategory}>
                <h4>{subcategory}</h4>
                {products.map((product) => (
                  <Link key={product.id} to={`/products/${product.id}`}>
                    <Product product={product} />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;
