import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              id="username"
              name="username"
              className="py-2 px-3 border border-gray-300 rounded-md"
              required
              placeholder="Enter your Username"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              className="py-2 px-3 border border-gray-300 rounded-md"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              id="password"
              name="password"
              className="py-2 px-3 border border-gray-300 rounded-md"
              required
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="py-2 px-3 border border-gray-300 rounded-md"
              required
              placeholder="Please confirm your password"
            />
          </div>
          <div className="flex flex-col">
            <select
              id="userType"
              name="userType"
              className="py-2 px-3 border border-gray-300 rounded-md"
            >
              <option  value="">Select User Type</option>
              <option value="user1">User </option>
              <option value="user2">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          > <Link to="/">Register Now</Link>
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link className="text-purple-400" to="/">
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
