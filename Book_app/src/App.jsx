// App.js
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Componets/Login';
import Register from './Componets/Register';
import Home from './Componets/Home';
import About from './Componets/About';
import { useSelector, useDispatch } from 'react-redux';
import { all_products } from './constant';
import { useEffect } from 'react';
import { post_product } from './app/Features/product/product';
import Shop from './Componets/Shop'
import Contact from './Componets/Contact'
import Search from './Componets/Search';
import Cart from './Componets/Cart';
import Checkout from './Componets/Checkout';
import Order from './Componets/Order';
import Dashboard from './Adim/Dashbord';
import Product from './Adim/Product';
import Orders from './Adim/Orders';
import User from './Adim/User';
import Messages from './Adim/Messages';



const App = () => {
  
    //grab data from redux
    const all_data_from_redux = useSelector(function (state) {
      return state.productStoreReducer;
    });
    const dispatch = useDispatch();
    console.log(all_data_from_redux);
    const products = all_data_from_redux
    console.log(products);
  
    //immediately the app component renders, i want store those data in the redux store
    useEffect(function () {
      dispatch(post_product(all_products));
    },[]); //empty bbracket - or dpeendency - indicate one time call
  
    
    
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/Shop' element={<Shop/>} />
          <Route path='/contact'element={<Contact/>} />
          <Route path='/search'element={<Search/>} />
          <Route path='/cart'element={<Cart/>} />
          <Route path='/checkout'element={<Checkout/>} />
          <Route path='/orders'element={<Order/>} />
          <Route path='/admin/dashboard' element={<Dashboard/>} />
          <Route path='/admin/products' element={<Product/>} />
          <Route path='/admin/orders' element={<Orders/>} />
          <Route path='/admin/users' element={<User/>} />
          <Route path='/admin/messages' element={<Messages/>} />





        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
