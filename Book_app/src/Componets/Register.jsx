import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
  const [register, setRegister] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setRegister({...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register.password !== register.confirmPassword) {
      setError('Passwords do not match');
      alert('Passwords do not match');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    if (!register.username || !register.email || !register.password || !register.confirmPassword || !register.userType) {
      setError('Please fill in all fields');
      alert('Please fill in all fields');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    setError('');
    axios.post('http://localhost:5000/auth/register', register)
      .then((response) => {
        setSuccess('Registration successful. Please log in.');
        alert('Registration successful. Please log in.');
        setTimeout(() => {
          setSuccess('');
          navigate('/');
        }, 1000);
      })
      .catch((error) => {
        setError('Registration failed. Please try again.');
        alert('Registration failed. Please try again.');
        setTimeout(() => {
          setError('');
        }, 1000);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input
              type="text"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="py-2 px-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select User Type</option>
              <option value="user1">User</option>
              <option value="user2">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Register Now
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
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
