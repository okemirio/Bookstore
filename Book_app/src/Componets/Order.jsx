import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Sharedcomponets/Header';
import Aimage1 from '../../public/images/heading-bg.webp';
import { Link } from 'react-router-dom';
import Footer from '../Sharedcomponets/Footer';
import { AiOutlineDoubleRight } from "react-icons/ai";
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check token validity and redirect if expired
    const checkTokenValidity = () => {
      const tokenExpiry = localStorage.getItem('tokenExpiry');
      if (tokenExpiry && Date.now() > tokenExpiry) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('tokenExpiry');
        navigate('/login');
      }
    };

    checkTokenValidity();
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken');

      if (token) {
        try {
          const response = await axios.get('https://bookkapp-backend.vercel.app/orders/orders', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setOrders(response.data);
          console.log(response);
        } catch (err) {
          setError('No Orders Found');
        } finally {
          setLoading(false);
        }
      } else {
        setError('User not authenticated');
        setLoading(false);
        navigate('/');
      }
    };

    fetchOrders();
  }, [navigate]);

  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-no-repeat w-full h-64 mt-28 flex items-center justify-center"
        style={{ backgroundImage: `url(${Aimage1})` }}
      >
        <div className="text-center">
          <h1 className="text-black text-4xl font-extrabold">YOUR ORDERS</h1>
          <div className="flex gap-2 justify-center mt-2">
            <Link className="text-blue-600 text-xl" to="/home">
              Home
            </Link>
            <span className="text-black text-xl">/</span>
            <Link className="text-black text-xl" to="/orders">
              Orders
            </Link>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-4xl text-center my-10">PLACED ORDERS</h1>

      <div className="border border-gray-300 p-6 mx-auto bg-white shadow-lg rounded-lg max-w-4xl">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="mb-6 bg-slate-100 p-4 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h1 className="text-lg font-semibold">Placed on:</h1>
                  <p className="text-gray-700">{order.date}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Name:</h1>
                  <p className="text-gray-700">{order.name}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Number:</h1>
                  <p className="text-gray-700">{order.number}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Email:</h1>
                  <p className="text-gray-700">{order.email}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Address:</h1>
                  <p className="text-gray-700">
                    {order.address1}, {order.address2}, {order.city}, {order.state}, {order.country} - {order.pincode}
                  </p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Payment Method:</h1>
                  <p className="text-gray-700">{order.payment}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Total Price:</h1>
                  <p className="text-gray-700">${order.total}</p>
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Payment Status:</h1>
                  <p className="text-gray-700">
                    <span className={`text-${order.status === 'Pending' ? 'red' : 'green'}-500`}>
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>

      <div className="flex justify-center my-10">
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base md:text-lg lg:text-xl"
          onClick={() => navigate('/checkout')}
        >
         <div className='flex items-center'>
         <div>
         Checkout 
         </div>
         <div className='flex items-center'>
          <AiOutlineDoubleRight />
          <AiOutlineDoubleRight />
         </div>
         </div>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
