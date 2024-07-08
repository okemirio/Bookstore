import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
  return (
<>
<div className='fixed top-0 left-0 w-full z-50 shadow-md'>
  
<div className='bg-gray-100 p-4 flex justify-around items-center space-x-96	'>

<div className='flex items-center space-x-2 justify-evenly '>
  <a href="https://www.facebook.com">
  <FaFacebookF className='text-black text-sm' />
  </a>
  <a href="https://x.com/">
  <FaSquareTwitter className='text-black text-sm' />
  </a>
  <a href="https://www.instagram.com/">
  <FaInstagram className='text-black text-sm' />
  </a>
  <a href="https://www.linkedin.com/">
  <FaLinkedin className='text-black text-sm' />
  </a>
  </div>

<div className='space-x-4'>
  <Link to="/" className='text-blue-600 hover:underline'><span className='text-black'>New</span> login |</Link>
  <Link to="/register" className='text-blue-600 hover:underline'>register</Link>
</div>
</div>

<div className='bg-white p-4 flex items-center space-x-10 justify-evenly '>
<div className='text-blue-600 text-lg font-bold'>
    <h2>Bookly.</h2>
</div>
<div >
    <nav className='flex items-center justify-center list-none space-x-5 font-bold' >
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/orders">Orders</Link>
        </li>
    </nav>
</div>
<div className='flex items-center justify-around space-x-4'>
<Link to="/search"><FaSearch />
</Link>
<IoPerson />
<Link to="/cart"><FaCartShopping />

</Link>
<h1>(0)</h1>

</div>
  
</div>

</div>
</>
  );
}

export default Header;
