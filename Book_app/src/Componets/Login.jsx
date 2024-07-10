import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
            <div className="min-h-screen flex items-center justify-center bg-white-600">
          <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
            <h2 className="text-3xl font-bold mb-4 text-black-800 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <input type="text" id="username" name="username" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="please enter your email" />
              </div>
              <div>
                <input type="password" id="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="please enter your password" />
              </div>
              <div>
              <button type="submit" className="w-10px  bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 " ><Link to="/home">Login Now</Link>
              
              </button>
              <Link to='/dashboard'>Dashboard</Link>
              </div>
            </form>
            <p className="mt-4 text-sm text-center">
              Don't have an account? <Link className="text-purple-400" to="/register">Register Now</Link>
            </p>
          </div>
        </div>
    </div>
  
  );
};

export default Login;
