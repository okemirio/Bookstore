// PaymentResult.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentResult = () => {
  const [result, setResult] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const status = params.get('status');
    const tx_ref = params.get('tx_ref');

    setResult({ status, tx_ref });

    // Here you would typically make an API call to your backend to verify the payment
    // and update the order status
  }, [location]);

  if (!result) return <div>Loading...</div>;

  return (
    <div>
      <h1>Payment Result</h1>
      <p>Status: {result.status}</p>
      <p>Transaction Reference: {result.tx_ref}</p>
    </div>
  );
};

export default PaymentResult;