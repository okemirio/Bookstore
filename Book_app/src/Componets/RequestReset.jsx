import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RequestReset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate(); // For navigation to reset-password page

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post("https://bookkapp-backend.vercel.app/auth/send-reset-code", { email });
      console.log(response);
      setMessage(response.data.message);
      if (response.data.message === "Password reset code sent successfully") {
        navigate(`/reset-password?email=${email}`);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Error sending reset code.");
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  const handleLoginClick = () => {
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={email}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md ${isLoading ? 'bg-blue-300' : 'bg-blue-500'} text-white`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Reset Code'}
            </button>
          </div>
        </form>

        {/* Show message after form submission */}
        {message && <p className="mt-4 text-sm text-center">{message}</p>}

        {/* Link to login page */}
        <div className="mt-4 text-center">
          <button
            onClick={handleLoginClick}
            className="text-blue-500 hover:underline"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestReset;
