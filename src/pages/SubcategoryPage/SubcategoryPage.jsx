import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import Product from "../../components/Product/Product";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const { products } = useContext(ProductContext);

  console.log("Category:", category);
  console.log("Subcategory:", subcategory);

  const subcategoryProducts = products[category][subcategory] || [];

  return (
    <div>
      <h2>{subcategory}</h2>
      {subcategoryProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SubcategoryPage;
