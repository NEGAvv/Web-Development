import React, { useState } from 'react';
import '../Product/Product.css';

function Product({ product, selectProduct }) {

  const handleClick = () => {
    selectProduct(product); 
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <h3>Ціна: {product.price} грн</h3>
    </div>
  );
}

export default Product;
