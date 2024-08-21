import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './products'; // Import the separated Product component
import { useNavigate } from 'react-router-dom';

const ListedShop = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6); // State for managing visible products
  const [addedToCart, setAddedToCart] = useState({}); // Track which products are added
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
        const response = await axios.get('https://bookkapp-backend.vercel.app/products/products', {
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
          navigate('/');
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
      navigate('/');
      return;
    }

    try {
      const response = await axios.post('https://bookkapp-backend.vercel.app/carts/cart/add',
        { productId: product._id, quantity: product.quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      setCart((prevCart) => [...prevCart, response.data]);

      // Immediately update the UI to reflect the addition to the cart
      setAddedToCart((prevState) => ({
        ...prevState,
        [product._id]: true,
      }));
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
    <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-2xl font-bold mb-4 text-center">LATEST PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, visibleProducts).map((product) => (
          <Product
            key={product._id}
            data={product}
            addToCart={addToCart}
            isAdded={!!addedToCart[product._id]}
          />
        ))}
      </div>

      {visibleProducts < products.length && (
        <div className="flex justify-center mt-10">
          <button 
            className="bg-yellow-700 p-3 rounded shadow-lg hover:bg-black text-white font-bold px-4"
            onClick={loadMoreProducts}
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default ListedShop;
