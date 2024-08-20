import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import axios from 'axios';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isHovered && !user) {
      fetchUserInfo();
    }
  }, [isHovered, user]);

  useEffect(() => {
    fetchCartCount();
    const handleCartUpdate = () => fetchCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('https://bookkapp-backend.vercel.app/auth/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching user info:', error);
      setError('Failed to fetch user info.');
    }
  };

  const fetchCartCount = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('https://bookkapp-backend.vercel.app/carts/cart/read', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartCount(response.data.cart.length);
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-md bg-white'>
      {/* Top Bar */}
      <div className='bg-gray-100 p-4 flex justify-between items-center px-20'>
        <div className='flex items-center space-x-2'>
          <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF className='text-black text-sm' /></a>
          <a href="https://twitter.com/" aria-label="Twitter"><FaTwitter className='text-black text-sm' /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram className='text-black text-sm' /></a>
          <a href="https://www.linkedin.com/" aria-label="LinkedIn"><FaLinkedin className='text-black text-sm' /></a>
        </div>
        <div className='space-x-2 md:space-x-4'>
          <Link to="/" className='text-blue-600 hover:underline'><span className='text-black'>New</span> login |</Link>
          <Link to="/register" className='text-blue-600 hover:underline'>register</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className='bg-white p-4 flex items-center justify-between px-20'>
        <div className='text-blue-600 text-lg font-bold'>
          <h2>Bookly.</h2>
        </div>

        {/* Toggle Button for Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className='md:hidden text-xl focus:outline-none'>
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex md:items-center md:space-x-8 absolute md:static bg-white md:bg-transparent top-0 left-0 w-full md:w-auto transition-transform transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          } md:transition-none shadow-lg md:shadow-none p-8 md:p-0`}
        >
          <div className='md:hidden mb-4'>
            <input
              type='text'
              placeholder='Search...'
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          <Link to="/home" className='block p-4 text-center hover:text-blue-600 border-b md:border-none'>Home</Link>
          <Link to="/about" className='block p-4 text-center hover:text-blue-600 border-b md:border-none'>About</Link>
          <Link to="/contact" className='block p-4 text-center hover:text-blue-600 border-b md:border-none'>Contact</Link>
          <Link to="/shop" className='block p-4 text-center hover:text-blue-600 border-b md:border-none'>Shop</Link>
          <Link to="/orders" className='block p-4 text-center hover:text-blue-600'>Orders</Link>
        </nav>

        {/* User and Cart Icons */}
        <div className='flex items-center space-x-4'>
          <Link to="/search"><FaSearch className='hover:text-blue-600' /></Link>
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
          <Link to="/cart" className='relative'>
            <FaShoppingCart className='hover:text-blue-600' />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'>
              {cartCount}
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
    minWidth: '150px', // Ensure minimum width for mobile
  },
};

export default Header;
