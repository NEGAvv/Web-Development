import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h2>{category}</h2>
    </div>
  );
};

export default CategoryPage;
