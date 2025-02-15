import React from 'react';
import videobg from '../assets/bgvideo.mp4';

function Homevideo() {
  return (
    <div className="w-full h-[30vh] mt-20 md:h-[30vh] lg:h-[50vh]"> 
      {/* Adjust the height for different screen sizes */}
      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            objectPosition: 'center top'  // Adjust video positioning
          }}
        >
          <source src={videobg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gray-1200/50 flex items-center justify-center">
          {/* Adjust font size and text alignment for different screen sizes */}
          <h1
            className="text-[#b3c7ec] text-3xl font-semibold font-poppins text-center px-4
                       md:text-4xl md:px-10 lg:text-5xl lg:px-16 xl:text-6xl"
          >
            "Crafting Tailored Website Designs that <br /> 
            Reflect the Essence of Your Brand"
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Homevideo;
