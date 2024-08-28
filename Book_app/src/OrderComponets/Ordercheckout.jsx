import React, { useState } from 'react';
import axios from 'axios';

const Ordercheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cvv: '',
    expiryMonth: '',
    expiryYear: '',
  });
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: '',
    accountBank: '',
  });
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullname, setFullname] = useState('');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleAccountDetailsChange = (e) => {
    setAccountDetails({ ...accountDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      amount,
      email,
      phone_number: phoneNumber,
      fullname,
      ...(paymentMethod === 'card'
        ? {
            card_number: cardDetails.cardNumber,
            cvv: cardDetails.cvv,
            expiry_month: cardDetails.expiryMonth,
            expiry_year: cardDetails.expiryYear,
          }
        : {
            account_number: accountDetails.accountNumber,
            account_bank: accountDetails.accountBank,
          }),
    };

    try {
      const response = await axios.post(`/api/payments/${paymentMethod}`, payload);
      // Handle response, redirect to payment link or show success message
      window.location.href = response.data.link; // For example, redirect to Flutterwave hosted link
    } catch (error) {
      console.error('Payment error:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Select Payment Method</label>
          <select
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="card">Card</option>
            <option value="account">Bank Account</option>
          </select>
        </div>

        {paymentMethod === 'card' ? (
          <>
            <div className="mb-4">
              <label className="block mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardDetailsChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Card Number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="CVV"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Expiry Month</label>
              <input
                type="text"
                name="expiryMonth"
                value={cardDetails.expiryMonth}
                onChange={handleCardDetailsChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="MM"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Expiry Year</label>
              <input
                type="text"
                name="expiryYear"
                value={cardDetails.expiryYear}
                onChange={handleCardDetailsChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="YY"
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block mb-2">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={accountDetails.accountNumber}
                onChange={handleAccountDetailsChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Account Number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Bank Code</label>
              <input
                type="text"
                name="accountBank"
                value={accountDetails.accountBank}
                onChange={handleAccountDetailsChange}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Bank Code"
                required
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block mb-2">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Amount"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Full Name"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Ordercheckout;
