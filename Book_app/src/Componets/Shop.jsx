import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../Sharedcomponets/Header';
import Aimage1 from '../../public/images/heading-bg.webp';
import ListedProducts from '../Sharedcomponets/ListedProducts';
import Footer from '../Sharedcomponets/Footer';
import ListedShop from '../Sharedcomponets/ListedShop';

const Shop = () => {
  return (
    <div>
      <Header />
      <div className="relative">
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
              <Link className="text-xl" to="/shop">
                shop          
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ListedShop/>
      <Footer/>
    </div>
  );
}

export default Shop;
