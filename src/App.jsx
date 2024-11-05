import { useState } from "react";


import { Routes, Route} from "react-router-dom";
import HomePage from './Components/HomePage';
import ProductPage from './Components/ProductPage';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/cart';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PlaceOrder from './Components/PlaceOrder';
import Confirmation from './Components/Confirmation';

import './App.css'

function App() {
  const [count, setCount]= useState(0)

  return (
    <>
    
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
      <Footer/>
     
    
    </>
  )
}

export default App
