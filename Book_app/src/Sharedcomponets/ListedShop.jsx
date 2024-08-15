import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './products'; // Assuming your product component is named 'Product'
import { useNavigate } from 'react-router-dom';

export const ListedShop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6); // State for managing visible products
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
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

      try {
        const response = await axios.get('http://localhost:5000/products/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
        if (error.response && error.response.status === 401) {
          alert('Session expired. Please log in again.');
          localStorage.removeItem('authToken');
          localStorage.removeItem('expirationTime');
          navigate('/login');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const addToCart = async (product) => {
    const token = localStorage.getItem('authToken');
    const expirationTime = localStorage.getItem('expirationTime');
    const currentTime = new Date().getTime();

    if (!token || currentTime > expirationTime) {
      console.error('No valid token found, redirecting to login.');
      localStorage.removeItem('authToken');
      localStorage.removeItem('expirationTime');
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/carts/cart/add',
        { productId: product._id, quantity: product.quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      console.log(response);
      setCart((prevCart) => [...prevCart, response.data]);
    } catch (error) {
      console.error('Error adding to cart:', error);
      if (error.response && error.response.status === 401) {
        alert('Session expired. Please log in again.');
        localStorage.removeItem('authToken');
        localStorage.removeItem('expirationTime');
        navigate('/login');
      }
    }
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 6);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">LATEST PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-40">
          {products.slice(0, visibleProducts).map((product, index) => (
            <Product key={index} data={product} addToCart={addToCart} />
          ))}
        </div>
      </div>

      {visibleProducts < products.length && (
        <div className="flex justify-center mt-10">
          <div className="bg-yellow-700 p-3 rounded shadow-lg hover:bg-black">
            <button 
              className="font-bold text-white px-4 rounded" 
              onClick={loadMoreProducts}
            >
              Load more
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListedShop;
