import React, { useContext } from "react";
import "../Body/Body.css";
import Product from "../Product/Product.jsx";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";

const Body = () => {
  const value = useContext(ProductContext);

  return (
    <main className="main">
      <div className="container">
        <h2>Список товарів</h2>
        <div className="product-list">
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
