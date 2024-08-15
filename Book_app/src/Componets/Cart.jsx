import React from "react";
import Header from "../Sharedcomponets/Header";
import Footer from "../Sharedcomponets/Footer";
import ListedCart from "../Sharedcomponets/ListedCart";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="pt-32">
      <Header />
      <ListedCart/>
     
      <Footer />
    </div>
  );  
};

export default Cart;
