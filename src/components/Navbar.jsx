import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
<div className="fixed top-10 p-5 font-semibold text-black w-full font-poppins text-lg flex h-20 items-center justify-between z-40 shadow-md bg-gradient-to-b from-white to-gray-200">
  <Link to="/">
      <img src="VAISHALI TECH.png" alt="Logo" className="w-52 h-12 ml-5 sm:w-36 sm:h-10" /> </Link>
      <div className="md:hidden cursor-pointer mr-6" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Navbar Menu */}
      <div className="hidden md:flex gap-10 ml-10">
        <button onClick={() => handleScroll("homecontent")}>Web-designs</button>
        <button onClick={() => handleScroll("uiux")}>UI/UX</button>
        <button onClick={() => handleScroll("featuresgrid")}>Digital Marketing</button>
        <button onClick={() => handleScroll("about")}>About Us</button>
        <Link to="/career">Career</Link>
        <button onClick={() => handleScroll("contact")}>Contact Us</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-end py-4">
          <button className="p-4" onClick={() => handleScroll("homecontent")}>Web-designs</button>
          <button className="p-4" onClick={() => handleScroll("uiux")}>UI/UX</button>
          <button className="p-4" onClick={() => handleScroll("featuresgrid")}>Digital Marketing</button>
          <button className="p-4" onClick={() => handleScroll("about")}>About Us</button>
          <Link to="/career" className="p-4">Career</Link>
          <button className="p-4" onClick={() => handleScroll("contact")}>Contact Us</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
