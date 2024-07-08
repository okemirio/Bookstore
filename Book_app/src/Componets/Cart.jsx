import React from 'react'
import Header from '../Sharedcomponets/Header';
import ListedCart from '../Sharedcomponets/ListedCart';
import Footer from '../Sharedcomponets/Footer';
import { Link } from 'react-router-dom';

 const Cart = () => {
  return (
    <div>
  <Header/>
  <ListedCart/>
<Footer/>
    </div>
  )
}

export default Cart;