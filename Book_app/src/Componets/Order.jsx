import React from 'react';
import Header from '../Sharedcomponets/Header';
import Aimage1 from '../../public/images/heading-bg.webp';
import { Link } from 'react-router-dom';
import Footer from '../Sharedcomponets/Footer';

const Order = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-no-repeat w-full h-64 mt-28 flex items-center justify-center"
        style={{ backgroundImage: `url(${Aimage1})` }}
      >
        <div className="text-center">
          <h1 className="text-black text-4xl font-extrabold">ABOUT US</h1>
          <div className="flex gap-2 justify-center mt-2">
            <Link className="text-blue-600 text-xl" to="/home">
              Home
            </Link>
            <span className="text-black text-xl">/</span>
            <Link className="text-black text-xl" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-4xl text-center my-10">PLACED ORDER</h1>

      <div className="border border-gray-300 p-6 mx-auto bg-white shadow-lg rounded-lg max-w-4xl">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h1 className="text-lg font-semibold">Placed on:</h1>
            <p className="text-gray-700">03-March-2022</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Name:</h1>
            <p className="text-gray-700">Shaikh Anas</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Number:</h1>
            <p className="text-gray-700">0988282882</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Email:</h1>
            <p className="text-gray-700">jcy@gmail.com</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Address:</h1>
            <p className="text-gray-700">Flat No 1, Glory Street</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Payment Method:</h1>
            <p className="text-gray-700">Paypal</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Total Price:</h1>
            <p className="text-gray-700">$122/-</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Payment Status:</h1>
            <p className="text-gray-700">
              <span className="text-red-500">Pending</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
