import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListedProducts = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(6);
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
        navigate('/login');
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
      navigate('/');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/carts/cart/add',
        { productId: product._id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      console.log(response.data);
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
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4 text-center">LATEST PRODUCTS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center mx-40">
          {products.slice(0, visibleProducts).map((product, index) => (
            <div key={index} className="relative border border-black p-7 rounded-lg shadow-lg">
              <div
                className='relative bg-cover bg-no-repeat w-full h-96 font-bold'
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <h1 className='absolute top-2 left-2 bg-red-500 text-white p-2 rounded-md font-bold'>{product.price}/-</h1>
              </div>
              <div className='mt-4'>
                <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
                <input type="number" defaultValue={1} name="quantity" className="border border-gray-300 rounded-md p-2 mb-2 w-full" />
                <button className="bg-blue-600 text-white p-2 rounded-md w-full" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {visibleProducts < products.length && (
        <div className='flex justify-center mt-10'>
          <div className='bg-yellow-700 p-3 rounded shadow-lg hover:bg-black'>
            <button className='font-bold text-white px-4 rounded' onClick={loadMoreProducts}>Load more</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListedProducts;
