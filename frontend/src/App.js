import React from 'react';
import { Products, Navbar, Post, Cart} from './components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { API_BASE_URL } from "./config";
import { useEffect, useState } from "react";


const App = () => {
  const [products, setProducts] = useState([]);
  const fetchData = () => {
    fetch(`${API_BASE_URL}/pottery/`, )
      .then(response => response.json())
      .then(data => setProducts(data));
  }

 
  const [cart, setCart] = useState([]);
  const fetchCart = () => {
    fetch(`${API_BASE_URL}/pottery/`, )
      .then(response => response.json())
      .then(data => setCart(data));
  }
  
  useEffect (() => {

    fetchData();
    fetchCart();
  }, []);

   const handleAddToCart = async (productId, quantity) => {
     const item = await fetchCart(productId, quantity);
     console.log(productId);
     

   }

      

  return (
  <BrowserRouter>
    <div>
        <Navbar />
       
       <Routes>
       <Route path="/" element={<Products items={products} onAddToCart={handleAddToCart} />} />

       <Route path='/post/product._Id' element={<Post/>} />

       </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;