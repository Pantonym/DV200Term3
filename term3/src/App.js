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
import SingleItem from './pages/singleitem';

// Import Page Elements
import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import LogIn from './components/login';
import SignUp from './components/signup';

function App() {

  return (

    <div className="App">
      <Navbar />
      <LogIn />
      <SignUp />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/administrator' element={<Administrator />} />
        <Route path='/singleitem' element={<SingleItem />} />
      </Routes>

      <Footer />

    </div>

  );

}

export default App;