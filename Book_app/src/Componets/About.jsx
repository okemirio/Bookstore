import React from "react";
import Header from "../Sharedcomponets/Header";
import Aimage1 from "../../public/images/heading-bg.webp";
import { Link } from "react-router-dom";
import AImage2 from "../../public/images/about-img.jpg";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import Footer from "../Sharedcomponets/Footer";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
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
            <div className="flex gap-2">
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
              atque ullam nesciunt nostrum? Lorem ipsum dolor sit.KI
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
            src="https://media.istockphoto.com/id/1478316046/photo/portrait-of-high-school-teacher-at-school-library.webp?b=1&s=612x612&w=0&k=20&c=KfSvbAXNXJMvd7nd0VbC1a49jGwdC0nTdRimGjEw80M="
            alt="Client 1"
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
            src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM="
            alt="Client 2"
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
          <h1 className="py-2 font-bold text-center">Jane Doe</h1>
        </div>
        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o="
            alt="Client 3"
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
          <h1 className="py-2 font-bold text-center">Chris Doe</h1>
        </div>
        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://media.istockphoto.com/id/1197613449/photo/old-business-woman-sitting-in-cafe-alone.jpg?s=612x612&w=0&k=20&c=6q6WG_Q5SYfdJW2XizOO8lf4oBUtCr2rYWmlNhLNAY8="
            alt="Client 4"
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
          <h1 className="py-2 font-bold text-center">Alex Doe</h1>
        </div>
        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://media.istockphoto.com/id/1805415721/photo/portrait-of-a-smiling-young-indian-man-studying-and-working-in-a-library-at-a-laptop-sitting.jpg?s=612x612&w=0&k=20&c=tgpZVyRZXcUiUiZpUypjr_hWsaA_LnmTWckn2DeyIeg="
            alt="Client 5"
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
          <h1 className="py-2 font-bold text-center">Emma Doe</h1>
        </div>
        <div className="border p-7 m-4 bg-white rounded-lg shadow-lg">
          <img
            className="w-20 h-20 rounded-full mx-auto"
            src="https://media.istockphoto.com/id/1408150684/photo/happy-man-working-at-home-on-his-laptop.jpg?s=612x612&w=0&k=20&c=JlkeU46RlN_xDR8Vp5e9vJcHQB6zfWjilJbp8sGxMO8="
            alt="Client 6"
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
          <h1 className="py-2 font-bold text-center">Liam Doe</h1>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 py-10">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold mb-10">GREAT AUTHORS</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-4">
          <div className="border author overflow-hidden border-black bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover"
              src="https://media.istockphoto.com/id/1197613449/photo/old-business-woman-sitting-in-cafe-alone.jpg?s=612x612&w=0&k=20&c=6q6WG_Q5SYfdJW2XizOO8lf4oBUtCr2rYWmlNhLNAY8="
              alt="Author 1"
            />
            <h2 className="text-2xl font-semibold">Joe Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4">
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
          <div className="border author overflow-hidden border-black bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover"
              src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM="
              alt="Author 2"
            />
            <h2 className="text-2xl font-semibold">Jane Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4">
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
          <div className="border author overflow-hidden border-black bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover"
              src="https://media.istockphoto.com/id/1345371869/photo/senior-male-author-sitting-at-table-with-book-and-holds-hands-under-head.jpg?s=612x612&w=0&k=20&c=RiQw0gXvUm2c9UsAK77MjS7Wr49i5s-TEm-l6QMX43o="
              alt="Author 3"
            />
            <h2 className="text-2xl font-semibold">Chris Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4">
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
          <div className="border author overflow-hidden border-black bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover"
              src="https://media.istockphoto.com/id/1805415721/photo/portrait-of-a-smiling-young-indian-man-studying-and-working-in-a-library-at-a-laptop-sitting.jpg?s=612x612&w=0&k=20&c=tgpZVyRZXcUiUiZpUypjr_hWsaA_LnmTWckn2DeyIeg="
              alt="Author 4"
            />
            <h2 className="text-2xl font-semibold">Alex Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4">
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
          <div className="border author overflow-hidden border-black bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover"
              src="https://media.istockphoto.com/id/1408150684/photo/happy-man-working-at-home-on-his-laptop.jpg?s=612x612&w=0&k=20&c=JlkeU46RlN_xDR8Vp5e9vJcHQB6zfWjilJbp8sGxMO8="
              alt="Author 5"
            />
            <h2 className="text-2xl font-semibold">Emma Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4">
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
          <div className="border author overflow-hidden border-black bg-white rounded-lg shadow-lg flex flex-col items-center relative">
            <img
              className="mb-6 w-96 h-96 object-cover"
              src="https://media.istockphoto.com/id/841944172/photo/portrait-of-a-bookbinder.jpg?s=612x612&w=0&k=20&c=XGejM1tTMSHojizHpmYXw7n7A7JUAYGbWi2JuJi_EoI="
              alt="Author 6"
            />
            <h2 className="text-2xl font-semibold">Liam Doe</h2>
            <div className="absolute left-[-30px] show-all-star top-4">
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
      </div>
      <Footer />
    </>
  );
};

export default About;
