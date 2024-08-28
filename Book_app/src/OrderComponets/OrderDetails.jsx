// src/OrderComponets/PaymentSelector.jsx
import React from 'react';

const PaymentSelector = ({
  selectedMethod,
  setSelectedMethod,
  paymentDetails,
  setPaymentDetails,
  setAmount,
  setEmail,
  setPhoneNumber,
  setFullname
}) => {
  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className="p-6 mx-auto max-w-md bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
      <div className="mb-4">
        <label className="block mb-2">Payment Method</label>
        <select
          value={selectedMethod}
          onChange={handleMethodChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="card">Card</option>
          <option value="momo">Mobile Money</option>
        </select>
      </div>

      {/* Common Input Fields */}
      <div className="mb-4">
        <label className="block mb-2">Amount</label>
        <input
          type="text"
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
          onChange={(e) => setFullname(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Full Name"
          required
        />
      </div>

      {selectedMethod === 'card' && (
        <>
          <div className="mb-4">
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
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
              value={paymentDetails.cvv}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
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
              value={paymentDetails.expiryMonth}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryMonth: e.target.value })}
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
              value={paymentDetails.expiryYear}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryYear: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="YY"
              required
            />
          </div>
        </>
      )}

      {selectedMethod === 'momo' && (
        <>
          <div className="mb-4">
            <label className="block mb-2">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={paymentDetails.accountNumber}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, accountNumber: e.target.value })}
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
              value={paymentDetails.accountBank}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, accountBank: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Bank Code"
              required
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentSelector;
