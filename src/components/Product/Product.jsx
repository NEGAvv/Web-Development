import React, { useState } from 'react';
import '../Product/Product.css';

function Product({ product }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const productClass = isSelected ? 'product selected' : 'product';

  return (
    <div className={productClass} onClick={handleClick}>
      <img src={product.imageUrl} alt={product.name} />
      <p >{product.name}</p>
      <h3>Ціна: {product.price} грн</h3>
    </div>
  );
}

export default Product;
