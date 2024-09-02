import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle changes in the password inputs
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  // Handle form submission to reset the password
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      // Send request to backend to reset password
      const response = await axios.post(`https://bookkapp-backend.vercel.app/auth/reset-password/${token}`, { password });
      setMessage(response.data.message);

      // Redirect to login page after successful password reset
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error resetting password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              onChange={handlePasswordChange}
              value={password}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Enter new password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Confirm new password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Reset Password
            </button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
