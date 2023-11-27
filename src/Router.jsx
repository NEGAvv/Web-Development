import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Layout from "./HOC/Layout/Layout";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Route>
    </Routes>
  );
}
