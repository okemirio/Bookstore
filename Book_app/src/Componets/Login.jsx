import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [post, setPost] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    if (!post.email || !post.password) {
      if (!post.email) setErrorMessage("Email is required");
      if (!post.password) setErrorMessage("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://bookkapp-backend.vercel.app/auth/",
        post
      );
      const { accessToken, refreshToken, expiresIn } = response.data;

      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem("authToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expirationTime", expirationTime);

      setSuccessMessage("Login successful!");
      setErrorMessage("");

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

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime();

    if (currentTime > expirationTime) {
      logoutUser();
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("expirationTime");
    alert("Session expired. Please log in again.");
    navigate("/");
  };

  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50">
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 h-[650px] bg-cover bg-center relative">
        <img
          src="https://images.unsplash.com/photo-1510172951991-856a654063f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3MlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D"
          alt="Login Illustration"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-transparent opacity-60" />
        <div className="absolute bottom-10 left-10 text-white ">
          <h2 className="text-4xl font-bold">Welcome Back!</h2>
          <p className="mt-2 text-lg">
            Enter your credentials to access your account.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Login
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Please enter your email and password
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div>
                <Link
                  to="/send-reset-code"
                  className="text-sm text-purple-600 hover:text-purple-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          </form>

          {errorMessage && (
            <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="mt-4 text-sm text-green-500">{successMessage}</p>
          )}

          <p className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/register" className="text-purple-600 hover:text-purple-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
