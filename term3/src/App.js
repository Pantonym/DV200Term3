import './App.css';
import './css/main.css';

// Import Routes
import { Route, Routes } from 'react-router-dom';

// Import functionality for loading text
import { useState, useEffect } from "react";

// Pages
import Landing from './pages/landing.js';
import Products from './pages/products.js';
import Checkout from './pages/checkout.js';
import Administrator from './pages/administrator.js';

// Import Page Elements
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';

function App() {

  return (

    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/administrator' element={<Administrator />} />
      </Routes>

      <Footer />

    </div>

  );

}

export default App;