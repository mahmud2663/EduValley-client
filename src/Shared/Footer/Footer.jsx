import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" space-y-3 mr-16">
            <div className="flex">
              <img
                className="h-8 w-8 mr-2"
                src="/src/assets/logo/logo.png"
                alt="Website Logo"
              />
              <h3 className="text-lg font-bold">Edu_Valley</h3>
            </div>
            <p>
              Explore the world of programming and enhance your skills with Edu_Valley's diverse e-learning resources. Discover the exciting realm of coding languages and technologies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">SERVICES</h3>
            <ul className="mt-4">
              <li>Branding</li>
              <li>Design</li>
              <li>Marketing</li>
              <li>Advertisement</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">COMPANY</h3>
            <ul className="mt-4">
              <li>About us</li>
              <li>Contact</li>
              <li>Jobs</li>
              <li>Press kit</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Connect with Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Edu_Valley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


