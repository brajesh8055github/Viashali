import React, { useState, useEffect } from 'react';

const AnnouncementBanner = () => {
  // Array of announcements
  const announcements = [
    "🎄New Year Sale: 30% off on every service!",
    "📞 Contact us: 9135867021",
    // "🎉 20% off on all services",
    "🌟 We have 100+ satisfied clients!",
  ];
  
  // State to track the current announcement index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the announcement every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 10000); // 30 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="w-full bg-[#880e4f] text-white text-center py-2 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center items-center h-6">
        {/* Announcement */}
        <h1
          className="text-xl md:text-2xl transition-opacity duration-1000 ease-in-out"
          key={currentIndex}
        >
          {announcements[currentIndex]}
        </h1>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
