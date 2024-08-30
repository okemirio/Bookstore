import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // State for storing form input values
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  
  // State for storing error and success messages
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Handle input changes in the form
  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  // Validate form inputs
  const validateForm = () => {
    if (!post.email || !post.password) {
      if (!post.email) setErrorMessage('Email is required');
      if (!post.password) setErrorMessage('Password is required');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form before submission
    if (!validateForm()) return;

    try {
      // Send login request to the backend
      const response = await axios.post("https://bookkapp-backend.vercel.app/auth/login", post);
      const { accessToken, refreshToken, expiresIn } = response.data;

      // Calculate token expiration time
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      
      // Store tokens and expiration time in localStorage
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expirationTime", expirationTime);

      // Set success message and clear any error messages
      setSuccessMessage("Login successful!");
      setErrorMessage("");

      // Navigate to home page after successful login
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/home");
      }, 1000);
    } catch (error) {
      // Handle login errors
      console.error('Error during login:', error.response?.data || error);
      
      // Set error message based on server response or a default message
      setErrorMessage(error.response?.data?.message || "Login failed. Invalid email or password.");
      setSuccessMessage("");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  // Check if the access token has expired
  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime();

    if (currentTime > expirationTime) {
      logoutUser();
    }
  };

  // Logout user and clear stored data
  const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expirationTime");
    alert("Session expired. Please log in again.");
    navigate("/");
  };

  // Set up interval to periodically check token expiration
  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 60000); // Check every minute
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-600">
      <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black-800 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Please enter your email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              onChange={handleChange}
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Please enter your password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-10px bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Login Now
            </button>
            <Link
              to="/admin/dashboard"
              className="ml-4 text-blue-500 hover:text-blue-700"
            >
              Dashboard
            </Link>
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