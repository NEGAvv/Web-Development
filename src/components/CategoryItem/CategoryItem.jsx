import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div>
      <h3>{category.name}</h3>
      <Link to={`/${category.slug}`}>Перейти до {category.name} категорії</Link>
    </div>
  );
};

export default CategoryItem;
