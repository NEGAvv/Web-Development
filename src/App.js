import "./noStyle.css";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import ProductProvider, {
  ProductContext,
} from "./HOC/Providers/ProductProvider";
import HomePage from "./pages/HomePage/HomePage";

const admin = { email: "admin@admin.com", password: "admin" };

function App() {
  const value = useContext(ProductContext);
  useEffect(() => {
    localStorage.setItem("admin", JSON.stringify(admin));
  }, []);

  return (
    <div className="App">
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
