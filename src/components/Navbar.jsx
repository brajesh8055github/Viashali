import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='top-10 p-[20px] font-semibold text-black w-full font-poppins text-lg flex h-20 items-center justify-between fixed z-40 shadow-md bg-gradient-to-b from-white to-gray-200'>
      <img src="VAISHALI TECH.png" alt="Logo" className='w-[200px] h-[50px] ml-[20px] sm:w-[150px] sm:h-[40px]' />
      
      {/* Hamburger Icon for mobile screens */}
      <div className="md:hidden cursor-pointer mr-6" onClick={handleToggle}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navbar menu for larger screens */}
      <div className='hidden md:flex gap-10 ml-[60px]'>
        <a
          href="#Homecontent" // Ensure this id matches with your section id
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('Homecontent')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Web-designs
        </a>

        <a
          href="#uiux" // Ensure correct id for the section
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('uiux')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          UI/UX
        </a>

        <a
          href="#FeaturesGrid" 
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('FeaturesGrid')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Digital Marketing
        </a>

        <a
          href="#about"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About Us
        </a>

        <a
          href="/career"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
        >
          Career
        </a>

        <a
          href="#contact"
          className="menuitem bg-transparent text-black p-2 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-end py-4">
          <a
            href="#Homecontent"
            className="menuitem bg-transparent text-black p-4 hover:text-[#4e6185] hover:font-bold duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('Homecontent')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false); // Close menu after click
            }}
          >
            Web-designs
          </a>

          <a
            href="#uiux"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#4e6185] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('uiux')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            UI/UX
          </a>

          <a
            href="#FeaturesGrid"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('FeaturesGrid')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Digital Marketing
          </a>

          <a
            href="#about"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            About Us
          </a>


          <a
            href="/career"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
          >
            Career
          </a>
          <a
            href="#contact"
            className="menuitem bg-transparent text-black p-4 hover:bg-[#dadada] hover:text-white transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsOpen(false);
            }}
          >
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
