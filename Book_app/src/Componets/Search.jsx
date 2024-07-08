import React from "react";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../Sharedcomponets/Footer";
Link;

const Search = () => {
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
              <Link className="text-xl" to="/search">
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center my-12 gap-4">
        <div className="flex w-full max-w-xl">
          <div className="flex-grow border border-black px-4 py-2 rounded">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full outline-none"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 border rounded">
            Search
          </button>
        </div>
        <button className="bg-white border border-black px-4 py-2 text-red-300 hover:bg-blue-600 font-bold">
          Search Something
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Search;
