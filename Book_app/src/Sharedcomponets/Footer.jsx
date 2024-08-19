import React from 'react';
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-wrap justify-around my-6 items-start'>
        <div className='list-none flex-1 min-w-[150px] px-4'>
          <div className='py-4'>
            <h1 className='font-bold '>Quick Links</h1>
          </div>
          <nav>
            <li className='py-1'>
              <Link to="/home">Home</Link>
            </li>
            <li className='py-1'>
              <Link to="/about">About</Link>
            </li>
            <li className='py-1'>
              <Link to="/shop">Shop</Link>
            </li>
            <li className='py-1'>
              <Link to="/contact">Contact</Link>
            </li>
          </nav>
        </div>

        <div className='list-none flex-1 min-w-[150px] px-4'>
          <div className='py-4'>
            <h1 className='font-bold '>EXTRA LINKS</h1>
          </div>
          <nav>
            <li className='py-1'>
              <Link to="/">Login</Link>
            </li>
            <li className='py-1'>
              <Link to="/register">Register</Link>
            </li>
            <li className='py-1'>
              <Link to="/orders">Cart</Link>
            </li>
            <li className='py-1'>
              <Link to="/orders">Order</Link>
            </li>
          </nav>
        </div>

        <div className='flex-1 min-w-[200px] px-4'>
          <div className='py-4'>
            <h1 className='font-bold'>CONTACT INFO</h1>
          </div>
          <nav>
            <li className='flex items-center gap-2 py-1'>
              <FaPhone />
              09018922099
            </li>
            <li className='flex items-center gap-2 py-1'>
              <FaPhone />
              09018922099
            </li>
            <li className='flex items-center gap-2 py-1'>
              <MdEmail />
              johnbosco@gmail.com
            </li>
            <li className='flex items-center gap-2 py-1'>
              <CiLocationOn />
              12 Johnny Avenue, Yaba
            </li>
          </nav>
        </div>

        <div className='list-none flex-1 min-w-[150px] px-4'>
          <div className='py-4'>
            <h1 className='font-bold'>FOLLOW US</h1>
          </div>
          <nav>
            <li className='py-1'>
              <a className='flex items-center gap-2' href="https://web.facebook.com/">
                <FaFacebookF />
                Facebook
              </a>
            </li>
            <li className='py-1'>
              <a className='flex items-center gap-2' href="https://x.com/">
                <FaTwitter />
                Twitter
              </a>
            </li>
            <li className='py-1'>
              <a className='flex items-center gap-2' href="https://www.instagram.com/">
                <FaInstagram />
                Instagram
              </a>
            </li>
            <li className='py-1'>
              <a className='flex items-center gap-2' href="https://www.linkedin.com">
                <FaLinkedin />
                LinkedIn
              </a>
            </li>
          </nav>
        </div>
      </div>
      <div className="text-center border-t border-gray-300 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mr Okemiri Onyedikachi. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
