import React from 'react'
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
     <div className='flex my-6 items-center justify-evenly'>
        <div className='list-none'>
            <div className='py-4'>
            <h1 className='font-bold '>Quick Links</h1>
            </div>
            <nav>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/shop">Shop</Link>

                </li>
                <li>
                <Link to="/contact">Contact</Link>

                </li>
            </nav>
        </div>
        <div className='list-none'>
            <div className='py-4'>
            <h1 className='font-bold '>EXTRA LINKS</h1>
            </div>
            <nav>
                <li>
                <Link to="/">login</Link>

                </li>
                <li>
                <Link to="/register">register</Link>
                </li>
                <li>
                <Link to="/orders">Cart</Link>

                </li>
                <li>
                    <Link to="/orders">Order</Link>
                </li>
            </nav>
        </div>
        <div>
          <div className='py-4'>
          <h1 className='font-bold'>CONTACT INFO</h1>
          </div>
            <nav>
                <li className='flex gap-2'>
                <FaPhone />
                09018922099
                </li>
                <li className='flex gap-2'>
                <FaPhone />
                09018922099
                </li>
                <li className='flex gap-2'>
                <MdEmail />
                johnbosco@gmail.com
                </li>
                <li className='flex gap-2'>
                <CiLocationOn />
                12 johnny avenue yaba
                </li>
            </nav>
        </div>
        <div className=' list-none'>
            <div>
            <h1 className='font-bold py-4'> FOLLOW US</h1>
            </div>
            <nav className='cursor-pointer'>
                <li>
                    <a className='flex gap-2' href="https://web.facebook.com/">
                    <FaFacebookF />
                    Facebook
                    </a>
                
                </li>
                <li>
                 <a className='flex gap-2' href="https://x.com/">
                 <FaTwitter />
                 twitter
                 </a>
                </li>
                <li>
                <a className='flex gap-2' href="https://www.instagram.com/">
                <FaInstagram />
                instagram
                </a>
                </li>
                <li>
                    <a className='flex gap-2' href="https://www.linkedin.com"> <FaLinkedin />
                    linkedin</a>
                </li>
            </nav>
        </div>
        <div>  
        </div>
        
    </div>
    <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <p className="text-sm">@copyright; &copy; {new Date().getFullYear()} Mr Okemiri Onyedikachi. All rights reserved.</p>
      </div>
   </div>
  )
}
export default Footer;