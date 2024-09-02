// src/components/RequestReset.js
import React, { useState } from "react";
import axios from "axios";

const RequestReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle changes in the email input
  const handleChange = (e) => setEmail(e.target.value);

  // Handle form submission to request a password reset link
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send request to backend to send reset email
      const response = await axios.post("https://bookkapp-backend.vercel.app/auth/reset-password", { email });
      console.log(response)
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error sending reset email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              onChange={handleChange}
              value={email}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Send Reset Link
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-center">{message}</p>}
      </div>
    </div>
  );
};

export default RequestReset;
