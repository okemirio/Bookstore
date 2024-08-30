import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Product from "./products"; // Import the separated Product component

const ListedProducts = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [addedToCart, setAddedToCart] = useState({});
  const navigate = useNavigate();

  // Function to refresh tokens
  const refreshTokens = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token found');
      }

      const response = await axios.post('https://bookkapp-backend.vercel.app/auth/refresh', { refreshToken });
      const { accessToken, refreshToken: newRefreshToken, expiresIn } = response.data;

      // Save new tokens and expiration time
      localStorage.setItem('authToken', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      localStorage.setItem('expirationTime', new Date().getTime() + expiresIn * 1000);
      return accessToken;
    } catch (error) {
      console.error('Error refreshing tokens:', error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expirationTime');
      navigate('/');
      throw error;
    }
  };

  // Function to handle API requests
  const apiRequest = async (url, method = 'GET', data = null) => {
    const token = localStorage.getItem('authToken');
    const expirationTime = localStorage.getItem('expirationTime');
    const currentTime = new Date().getTime();

    if (!token || currentTime > expirationTime) {
      console.error('Token expired or not found. Refreshing...');
      try {
        const newToken = await refreshTokens();
        return await axios({ url, method, data, headers: { Authorization: `Bearer ${newToken}` } });
      } catch (error) {
        console.error('Failed to refresh token:', error);
        throw error;
      }
    }

    return await axios({ url, method, data, headers: { Authorization: `Bearer ${token}` } });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiRequest('https://bookkapp-backend.vercel.app/products/products');
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
        if (error.response && error.response.status === 401) {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('authToken');
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('expirationTime');
          navigate('/');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const addToCart = async (product) => {
    // Update UI immediately to reflect addition to cart
    setAddedToCart((prevState) => ({
      ...prevState,
      [product._id]: true,
    }));

    try {
      const response = await apiRequest('https://bookkapp-backend.vercel.app/carts/cart/add', 'POST', { productId: product._id, quantity: 1 });
      setCart((prevCart) => [...prevCart, response.data]);
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('expirationTime');
        navigate('/');
      }
    }
  };

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-2xl font-bold mb-4 text-center">LATEST PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, visibleProducts).map((product, index) => {
          const isInCart = addedToCart[product._id] || cart.some(item => item.productId === product._id);
          return (
            <Product
              key={index}
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
  );
};

export default ListedProducts;
