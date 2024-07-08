import React from 'react';
import Header from '../Sharedcomponets/Header';
import Footer from '../Sharedcomponets/Footer';
import { Link } from 'react-router-dom'; 
import Aimage1 from '../../public/images/heading-bg.webp';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="relative">
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
              <Link className="text-xl" to="/contact">
                contact         
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 ">
        <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-10 text-center">SAY SOMETHING</h1>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
