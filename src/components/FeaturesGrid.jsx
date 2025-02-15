import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow components for next and previous
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight className="text-2xl text-gray-600 hover:text-black" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft className="text-2xl text-gray-600 hover:text-black" />
  </div>
);

const FeaturesGrid = () => {
  const features = [
    { icon: "boost.png", title: "Boost your Reach & Visibility" },
    { icon: "sales.png", title: "Elevate your Brand Value" },
    { icon: "virtual.png", title: "Secure your Virtual Interactions" },
    { icon: "brandpng.png", title: "Elevate your Brand Value" },
    { icon: "reach.png", title: "Secure your Virtual Interactions" },
    { icon: "anouncement.png", title: "Streamline your Performance" },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screen sizes smaller than large
        settings: "unslick", // This disables the carousel for smaller screens
      },
    ],
  };

  return (
    <div id="FeaturesGrid" className="text-center mt-15 p-6 bg-gray-100 items-start px-4 md:px-16 justify-center">
      <h2 className="text-[32px] md:text-[40px] font-bold mb-4" style={{ color: 'var(--primary-color)' }}>
        A Business Website that Leaves an Impact
      </h2>
      <p className="text-gray-600  text-lg md:text-xl mb-8 text-start"  style={{ textAlign: "justify", textJustify: "inter-word" }}>
        Just like your business, your business website needs to be unique, impactful, and advanced
        to get ahead of the competition. VaishaliTech's team of experts works closely with you to build a
        website that helps you stand out and beat the competition.
      </p>

      <div className="w-full lg:w-[90%] mx-auto relative">
        {/* Only apply the carousel for large screens */}
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div 
                className="bg-white p-4 rounded-lg shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center justify-center text-center w-full h-[240px] sm:h-[220px] md:h-[260px] lg:h-[300px]"
              >
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-40 h-30 md:w-24 md:h-24 mb-4 sm:w-16 sm:h-16 lg:w-28 lg:h-28"
                />
                <h3 className="text-[#4e6185] font-bold text-md md:text-2xl sm:text-sm lg:text-xl">{feature.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturesGrid;
