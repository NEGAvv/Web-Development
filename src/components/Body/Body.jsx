import React from 'react';
import '../Body/Body.css';
import Product from '../Product/Product.jsx';

const Body = ({ products, selectProduct }) => {
  return (
    <main className="main">
      <div className="container">
        <h2>Список товарів</h2>
        <div className="product-list">
          {products.map(product => (
            <Product key={product.id} product={product} selectProduct={selectProduct} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Body;
