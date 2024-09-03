import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // State for form inputs and messages
  const [post, setPost] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  // Validate input fields
  const validateForm = () => {
    if (!post.email || !post.password) {
      if (!post.email) setErrorMessage("Email is required");
      if (!post.password) setErrorMessage("Password is required");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://bookkapp-backend.vercel.app/auth/login",
        post
      );
      const { accessToken, refreshToken, expiresIn } = response.data;

      // Store tokens and expiration time in localStorage
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expirationTime", expirationTime);

      setSuccessMessage("Login successful!");
      setErrorMessage("");

      // Navigate to home page after successful login
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.error("Error during login:", error.response?.data || error);
      setErrorMessage(
        error.response?.data?.message ||
          "Login failed. Invalid email or password."
      );
      setSuccessMessage("");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  // Check token expiration
  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime();

    if (currentTime > expirationTime) {
      logoutUser();
    }
  };

  // Log out user
  const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken"); // Also remove refresh token
    localStorage.removeItem("expirationTime");
    alert("Session expired. Please log in again.");
    navigate("/");
  };

  // Set up interval to check token expiration
  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 60000); // Check every 1 minute
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Please enter your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Please enter your password"
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            {/* Forgot Password Link */}
            <div>
              <Link
                to="/send-reset-link"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Login Now
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="mt-4 text-sm text-green-500">{successMessage}</p>
        )}
        <p className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <Link className="text-purple-400" to="/register">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
