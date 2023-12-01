import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./HOC/Layout/Layout";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage/ProductsDetailsPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import MapPage from "./pages/MapPage/MapPage";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subCategory" element={<ProductsPage />} />
        <Route
          path="/:category/:subCategory/:id"
          element={<ProductsDetailsPage />}
        />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/add-product/" element={<AddProductPage />} />
        <Route
          path="/products/edit-product/:id"
          element={<EditProductPage />}
        />
      </Route>
    </Routes>
  );
}
