// App.js
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Componets/Login";
import Register from "./Componets/Register";
import Home from "./Componets/Home";
import About from "./Componets/About";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { post_product } from "./app/Features/product/product";
import Shop from "./Componets/Shop";
import Contact from "./Componets/Contact";
import Search from "./Componets/Search";
import Cart from "./Componets/Cart";
import Checkout from "./Componets/Checkout";
import Order from "./Componets/Order";
import Dashboard from "./Adim/Dashbord";
import Product from "./Adim/Product";
import Orders from "./Adim/Orders";
import User from "./Adim/User";
import Messages from "./Adim/Messages";
import PaymentResult from "./OrderComponets/PaymentResult";
import PaymentCallback from "./OrderComponets/PaymentCallback";
import RequestReset from "./Componets/RequestReset";
import ResetPassword from "./Componets/ResetPassword";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/send-reset-code" element={<RequestReset />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/payment-result" element={<PaymentResult />} />
          <Route path="/payment-callback" element={<PaymentCallback />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/users" element={<User />} />
          <Route path="/admin/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
