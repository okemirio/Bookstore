import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const ResetPassword = () => {
  const [resetCode, setResetCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const email = query.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match.", type: "error" });
      return;
    }

    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await axios.post("https://bookkapp-backend.vercel.app/auth/reset-password", {
        email,
        code: resetCode,
        newPassword: password,
      });
      
      console.log(response);
      console.log(response.data);
      
      if (response.data.success) {
        setMessage({ text: "Password reset successfully. Redirecting to login...", type: "success" });
        setTimeout(() => navigate("/"), 3000);
      } else {
        setMessage({ text: response.data.message || "Error resetting password.", type: "error" });
      }
    } catch (error) {
      console.error("Password reset error:", error);
      if (error.response) {
        setMessage({ text: error.response.data.message || "Error resetting password.", type: "error" });
      } else if (error.request) {
        setMessage({ text: "No response received from server. Please try again.", type: "error" });
      } else {
        setMessage({ text: "Error resetting password. Please try again.", type: "error" });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="code-reset" className="block text-sm font-medium text-gray-700">Reset Code</label>
            <input
              type="text"
              id="code-reset"
              value={resetCode}
              onChange={(e) => setResetCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter the reset code sent to your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password-new" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              id="password-new"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter new password"
              required
              minLength={8}
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Confirm new password"
              required
              minLength={8}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={isLoading || !resetCode || !password || !confirmPassword}
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
        {message.text && (
          <p className={`mt-4 text-sm text-center ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;