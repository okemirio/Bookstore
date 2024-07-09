import React from "react";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import AImage2 from "../../public/images/about-img.jpg";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import Footer from "../Sharedcomponets/Footer";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./style.css";

export const About = () => {
  return (
    <>
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
              <Link className="text-xl" to="/about">
                about
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <div className="w-1/2 m-1">
            <img
              className="w-full h-96 rounded-lg shadow-lg"
              src={AImage2}
              alt="Description of image"
            />
          </div>
          <div className="w-[40%] bg-slate-300 p-10 rounded-lg shadow-lg">
            <h1 className="font-extrabold text-2xl mb-4">WHY CHOOSE US?</h1>
            <p className="mb-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga rem
              pariatur dicta eaque exercitationem. Hic explicabo nihil aperiam
              labore debitis?
            </p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              voluptatibus delectus consequuntur, facilis ipsum repellat? Magnam
              atque ullam nesciunt nostrum?Lorem ipsum dolor sit.KI
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 text-white p-2 rounded-md mt-8 inline-block hover:bg-black"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      <h1 className="flex text-center justify-center m-5 font-bold text-3xl">
        CLIENTS REVIEWS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-4">
        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8Cc-DUqt661ZPXbQg5vf_zE5AmjYxiSxFL_MZAZOKcAaRAUr"
            alt="John Doe"
          t/>
          <div className="mt-3 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure accusamus fugit voluptate! Nesciunt modi praesentium nulla
            nobis animi ipsum nam quisquam qui. Nobis, sunt amet repellendus
            aliquid modi odit!
          </div>
          <div className="flex justify-center">
            <div className="text-yellow-500 flex text-sm font-bold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
          </div>
          <h1 className="py-2 font-bold text-center">John Doe</h1>
        </div>

        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjt4Deh15rOR9m98Ty8onKUTBeNHxNsOjwsrhO2C8W7IDxM_1y"
            alt="John Doe"
          />
          <div className="mt-3 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure accusamus fugit voluptate! Nesciunt modi praesentium nulla
            nobis animi ipsum nam quisquam qui. Nobis, sunt amet repellendus
            aliquid modi odit!
          </div>
          <div className="flex justify-center">
            <div className="text-yellow-500 flex text-sm font-bold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <h1 className="py-2 font-bold text-center">John Doe</h1>
        </div>

        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4CKVjnHlhFhnqZi3xNmcABSmQbm36__dj4l6__Sw5Bh_7NKUl"
            alt="John Doe"
          />
          <div className="mt-3 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure accusamus fugit voluptate! Nesciunt modi praesentium nulla
            nobis animi ipsum nam quisquam qui. Nobis, sunt amet repellendus
            aliquid modi odit!
          </div>
          <div className="flex justify-center">
            <div className="text-yellow-500 flex text-sm font-bold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
          </div>
          <h1 className="py-2 font-bold text-center">John Doe</h1>
        </div>

        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjmRikUR5KOSzaDmFXD6GWwTAuQWmICwFDtZ2zOg7FE4MTyvfw"
            alt="John Doe"
          />
          <div className="mt-3 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure accusamus fugit voluptate! Nesciunt modi praesentium nulla
            nobis animi ipsum nam quisquam qui. Nobis, sunt amet repellendus
            aliquid modi odit!
          </div>
          <div className="flex justify-center">
            <div className="text-yellow-500 flex text-sm font-bold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
          </div>
          <h1 className="py-2 font-bold text-center">John Doe</h1>
        </div>

        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbC-eEeoXZ0KmaqzTkR-zDXD6iaYqGqgB0XslI9jI2kaiu7tEy"
            alt="John Doe"
          />
          <div className="mt-3 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure accusamus fugit voluptate! Nesciunt modi praesentium nulla
            nobis animi ipsum nam quisquam qui. Nobis, sunt amet repellendus
            aliquid modi odit!
          </div>
          <div className="flex justify-center">
            <div className="text-yellow-500 flex text-sm font-bold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
          </div>
          <h1 className="py-2 font-bold text-center">John Doe</h1>
        </div>

        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43VxCopuMVYcGwA5wZKWGiRN_b-QIysmw93oG3ggXvOkATYJ9"
            alt="John Doe"
          />
          <div className="mt-3 my-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            iure accusamus fugit voluptate! Nesciunt modi praesentium nulla
            nobis animi ipsum nam quisquam qui. Nobis, sunt amet repellendus
            aliquid modi odit!
          </div>
          <div className="flex justify-center">
            <div className="text-yellow-500 flex text-sm font-bold">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
          </div>
          <h1 className="py-2 font-bold text-center">John Doe</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-10">
        {/* Great Authors section */}
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold mb-10">GREAT AUTHORS</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4 ">
          <div className="border author overflow-hidden border-black scroll  bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8Cc-DUqt661ZPXbQg5vf_zE5AmjYxiSxFL_MZAZOKcAaRAUr"
              alt="Joe Doe"
            />
            <h2 className="text-2xl font-semibold">Joe Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4 ">
              <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </div>
              <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </div>
              <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                <a href="https://x.com/">
                  <FaTwitter />
                </a>
              </div>
              <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>







          <div className="border author overflow-hidden border-black scroll  bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <div className="border border-black bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img
                className="mb-6 w-96 h-96 object-cover "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwGT-LqadkyZzWr8CtKwmvVjpI4zDftnM6Hvo9Y0-PBTwQKCDA"
                alt="Joe Doe"
              />
              <h2 className="text-2xl font-semibold">Joe Doe</h2>
              <div className="absolute left-[-30px] show-all-star top-4 ">
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://x.com/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="border author overflow-hidden border-black scroll  bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <div className="border border-black bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img
                className="mb-6 w-96 h-96 object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_bGSjNpbTKbASnPHG3Mv2IPgkWwTkd0JqsinQt25rNv8MpXt"
                alt="Joe Doe"
              />
              <h2 className="text-2xl font-semibold">Joe Doe</h2>
              <div className="absolute left-[-30px] show-all-star top-4 ">
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://x.com/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>




          <div className="border author overflow-hidden border-black scroll  bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <div className="border border-black bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img
                className="mb-6 w-96 h-96 object-cover "
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFcf6TFIHJgC42DWH_9gQBEAb6s64O8g9hV_9d1I4G6N4CHQ-q"
                alt="Joe Doe"
              />
              <h2 className="text-2xl font-semibold">Joe Doe</h2>
              <div className="absolute left-[-30px] show-all-star top-4 ">
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://x.com/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border author overflow-hidden border-black scroll  bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <div className="border border-black bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img
                className="mb-6 w-96 h-96 object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0nJ3usOpmxoYRNl59Om3ea66CffwHGEWcTNuIRSdV6ilB0TT"
                alt="Joe Doe"
              />
              <h2 className="text-2xl font-semibold">Joe Doe</h2>
              <div className="absolute left-[-30px] show-all-star top-4 ">
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://x.com/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border author overflow-hidden border-black scroll  bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <div className="border border-black bg-white rounded-lg shadow-lg flex flex-col items-center">
              <img
                className="mb-6 w-96 h-96 object-cover "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUSV7Du5lRWHfmZJewvuXAqOphnW2v9mSQCRNtKJ10eztfJPw"
                alt="Joe Doe"
              />
              <h2 className="text-2xl font-semibold">Joe Doe</h2>
              <div className="absolute left-[-30px] show-all-star top-4 ">
                <div className="bg-white hover:bg-black hover:text-white p-1 m-1">
                  <a href="https://www.facebook.com/">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.instagram.com/">
                    <FaInstagram />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://x.com/">
                    <FaTwitter />
                  </a>
                </div>
                <div className="bg-white p-1 m-1 hover:bg-black hover:text-white">
                  <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
     
      <Footer />
     
    </>
  );
};

export default About;
