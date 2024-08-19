import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post("https://bookkapp-backend.vercel.app/auth/login", post)
      .then((response) => {
        const { token, expiresIn } = response.data;

        // Store the token and its expiration time in localStorage
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        console.log(typeof expiresIn); // Should be 'number'

        localStorage.setItem("authToken", token);
        localStorage.setItem("expirationTime", expirationTime);

        setSuccessMessage("Login successful!");
        setErrorMessage("");

        // Using alert for immediate feedback
        alert("Login successful!");

        // Navigate to home page upon successful login
        setTimeout(() => {
          setSuccessMessage("");
          navigate("/home");
        }, 1000);
      })
      .catch((error) => {
        setErrorMessage("Login failed. Invalid email or password.");
        setSuccessMessage("");

        // Using alert for immediate feedback
        alert("Login failed. Please try again.");

        // Clear the error message after 3 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 1000);
      });
  };

  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem("expirationTime");
    const currentTime = new Date().getTime();

    if (currentTime > expirationTime) {
      // Token has expired, log out the user
      logoutUser();
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("expirationTime");
    alert("Session expired. Please log in again.");
    navigate("/"); // Redirect to the login page
  };

  // Set up an interval to check for token expiration every minute
  useEffect(() => {
    const intervalId = setInterval(checkTokenExpiration, 60000); // Check every 1 minute

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
