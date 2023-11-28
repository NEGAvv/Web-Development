import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Layout from "./HOC/Layout/Layout";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductsDetailsPage from "./pages/ProductsDetailsPage/ProductsDetailsPage";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subCategory" element={<ProductsPage />} />
        <Route
          path="/:category/:subCategory/:id"
          element={<ProductsDetailsPage />}
        />
      </Route>
    </Routes>
  );
}
