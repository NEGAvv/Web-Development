import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

const ProductsDetailsPage = () => {
  const { id, category, subCategory } = useParams();
  const { products } = useContext(ProductContext);

  // Знаходження потрібного продукту за id, category та subCategory
  const product = products[category]?.[subCategory]?.find((p) => p.id == id);

  console.log(product);

  return (
    <>
      <Breadcrumb />
      <ProductDetails product={product} />
    </>
  );
};

export default ProductsDetailsPage;
