import React, { useState } from "react";
import styles from "../Product/Product.module.css";

function Product({ product }) {
  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <p>{product.name}</p>
        <h3>Ціна: {product.price} грн</h3>
      </div>
    </div>
  );
}

export default Product;
