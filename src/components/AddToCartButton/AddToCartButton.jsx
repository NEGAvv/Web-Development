import React from "react";
import styles from "../ProductDetails/ProductDetails.module.css"; // Замініть це на шлях до вашого файлу стилів

const AddToCartButton = ({ product }) => {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = existingCart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    console.log("Додано в кошик");
  };

  return (
    <button className={styles.addMarketBtn} onClick={handleAddToCart}>
      Додати в кошик
    </button>
  );
};

export default AddToCartButton;
