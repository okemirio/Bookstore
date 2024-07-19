import React from "react";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../Sharedcomponets/Footer";

export const Checkout = () => {
  return (
    <>
      <Header />
      <div
        className="bg-cover bg-no-repeat w-full h-64 mt-28"
        style={{ backgroundImage: `url(${Aimage1})` }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-black text-3xl font-extrabold">ABOUT US</h1>
          <div className="flex gap-2 ">
            <Link className="text-blue-600 text-xl" to="/home">
              home/
            </Link>
            <Link className="text-xl" to="/checkout">
              checkout
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="border border-black my-5 text-center p-2 mx-96 w-56  bg-slate-100 justify-center ">
          {" "}
          The world of art($50/-1 x1)
        </h1>
      </div>
      <div>
        <h1 className="text-center font-bold">
        
          Grand TOTAL: <span className="text-red-500 font-bold my-4">$122/-</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
  <form className="w-[1000px] bg-white p-8 rounded-lg shadow-lg grid grid-cols-2 gap-4 ">
    <h1 className="text-2xl font-bold mb-6 col-span-2 text-center">Place Your Order</h1>

    <div className="mb-6 ">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Your name:
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
        Your number:
      </label>
      <input
        type="text"
        id="number"
        placeholder="Enter your number"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Your email:
      </label>
      <input
        type="text"
        id="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment">
        Payment method:
      </label>
      <select
        id="payment"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      >
        <option value="Cash on delivery">Cash on delivery</option>
        <option value="credit card">Credit Card</option>
        <option value="Paypal">PAYPAL</option>
        <option value="PaypTM">PAYTM</option>
      </select>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address1">
        Address line 01:
      </label>
      <input
        type="text"
        id="address1"
        placeholder="e.g., flat no."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address2">
        Address line 02:
      </label>
      <input
        type="text"
        id="address2"
        placeholder="e.g., street name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
        City:
      </label>
      <input
        type="text"
        id="city"
        placeholder="e.g., Mumbai"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
        State:
      </label>
      <input
        type="text"
        id="state"
        placeholder="e.g., Maharashtra"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
        Country:
      </label>
      <input
        type="text"
        id="country"
        placeholder="e.g., India"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
        Pincode:
      </label>
      <input
        type="number"
        id="pincode"
        placeholder="e.g., 12345"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
      />
    </div>

    <div className="col-span-2 flex justify-left">
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
      >
        Order Now
      </button>
    </div>
  </form>
</div>
<Footer/>
    </>
  );
};

export default Checkout;
