import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const EnterCode = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const email = query.get("email"); // Get the email from query params

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://your-api-url.com/auth/verify-reset-code", { email, code });
      setMessage(response.data.message);
      // If the code is valid, navigate to the reset password page
      if (response.data.success) {
        navigate(`/reset-password?email=${email}&code=${code}`); // Pass email and code to reset password page
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error verifying reset code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-center">Enter Reset Code</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter the code sent to your email"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">
              Verify Code
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
};

export default EnterCode;
