import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider from react-slick
import Header from "../Sharedcomponets/Header";
import ListedProducts from "../Sharedcomponets/ListedProducts"; // Ensure ListedProducts is a default export
import Footer from "../Sharedcomponets/Footer";
import Image1 from "../../public/images/home-bg2.jpg";
import Image2 from "../../public/images/about-img.jpg";
import Image3 from "../../public/images/book4.jpeg"; // Add additional images
import Image4 from "../../public/images/book1.jpeg"; // Add additional images

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // Add a fade transition between images
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Carousel */}
      <Slider {...settings}>
        <div>
          <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Image1})` }}>
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
        </div>
        <div>
          <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Image4})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white font-bold text-center gap-4 sm:gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">EXPLORE OUR COLLECTION</h1>
              <p className="font-thin text-xs sm:text-sm md:text-base text-center mx-4">
                Choose from a wide variety of genres and categories curated just for you.
              </p>
              <button className="text-xs sm:text-sm md:text-base text-white bg-blue-600 p-2 sm:p-3 md:p-4 rounded-md">
                <a href="/shop">Shop Now</a>
                
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${Image3})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white font-bold text-center gap-4 sm:gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">DELIVERED WITH LOVE</h1>
              <p className="font-thin text-xs sm:text-sm md:text-base text-center mx-4">
                Enjoy quick and safe delivery to your doorstep.
              </p>
              <button className="text-xs sm:text-sm md:text-base text-white bg-blue-600 p-2 sm:p-3 md:p-4 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Slider>

      {/* Main Content */}
      <Header />
      <ListedProducts />

      {/* About Section */}
      <div className="flex flex-col sm:flex-row mx-4 sm:mx-10 p-4 sm:p-8 gap-4 sm:gap-8">
        <div className="flex-shrink-0">
          <img className="w-full h-auto rounded-md" src={Image2} alt="About Us" />
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
