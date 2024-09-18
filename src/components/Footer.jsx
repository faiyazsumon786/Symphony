// import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Company Info Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-1">
            <h2 className="text-2xl font-bold mb-4">Company Info</h2>
            <p className="mb-4">
              We are a pioneering software company dedicated to providing the best solutions for our clients.
            </p>
            <div className="flex items-center mt-4">
              <FaPhoneAlt className="mr-2" /> <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" /> <span>info@yourcompany.com</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-1">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter to receive the latest news and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-grow p-3 rounded-l-md border border-gray-700 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl flex-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaFacebookF /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaLinkedinIn /></a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors duration-300"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom text-center mt-10 border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Crafted with passion and innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
