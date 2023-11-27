import "./noStyle.css";
import React, { useContext, useState } from "react";
import "./App.css";
import useConsoledState from "./hooks/useConsoledState";
import Footer from "./components/Footer/Footer.jsx";
import Body from "./components/Body/Body.jsx";
import Header from "./components/Header/Header.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import ProductProvider, {
  ProductContext,
} from "./HOC/Providers/ProductProvider";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const value = useContext(ProductContext);

  return (
    <div className="App">
      <div className="content">
        <HomePage />
        {/* <Body /> */}
      </div>
    </div>
  );
}

export default App;
