import './noStyle.css'
import React, { useState } from 'react';
import './App.css';
import useConsoledState from './hooks/useConsoledState'
import Footer from './components/Footer/Footer.jsx';
import Body from './components/Body/Body.jsx';
import Header from './components/Header/Header.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'


const products = [
  { id: 1, name: 'Стілець обідній JONSTRUP сірий/дуб', price: 1350, imageUrl:'./images/chair1.jpg', checked: false },
  { id: 2, name: 'Стілець обідній EJSTRUP синій/сталь', price: 1650, imageUrl:'./images/chair2.jpg', checked: false },
  { id: 3, name: 'Стілець обідній TUREBY беж тканина', price: 2000, imageUrl:'./images/chair3.jpg', checked: false },
  { id: 4, name: 'Стілець обідній KOKKEDAL сірий/дуб', price: 1850, imageUrl:'./images/chair4.jpg', checked: false },
  { id: 5, name: 'Стілець обідній TOREBY шт.шкіра чорний', price: 1000, imageUrl:'./images/chair5.jpg', checked: false },
  { id: 6, name: 'Стілець обідній GADSTRUP чорний дуб', price: 1000, imageUrl:'./images/chair6.jpg', checked: false },
  { id: 7, name: 'Стілець обідній TYLSTRUP кавовий', price: 1350, imageUrl:'./images/chair7.jpg', checked: false },
  { id: 8, name: 'Стілець обідній JEGIND натура/білий', price: 2000, imageUrl:'./images/chair8.jpg', checked: false },
];



function App() {

const [selectedProduct, setSelectedProduct] = useConsoledState(false);

  const selectProduct = (product) => {
    setSelectedProduct(product);
  };

  const returnToMain = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <Header returnToMain={returnToMain} /> 
      <div className="content">
      {selectedProduct ? (
          <ProductDetails product={selectedProduct} />
        ) : (
          <Body products={products} selectProduct={selectProduct} />
        )}
      </div>
      <Footer /> 

    </div>
  );
}

export default App;
