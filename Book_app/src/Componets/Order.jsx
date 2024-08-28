import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Sharedcomponets/Header';
import Footer from '../Sharedcomponets/Footer';
import BackgroundSection from '../OrderComponets/BackgroundSection.jsx';
import PaymentSelector from '../OrderComponets/PaymentSelecto.jsx';

const REDIRECT_URL = 'https://bookkapp-backend.vercel.app/flutterwave/payment-callback';

const OrderDetails = ({ order }) => (
  <div key={order._id} className="mb-6 bg-slate-100 p-4 rounded-lg shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries({
        'Placed on': order.date,
        'Name': order.name,
        'Number': order.number,
        'Email': order.email,
        'Address': `${order.address1}, ${order.address2}, ${order.city}, ${order.state}, ${order.country} - ${order.pincode}`,
        'Payment Method': 'Card Payment',
        'Total Price': `$${order.total}`,
        'Payment Status': order.status
      }).map(([label, value]) => (
        <div key={label}>
          <h1 className="text-lg font-semibold">{label}:</h1>
          <p className={`text-gray-700 ${label === 'Payment Status' ? (order.status === 'Pending' ? 'text-red-500' : 'text-green-500') : ''}`}>{value}</p>
        </div>
      ))}
    </div>
  </div>
);

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
    pin: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenValidity = () => {
      const tokenExpiry = localStorage.getItem('tokenExpiry');
      if (tokenExpiry && Date.now() > tokenExpiry) {
        localStorage.clear();
        navigate('/');
      }
    };
    checkTokenValidity();
  }, [navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        setError('User not authenticated');
        setLoading(false);
        return navigate('/');
      }

      try {
        const response = await axios.get('https://bookkapp-backend.vercel.app/orders/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(response.data);
      } catch (err) {
        setError('No Orders Found');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const handleCheckout = async () => {
    const order = orders[0]; // Assuming we're dealing with the first order
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('User not authenticated');
      return;
    }

    const payload = {
      amount: order.total,
      email: order.email,
      card_number: paymentDetails.cardNumber,
      cvv: paymentDetails.cvv,
      expiry_month: paymentDetails.expiryMonth,
      expiry_year: paymentDetails.expiryYear,
      pin: paymentDetails.pin,
      phone_number: order.number,
      fullname: order.name,
      redirect_url: REDIRECT_URL,
    };

    try {
      const response = await axios.post(
        'https://bookkapp-backend.vercel.app/flutterwave/payoutCard',
             payload,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
        
      );
      console.log(response);
      if (response.data.link) {
        window.location.href = response.data.link;
      } else {
        setError('Failed to create payment link');
      }
    } catch (error) {
      setError('An error occurred during checkout');
    }
  };

  return (
    <div>
      <Header />
      <BackgroundSection />
      <h1 className="font-bold text-4xl text-center my-10">PLACED ORDERS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 mx-auto bg-white shadow-lg rounded-lg max-w-6xl">
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : orders.length > 0 ? (
            orders.map((order) => (
              <OrderDetails key={order._id} order={order} />
            ))
          ) : (
            <p>No orders found. Orders array length: {orders.length}</p>
          )}
        </div>
        <PaymentSelector
          paymentDetails={paymentDetails}
          setPaymentDetails={setPaymentDetails}
          handleCheckout={handleCheckout}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
