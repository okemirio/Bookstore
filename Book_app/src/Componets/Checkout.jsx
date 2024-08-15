import React, { useState, useEffect } from 'react';
import Header from '../Sharedcomponets/Header';
import Aimage1 from '../../public/images/heading-bg.webp';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Sharedcomponets/Footer';
import axios from 'axios';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    payment: 'Cash on delivery',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check token expiration
    const isTokenExpired = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const currentTime = Math.floor(Date.now() / 1000);
        return decodedToken.exp < currentTime;
      }
      return true;
    };

    if (isTokenExpired()) {
      console.error('Token expired. Redirecting to login.');
      navigate('/');
    } else {
      const fetchCartItems = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get('http://localhost:5000/carts/cart/read', {
            headers: { Authorization: `Bearer ${token}` },
          });

          console.log('Cart Response:', response.data);

          if (Array.isArray(response.data.cart)) {
            setItems(response.data.cart);
            calculateTotals(response.data.cart);
          } else {
            setError('Unexpected data format');
          }
        } catch (error) {
          console.error('Error fetching cart data:', error);
          setError('Error fetching cart data');
        }
        setIsLoading(false);
      };

      fetchCartItems();
    }
  }, [token, navigate]);

  const calculateTotals = (items) => {
    const subtotal = items.reduce((acc, item) => {
      const quantity = item.quantity || 1;
      return acc + item.productId.price * quantity;
    }, 0);

    const shippingCost = 10; // Example shipping cost
    console.log('Calculated Subtotal:', subtotal);
    console.log('Calculated Grand Total:', subtotal + shippingCost);

    setSubtotal(subtotal);
    setGrandTotal(subtotal + shippingCost);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (token) {
      try {
        const response = await axios.post(
          'http://localhost:5000/orders/checkout',
          { ...formData, total: grandTotal },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Order Response:', response);
        navigate('/orders');
      } catch (error) {
        console.error('Error placing order:', error);
      }
    } else {
      console.error('User not authenticated. Redirecting to login.');
      navigate('/');
    }
  };

  return (
    <>
      <Header />
      <div
        className="bg-cover bg-no-repeat w-full h-64 mt-28"
        style={{ backgroundImage: `url(${Aimage1})` }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-black text-3xl font-extrabold">CHECKOUT</h1>
          <div className="flex gap-2">
            <Link className="text-blue-600 text-xl" to="/home">
              home/
            </Link>
            <Link className="text-xl" to="/checkout">
              checkout
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8">
  <div className="border border-gray-300 my-5 p-4 bg-white shadow-lg rounded-lg w-full max-w-md">
    <h1 className="text-lg font-semibold text-gray-800 mb-4 text-center">
      Your Items
    </h1>
    <div className="space-y-2">
      {items.map(item => (
        <div key={item._id} className="flex justify-between text-gray-700">
          <span>{item.productId.name}</span>
          <span>(${item.productId.price} x {item.quantity || 1})</span>
        </div>
      ))}
    </div>
  </div>
</div>

      <div>
        <h1 className="text-center font-bold">
          Subtotal: <span className="text-red-500 font-bold my-4">${subtotal.toFixed(2)}</span>
        </h1>
        <h1 className="text-center font-bold">
          Grand TOTAL: <span className="text-red-500 font-bold my-4">${grandTotal.toFixed(2)}</span>
        </h1>
      </div>

      {isLoading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
        <form
          onSubmit={handleSubmit}
          className="w-4/5 max-w-[1000px] mx-auto bg-white p-8 rounded-lg shadow-lg grid gap-6"
        >
          <h1 className="text-2xl font-bold mb-6 text-center col-span-2">
            Place Your Order
          </h1>

          <div className="grid grid-cols-2 gap-4 col-span-2">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="name" className="block text-ms font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="number" className="block text-ms font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                value={formData.number}
                onChange={handleChange}
                pattern="^0[0-9]{10}$"
                title="Phone number should be exactly 11 digits long and start with 0"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="email" className="block text-ms font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="address1" className="block text-ms font-medium text-gray-700">
                Address Line 1
              </label>
              <input
                type="text"
                id="address1"
                value={formData.address1}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="address2" className="block text-ms font-medium text-gray-700">
                Address Line 2
              </label>
              <input
                type="text"
                id="address2"
                value={formData.address2}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="city" className="block text-ms font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="state" className="block text-ms font-medium text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="country" className="block text-ms font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="pincode" className="block text-ms font-medium text-gray-700">
                Pin Code
              </label>
              <input
                type="text"
                id="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="payment" className="block text-ms font-medium text-gray-700">
                Payment Method
              </label>
              <select
                id="payment"
                value={formData.payment}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="Cash on delivery">Cash on delivery</option>
                <option value="Online payment">Online payment</option>
                <option value="Credit/Debit card">Credit/Debit card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          >
            Place Order
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
