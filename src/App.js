import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyle";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData,DessertData } from "./components/Products/Data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero /> 
      <Products heading= 'Choose You Favorite' data ={ProductData}/>
      <Feature/>
      <Products heading= 'Sweet for my Sweet Customers' data ={DessertData}/>
      <Footer/>
    </Router>
  );
}

export default App;
