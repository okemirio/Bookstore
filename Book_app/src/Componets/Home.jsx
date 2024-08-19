import React from "react";
import { Link } from "react-router-dom";
import Header from "../Sharedcomponets/Header";
import ListedProducts from "../Sharedcomponets/ListedProducts";
import Footer from "../Sharedcomponets/Footer";
import Image from '../../public/images/home-bg2.jpg';
import Image7 from "../../public/images/about-img.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white font-bold text-4xl sm:text-2xl text-center gap-3 px-4">
          <h1>HAND PICKED BOOK</h1>
          <h1>TO YOUR DOOR</h1>
          <p className='font-thin text-sm sm:text-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Nihil omnis iure consequuntur vel suscipit, voluptatum eum error excepturi dicta laudantium.
          </p>
          <button className='text-sm sm:text-xs text-white bg-blue-600 p-2 rounded-[4px]'>
            Discover More
          </button>
        </div>
      </div>

      {/* Main Content */}
      <Header />
      <div className="flex-grow">
        <ListedProducts />
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-10 p-8 gap-6">
        <div className="flex-1">
          <img className="w-full h-auto object-cover" src={Image7} alt="About Us" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-slate-300 p-6 text-center">
          <h1 className="font-extrabold text-2xl sm:text-xl">ABOUT US</h1>
          <p className="mt-4 text-sm sm:text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, accusantium!
          </p>
          <p className="mt-2 text-sm sm:text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, alias?
          </p>
          <Link to="/about" className="bg-blue-600 text-white p-2 rounded-md mt-8 inline-block text-center">
            Read More
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white text-center p-5 flex flex-col items-center gap-3">
        <h1 className="font-bold text-lg sm:text-md">HAVE ANY QUESTIONS?</h1>
        <p className="font-thin text-sm sm:text-xs px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> In eveniet dolore ea fugiat illo at porro iure rem.
          Inventore, exercitationem.
        </p>
        <button className="bg-blue-600 text-white p-2 rounded-md">
          Contact us
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
