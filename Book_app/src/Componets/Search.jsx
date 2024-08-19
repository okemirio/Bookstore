import React from "react";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../Sharedcomponets/Footer";

const Search = () => {
  return (
<div className="flex flex-col min-h-screen">
  <Header />
  <div className="flex-grow relative">
    <div
      className="bg-cover bg-no-repeat w-full h-64 sm:h-48 md:h-64 lg:h-80 mt-28"
      style={{ backgroundImage: `url(${Aimage1})` }}
    >
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-black text-3xl font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">ABOUT US</h1>
        <div className="flex gap-2 text-xl sm:text-lg md:text-xl">
          <Link className="text-blue-600" to="/home">home/</Link>
          <Link to="/search">Search</Link>
        </div>
      </div>
    </div>
  </div>      <Header />
      <div className="relative w-full mt-28">
        <div
          className="bg-cover bg-no-repeat w-full h-64"
          style={{ backgroundImage: `url(${Aimage1})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl font-extrabold md:text-4xl">
              SEARCH
            </h1>
            <div className="flex gap-2 mt-2 text-white">
              <Link className="text-blue-300 text-lg md:text-xl" to="/home">
                Home/
              </Link>
              <Link className="text-lg md:text-xl" to="/search">
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-12 px-4">
        <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl">
          <div className="flex-grow border border-gray-300 px-4 py-2 rounded mb-4 sm:mb-0 sm:mr-2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none border-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 border rounded">
            Search
          </button>
        </div>
        <button className="bg-white border border-gray-300 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white font-bold mt-4">
          Search Something
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
