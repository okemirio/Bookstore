import React from 'react';
import { Link } from 'react-router-dom';
import Aimage1 from '../../public/images/heading-bg.webp';

const BackgroundSection = () => (
  <div
    className="bg-cover bg-no-repeat w-full h-64 mt-28 flex items-center justify-center"
    style={{ backgroundImage: `url(${Aimage1})` }}
  >
    <div className="text-center">
      <h1 className="text-black text-4xl font-extrabold">YOUR ORDERS</h1>
      <div className="flex gap-2 justify-center mt-2">
        <Link className="text-blue-600 text-xl" to="/home">Home</Link>
        <span className="text-black text-xl">/</span>
        <Link className="text-black text-xl" to="/orders">Orders</Link>
      </div>
    </div>
  </div>
);

export default BackgroundSection;
