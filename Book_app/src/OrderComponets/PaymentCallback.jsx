import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentCallback = () => {
  const [status, setStatus] = useState('Processing');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const params = new URLSearchParams(location.search);
      const status = params.get('status');
      const tx_ref = params.get('tx_ref');
      const transaction_id = params.get('transaction_id');

      try {
        const response = await axios.get(`https://bookkapp-backend.vercel.app/payment/callback?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`);
        
        if (response.data.status === 'successful') {
          setStatus('Payment Successful');
        } else {
          setStatus('Payment Failed');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setStatus('Error verifying payment');
      }
    };

    verifyPayment();
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">{status}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate('/orders')}
      >
        Return to Orders
      </button>
    </div>
  );
};

export default PaymentCallback;