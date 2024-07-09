import React from 'react'
import Header from '../Sharedcomponets/Header';
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from 'react-router-dom';
import Footer from '../Sharedcomponets/Footer';
const Order = () => {
  return (
    <div>
        <Header/>
        <div
          className="bg-cover bg-no-repeat w-full h-64 mt-28"
          style={{ backgroundImage: `url(${Aimage1})` }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-black text-3xl font-extrabold">ABOUT US</h1>
            <div className="flex gap-2 ">
              <Link className="text-blue-600 text-xl" to="/home">
                home/
              </Link>
              <Link className="text-xl" to="/about">
                about
              </Link>
            </div>
          </div>
        </div>
       
        
        <div className="border border-black my-10 p-4 bg-red-300 font-bold
        ">
  <h1 className=" font-bold mb-4 text-3xl">PLACED ORDER</h1>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <h1 className="text-sm font-bold">Placed on:</h1>
      <p className="text-gray-700">03-March-2022</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Name:</h1>
      <p className="text-gray-700">Shaikh Anas</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Number:</h1>
      <p className="text-gray-700">0988282882</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Email:</h1>
      <p className="text-gray-700">jcy@gmail.com</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Address:</h1>
      <p className="text-gray-700">Flat No 1, Glory Street</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Payment Method:</h1>
      <p className="text-gray-700">Paypal</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Total Price:</h1>
      <p className="text-gray-700">$122/-</p>
    </div>
    <div>
      <h1 className="text-sm font-bold">Payment Status:</h1>
      <p className="text-gray-700">
        <span className="text-red-500">Pending</span>
      </p>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Order;