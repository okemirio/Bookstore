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
      <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
        <div className="relative z-10 flex flex-col m-20 items-center justify-center h-full text-white font-bold text-5xl text-center gap-5">
          <h1>HAND PICKED BOOK</h1>
          <h1>TO YOUR DOOR</h1>
          <p className='font-thin text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
            Nihil omnis iure consequuntur vel suscipit, voluptatum eum error excepturi dicta laudantium.
          </p>
          <button className='text-sm text-white bg-blue-600 p-2 rounded-[4px]'>Discover More</button>
        </div>
      </div>

      {/* Main Content */}
      <Header />
      <ListedProducts />

      {/* About Section */}
      <div className="flex mx-10 p-8">
        <div className="mt-10">
          <img className="w-full h-full" src={Image7} alt="About Us" />
        </div>
        <div className="block text-center justify-center m-20 bg-slate-300 p-8 mx-0 ">
          <h1 className="font-extrabold">ABOUT US</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, accusantium!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, alias?</p>
          <Link to="/about" className="bg-blue-600 text-white p-2 rounded-md mt-8 inline-block text-center">
            Read More
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white text-center p-5 ">
        <h1 className="font-bold">HAVE ANY QUESTIONS?</h1>
        <div className="font-thin">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> In eveniet dolore ea fugiat illo at porro iure rem.
            Inventore, exercitationem.
          </p>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-md m-5">
          Contact us
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
