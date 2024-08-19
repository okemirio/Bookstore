import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import axios from 'axios';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false); // State to track if the user is hovering over the person icon
  const [user, setUser] = useState(null); // State to store the fetched user information
  const [error, setError] = useState(null); // State to store any errors during the user fetch
  const [cartCount, setCartCount] = useState(0); // State to store the number of items in the cart

  // Effect to fetch user info when the person icon is hovered
  useEffect(() => {
    if (isHovered && !user) {
      fetchUserInfo();
    }
  }, [isHovered, user]);

  // Effect to fetch cart count when the component mounts and set up an event listener for cart updates
  useEffect(() => {
    fetchCartCount(); // Fetch cart count initially

    // Set up an event listener for the custom 'cartUpdated' event
    const handleCartUpdate = () => fetchCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  // Function to fetch user information
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Get the auth token from local storage
      const response = await axios.get('https://bookkapp-backend.vercel.app/auth/userinfo', {
        headers: { Authorization: `Bearer ${token}` }, // Pass the token in the request header
      });
      setUser(response.data); // Update user state with fetched data
      setError(null); // Clear any existing errors
    } catch (error) {
      console.error('Error fetching user info:', error);
      setError('Failed to fetch user info.'); // Set error message if fetch fails
    }
  };

  // Function to fetch the cart count
  const fetchCartCount = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Get the auth token from local storage
      const response = await axios.get('https://bookkapp-backend.vercel.app/carts/cart/read', {
        headers: { Authorization: `Bearer ${token}` }, // Pass the token in the request header
      });
      setCartCount(response.data.cart.length); // Update the cart count state
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='bg-gray-100 p-4 flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          {/* Social media icons */}
          <a href="https://www.facebook.com"><FaFacebookF className='text-black text-sm' /></a>
          <a href="https://twitter.com/"><FaTwitter className='text-black text-sm' /></a>
          <a href="https://www.instagram.com/"><FaInstagram className='text-black text-sm' /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin className='text-black text-sm' /></a>
        </div>

        <div className='space-x-2 md:space-x-4'>
          {/* Login and Register links */}
          <Link to="/" className='text-blue-600 hover:underline'><span className='text-black'>New</span> login |</Link>
          <Link to="/register" className='text-blue-600 hover:underline'>register</Link>
        </div>
      </div>

      <div className='bg-white p-4 flex flex-col md:flex-row items-center justify-between'>
        {/* Logo */}
        <div className='text-blue-600 text-lg font-bold'>
          <h2>Bookly.</h2>
        </div>
        {/* Navigation links */}
        <nav className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 font-bold'>
          <Link to="/home" className='hover:text-blue-600'>Home</Link>
          <Link to="/about" className='hover:text-blue-600'>About</Link>
          <Link to="/contact" className='hover:text-blue-600'>Contact</Link>
          <Link to="/shop" className='hover:text-blue-600'>Shop</Link>
          <Link to="/orders" className='hover:text-blue-600'>Orders</Link>
        </nav>
        {/* User actions */}
        <div className='flex items-center space-x-4'>
          <Link to="/search"><FaSearch className='hover:text-blue-600' /></Link>
          {/* Person icon with user info on hover */}
          <div
            className='relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoPerson className='hover:text-blue-600' />
            {isHovered && (
              <div style={styles.userInfo}>
                {user ? (
                  <>
                    <p>{user.username || 'No username available'}</p>
                    <p>{user.email || 'No email available'}</p>
                  </>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            )}
          </div>
          {/* Shopping cart icon with cart count */}
          <Link to="/cart" className='relative'>
            <FaShoppingCart className='hover:text-blue-600' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
              {cartCount} {/* Display the cart count */}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  userInfo: {
    position: 'absolute',
    top: '40px',
    right: '0',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    zIndex: 1,
    textAlign: 'left',
  },
};

export default Header;
