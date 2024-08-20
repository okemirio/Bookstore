import React from "react";
import { Link } from "react-router-dom";
import Header from "../Sharedcomponets/Header";
import ListedProducts from "../Sharedcomponets/ListedProducts"; // Ensure ListedProducts is a default export
import Footer from "../Sharedcomponets/Footer";
import Image from '../../public/images/home-bg2.jpg';
import Image7 from "../../public/images/about-img.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white font-bold text-center gap-4 sm:gap-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">HAND PICKED BOOK</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl">TO YOUR DOOR</h1>
          <p className="font-thin text-xs sm:text-sm md:text-base text-center mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Nihil omnis iure consequuntur vel suscipit, voluptatum eum error excepturi dicta laudantium.
          </p>
          <button className="text-xs sm:text-sm md:text-base text-white bg-blue-600 p-2 sm:p-3 md:p-4 rounded-md">
            Discover More
          </button>
        </div>
      </div>

      {/* Main Content */}
      <Header />
      <ListedProducts />

      {/* About Section */}
      <div className="flex flex-col sm:flex-row mx-4 sm:mx-10 p-4 sm:p-8 gap-4 sm:gap-8">
        <div className="flex-shrink-0">
          <img className="w-full h-auto rounded-md" src={Image7} alt="About Us" />
        </div>
        <div className="text-center sm:text-left flex-grow bg-slate-300 p-4 sm:p-8">
          <h1 className="font-extrabold text-lg sm:text-2xl mb-4">ABOUT US</h1>
          <p className="text-sm sm:text-base mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, accusantium!</p>
          <p className="text-sm sm:text-base mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, alias?</p>
          <Link to="/about" className="bg-blue-600 text-white p-2 rounded-md inline-block">
            Read More
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white text-center p-4 sm:p-6">
        <h1 className="font-bold text-xl sm:text-2xl mb-4">HAVE ANY QUESTIONS?</h1>
        <div className="font-thin text-sm sm:text-base mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> In eveniet dolore ea fugiat illo at porro iure rem.
            Inventore, exercitationem.
          </p>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-md text-sm sm:text-base">
          Contact us
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
