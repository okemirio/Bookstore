import React, { useState } from 'react';

// Icon components
const IconCreditCard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const IconPaypal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11.5C4.23858 11.5 2 9.26142 2 6.5C2 3.73858 4.23858 1.5 7 1.5C12.7467 1.5 15 6.5 15 6.5L14 21.5H6L7 11.5Z"></path>
    <path d="M14.9579 5.5C18.2938 5.5 20.9998 7.06056 20.9998 9.5C20.9998 14.5 17.0001 16.5 17.0001 16.5L16.0001 21.5H11.0001L12.4993 9.5C12.4993 9.5 13.9579 5.5 14.9579 5.5Z"></path>
  </svg>
);

const IconBank = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

// Card images
import mastercardImg from '../../dist/assets/mastercard.png';
import visaImg from '../../dist/assets/visa.png';
import verveImg from '../../dist/assets/verve.png';

const PaymentSelector = ({ paymentDetails, setPaymentDetails, handleCheckout }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [bankTransferConfirmation, setBankTransferConfirmation] = useState('');
  const [cardType, setCardType] = useState('');
  const [cardImage, setCardImage] = useState(null);

  // Function to detect card type based on card number input
  const detectCardType = (number) => {
    const regexPatterns = {
      visa: /^4[0-9]{6,}$/,
      mastercard: /^5[1-5][0-9]{5,}$/,
      verve: /^506(0|1|2)[0-9]{12}$/
    };

    if (regexPatterns.visa.test(number)) {
      setCardType('visa');
      setCardImage(visaImg);
    } else if (regexPatterns.mastercard.test(number)) {
      setCardType('mastercard');
      setCardImage(mastercardImg);
    } else if (regexPatterns.verve.test(number)) {
      setCardType('verve');
      setCardImage(verveImg);
    } else {
      setCardType('');
      setCardImage(null);
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setPaymentDetails({ ...paymentDetails, cardNumber: value });
    detectCardType(value);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Select Payment Method</h2>
      <div className="flex space-x-4 mb-6">
        <button
          className={`flex-1 flex items-center justify-center p-4 rounded-lg border ${paymentMethod === 'card' ? 'bg-blue-100' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <IconCreditCard />
          <span className="ml-2">Card</span>
        </button>
        <button
          className={`flex-1 flex items-center justify-center p-4 rounded-lg border ${paymentMethod === 'paypal' ? 'bg-blue-100' : ''}`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <IconPaypal />
          <span className="ml-2">PayPal</span>
        </button>
        <button
          className={`flex-1 flex items-center justify-center p-4 rounded-lg border ${paymentMethod === 'bank' ? 'bg-blue-100' : ''}`}
          onClick={() => setPaymentMethod('bank')}
        >
          <IconBank />
          <span className="ml-2">Bank Transfer</span>
        </button>
      </div>

      {paymentMethod === 'card' && (
        <div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
            <div className="flex items-center border rounded-lg p-2">
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={paymentDetails.cardNumber || ''}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                className="flex-1 p-2 outline-none"
                autoComplete="cc-number"
              />
              {cardImage && (
                <img src={cardImage} alt={cardType} className="ml-2 w-12 h-auto" />
              )}
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-sm font-medium mb-1">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate || ''}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
              placeholder="MM/YY"
              className="w-full p-2 border rounded-lg outline-none"
              autoComplete="cc-exp"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cvv" className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv || ''}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
              placeholder="123"
              className="w-full p-2 border rounded-lg outline-none"
              autoComplete="cc-csc"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="pin" className="block text-sm font-medium mb-1">PIN</label>
            <input
              type="password"
              id="pin"
              name="pin"
              value={paymentDetails.pin || ''}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, pin: e.target.value })}
              placeholder="****"
              className="w-full p-2 border rounded-lg outline-none"
              autoComplete="new-password"
            />
          </div>
        </div>
      )}

      {paymentMethod === 'paypal' && (
        <div className="mb-4 p-4 border rounded-lg">
          <p className="text-sm">You will be redirected to PayPal to complete your purchase securely.</p>
        </div>
      )}

      {paymentMethod === 'bank' && (
        <div>
          <div className="mb-4 p-4 border rounded-lg">
            <p className="text-sm font-medium">Bank Name: ABC Bank</p>
            <p className="text-sm font-medium">Account Number: 1234567890</p>
            <p className="text-sm font-medium">Sort Code: 00-00-00</p>
          </div>
          <div className="mb-4">
            <label htmlFor="bankTransferConfirmation" className="block text-sm font-medium mb-1">Transfer Confirmation Number</label>
            <input
              type="text"
              id="bankTransferConfirmation"
              name="bankTransferConfirmation"
              value={bankTransferConfirmation || ''}
              onChange={(e) => setBankTransferConfirmation(e.target.value)}
              placeholder="Enter confirmation number"
              className="w-full p-2 border rounded-lg outline-none"
              autoComplete="off"
            />
          </div>
        </div>
      )}

      <button
        onClick={handleCheckout}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Complete Payment
      </button>
    </div>
  );
};

export default PaymentSelector;
