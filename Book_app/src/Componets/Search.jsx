import React, { useState } from "react";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../Sharedcomponets/Footer";
import axios from "axios"; // Import axios for making API requests

const Search = () => {
  // State to hold the search input
  const [searchTerm, setSearchTerm] = useState("");

  // State to hold the search results
  const [products, setProducts] = useState([]);

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
    const handleSearch = async () => {
      try {
        // Send the search query to your backend API
        const response = await axios.get(`https://bookstore-alpha-silk.vercel.app/products/products/search?name=${searchTerm}`);        // Update the products state with the search results
        setProducts(response.data);
      } catch (err) {
        console.error("Failed to search products:", err);
      }
    };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
              value={searchTerm} // Bind the input to searchTerm state
              onChange={handleInputChange} // Update searchTerm on input change
            />
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 border rounded"
            onClick={handleSearch} // Trigger the search on button click
          >
            Search
          </button>
        </div>
      </div>

      {/* Render search results */}
      <div className="flex flex-col items-center px-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product._id} className="border p-4 rounded shadow">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-gray-600 mt-1">${product.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Search;
