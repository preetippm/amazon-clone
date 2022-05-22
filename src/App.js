import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    //BEM
   
    <div className="app">
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/checkout" element={<Checkout />} />

      <Route path="/" element={<Home/>} />
      </Routes>

    </BrowserRouter>
    </div>
    
  );
}

export default App;
