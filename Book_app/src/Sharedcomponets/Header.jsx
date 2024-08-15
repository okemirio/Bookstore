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

  useEffect(() => {
    // Fetch user info when the user hovers over the person icon
    if (isHovered && !user) {
      fetchUserInfo();
    }
  }, [isHovered, user]);

  useEffect(() => {
    // Fetch cart count when the component mounts
    fetchCartCount();

    // Set up event listener for cart updates
    const handleCartUpdate = () => fetchCartCount();
    window.addEventListener('cartUpdated', handleCartUpdate);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5000/auth/userinfo', {
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
      const response = await axios.get('http://localhost:5000/carts/cart/read', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartCount(response.data.cart.length); // Update cart count
    } catch (error) {
      console.error('Error fetching cart count:', error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full z-50 shadow-md'>
      <div className='bg-gray-100 p-4 flex justify-around items-center space-x-96'>
        <div className='flex items-center space-x-2'>
          <a href="https://www.facebook.com"><FaFacebookF className='text-black text-sm' /></a>
          <a href="https://twitter.com/"><FaTwitter className='text-black text-sm' /></a>
          <a href="https://www.instagram.com/"><FaInstagram className='text-black text-sm' /></a>
          <a href="https://www.linkedin.com/"><FaLinkedin className='text-black text-sm' /></a>
        </div>

        <div className='space-x-4'>
          <Link to="/" className='text-blue-600 hover:underline'><span className='text-black'>New</span> login |</Link>
          <Link to="/register" className='text-blue-600 hover:underline'>register</Link>
        </div>
      </div>

      <div className='bg-white p-4 flex items-center space-x-10 justify-evenly'>
        <div className='text-blue-600 text-lg font-bold'>
          <h2>Bookly.</h2>
        </div>
        <nav className='flex items-center justify-center list-none space-x-5 font-bold'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </nav>
        <div className='flex items-center justify-around space-x-4'>
          <Link to="/search"><FaSearch /></Link>
          <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <IoPerson />
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
          <Link to="/cart"><FaShoppingCart /></Link>
          <h1>({cartCount})</h1> {/* Display cart count */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  userInfo: {
    position: 'absolute',
    top: '50px',
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
