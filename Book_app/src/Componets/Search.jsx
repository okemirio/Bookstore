import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import Footer from "../Sharedcomponets/Footer";
import Product from "../Sharedcomponets/products"; // Import the separated Product component

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [addedToCart, setAddedToCart] = useState({});
  const navigate = useNavigate();

  const handleSearch = async () => {
    const token = localStorage.getItem('authToken');
    const expirationTime = localStorage.getItem('expirationTime');
    const currentTime = new Date().getTime();

    if (!token || currentTime > expirationTime) {
        console.error('No valid token found, redirecting to login.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('expirationTime');
        navigate('/');
        return;
    }

    if (!searchTerm.trim()) {
        setError('Search term cannot be empty.');
        return;
    }

    setLoading(true);
 console.log(searchTerm)
    try {
        const response = await axios.get(
            `https://bookkapp-backend.vercel.app/products/products/search/${encodeURIComponent(searchTerm)}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(response);
        setProducts(response.data.products);
        setError('');
    } catch (err) {
        console.error('Failed to search products:', err);
        if (err.response && err.response.data && err.response.data.error) {
            setError(err.response.data.error);
        } else if (err.response && err.response.status === 404) {
            setError('No products found for the search term.');
        } else {
            setError('Failed to search products. Please try again.');
        }
        setProducts([]);
    } finally {
        setLoading(false);
    }
};

  const addToCart = async (product) => {
    const token = localStorage.getItem('authToken');
    const expirationTime = localStorage.getItem('expirationTime');
    const currentTime = new Date().getTime();

    if (!token || currentTime > expirationTime) {
      console.error('No valid token found, redirecting to login.');
      localStorage.removeItem('authToken');
      localStorage.removeItem('expirationTime');
      navigate('/');
      return;
    }

    setAddedToCart((prevState) => ({
      ...prevState,
      [product._id]: true,
    }));

    try {
      const response = await axios.post(
        'https://bookkapp-backend.vercel.app/carts/cart/add',
        { productId: product._id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Optional: handle cart update UI or logic
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('expirationTime');
        navigate('/');
      }
    }
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 border rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        {loading && <div>Loading...</div>}
        {error && <p className="text-red-600 mt-4">{error}</p>}

        <div className="mt-6">
          {products.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, visibleProducts).map((product) => {
                  const isInCart = addedToCart[product._id];
                  return (
                    <Product
                      key={product._id}
                      data={product}
                      addToCart={addToCart}
                      isAdded={isInCart}
                    />
                  );
                })}
              </div>
              {visibleProducts < products.length && (
                <div className="flex justify-center mt-10">
                  <div className="bg-yellow-700 p-3 rounded shadow-lg hover:bg-black">
                    <button className="font-bold text-white px-4 rounded" onClick={loadMoreProducts}>
                      Load more
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Search;
