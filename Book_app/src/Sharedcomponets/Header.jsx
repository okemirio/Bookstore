import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import axios from 'axios';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='bg-gray-100 p-4 flex justify-between items-center'>
        <div className='flex items-center space-x-2'>
          <a href="https://www.facebook.com"><FaFacebookF className='text-black text-sm' /></a>
          <a href="https://twitter.com/"><FaTwitter className='text-black text-sm' /></a>
          <a href="https://www.instagram.com/"><FaInstagram className='text-black text-sm' /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin className='text-black text-sm' /></a>
        </div>
        <div className='space-x-2 md:space-x-4'>
          <Link to="/" className='text-blue-600 hover:underline'><span className='text-black'>New</span> login |</Link>
          <Link to="/register" className='text-blue-600 hover:underline'>register</Link>
        </div>
      </div>

      <div className='bg-white p-4 flex items-center justify-between'>
        <div className='flex items-center'>
          <button onClick={toggleMenu} className='mr-4 md:hidden'>
            <FaBars className='text-2xl' />
          </button>
          <div className='text-blue-600 text-lg font-bold'>
            <h2>Bookly.</h2>
          </div>
        </div>
        
        {/* Navigation for medium and large screens */}
        <nav className='hidden md:flex items-center space-x-8 font-bold'>
          <Link to="/home" className='hover:text-blue-600'>Home</Link>
          <Link to="/about" className='hover:text-blue-600'>About</Link>
          <Link to="/contact" className='hover:text-blue-600'>Contact</Link>
          <Link to="/shop" className='hover:text-blue-600'>Shop</Link>
          <Link to="/orders" className='hover:text-blue-600'>Orders</Link>
        </nav>

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

      {/* Responsive side menu for small screens */}
      <div className={`md:hidden fixed top-0 left-0 h-72 w-40 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className='p-4'>
          <button onClick={toggleMenu} className='mb-4'>
            <FaBars className='text-2xl' />
          </button>
          <nav className='flex flex-col space-y-4 font-bold'>
            <Link to="/home" className='hover:text-blue-600'>Home</Link>
            <Link to="/about" className='hover:text-blue-600'>About</Link>
            <Link to="/contact" className='hover:text-blue-600'>Contact</Link>
            <Link to="/shop" className='hover:text-blue-600'>Shop</Link>
            <Link to="/orders" className='hover:text-blue-600'>Orders</Link>
          </nav>
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