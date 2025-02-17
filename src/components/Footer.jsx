import React from 'react';
import { FaTwitter, FaDiscord, FaEnvelope, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa'; // Import Pinterest icon

const Footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden py-4 ">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        
        {/* Left Side */}
        <div className="flex justify-start items-center mb-4 lg:mb-0">
          <div className="flex items-center space-x-2">
            {/* Logo and Title */}
            <img src="/VAISHALI TECH.png" alt="company logo" className="w-auto h-12" />
          </div>
        </div>

        {/* Flex container for Contact, Product, Community, and Legal on larger screens */}
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-auto lg:space-x-20 lg:ml-4 lg:mr-8">
          {/* Contact Section */}
          <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
            <h3 className="font-bold mb-2">Contact</h3>
            <ul className="text-center lg:text-start">
              <li><a href="mailto:vaishalitech.info@gmail.com" className="hover:text-gray-400">vaishalitech.info@gmail.com</a></li>
              <li><a href="#!" className="hover:text-gray-400">E-2, Ashok Marg, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001</a></li>
              <li><a href="tel:+919135867021" className="hover:text-gray-400">+91 9135867021</a></li>
            </ul>
          </div>

          {/* Product Section */}
          <div className="w-full text-center lg:text-left lg:w-auto">
            <h3 className="font-bold mb-2">PRODUCT</h3>
            <ul>
              <li><a href="#!" className="hover:text-gray-400">Web-designs and development</a></li>
              <li><a href="#!" className="hover:text-gray-400">App-designs and development</a></li>
              <li><a href="#!" className="hover:text-gray-400">UI/UX</a></li>
              <li><a href="#!" className="hover:text-gray-400">Digital Marketing</a></li>
              <li><a href="#!" className="hover:text-gray-400">Social media Management</a></li>
              <li><a href="#!" className="hover:text-gray-400">SEO</a></li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-full text-center lg:text-left lg:w-auto">
            <h3 className="font-bold mb-2">COMMUNITY</h3>
            <ul className="flex flex-col items-center lg:items-start">
              <li className="w-full">
                <a href="https://www.linkedin.com/company/vaishalitech/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaLinkedin className="text-white mr-2" /> LinkedIn
                </a>
              </li>
              <li className="w-full">
                <a href="https://x.com/Vaishali_Tech?t=PxUdyHSa219eMWC3cj9WSQ&s=08" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaTwitter className="text-white mr-2" /> Twitter
                </a>
              </li>
              <li className="w-full">
                <a href="https://www.instagram.com/vaishalitech_offical/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaInstagram className="text-white mr-2" /> Instagram
                </a>
              </li>
              <li className="w-full">
                <a href="https://www.threads.net/@vaishalitech_offical" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaDiscord className="text-white mr-2" /> Threads
                </a>
              </li>
              <li className="w-full">
                <a href="mailto:vaishalitech.info@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaEnvelope className="text-white mr-2" /> Email
                </a>
              </li>
              <li className="w-full">
                <a href="https://pin.it/6I5UHKsXA" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 flex items-center justify-center lg:justify-start">
                  <FaPinterest className="text-white mr-2" /> Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="mt-4 lg:mt-0 text-center lg:text-left lg:ml-8">
            <h3 className="font-bold mb-2">LEGAL</h3>
            <ul>
              <li><a href="#!" className="hover:text-gray-400">Terms</a></li>
              <li><a href="#!" className="hover:text-gray-400">Privacy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-4 text-sm">
        <p>Copyright © 2022 . All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;











