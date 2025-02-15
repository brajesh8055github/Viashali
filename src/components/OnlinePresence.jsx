import React from "react";

const OnlinePresence = ({ onScrollToContact }) => {
  return (
    <div className="flex flex-col ml-4 mt-6 p-6 bg-white shadow-lg rounded-lg sm:ml-10 sm:mt-5 md:flex-row md:items-center md:ml-10 lg:ml-20 xl:ml-32">
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold text-center md:text-left md:text-3xl" style={{ color: 'var(--primary-color)' }}>
          1st Step of your Online Presence
        </h2>
        <p className="text-gray-600 text-base sm:text-lg" style={{ textAlign: "justify" }}>
          In the era of virtualization, it is important for any organization, regardless of its
          size or industry, to have a strong online presence to get discovered. Resultantly, a
          business website becomes crucial for organizations to optimize their online activities
          and showcase the products and services that they offer.
          With VaishaliTech's Website Designing Services, you can unify the essence and values of your
          business to build an optimized and streamlined website.
        </p>
        <button
          onClick={onScrollToContact} // Use the passed function here
          className="w-full sm:w-auto bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition"
          style={{ background: 'var(--secondary-color)' }}
        >
          Schedule a Call
        </button>
      </div>
      <div className="w-full mt-6 flex justify-center md:w-1/2 md:mt-0">
        <img
          // src="https://media.istockphoto.com/id/115065432/photo/family-circle.webp?a=1&b=1&s=612x612&w=0&k=20&c=1ldLr0WkQBA-3KOLOK9-MxbKE7lYCJ8RlOzFJMykODY="
         src="online.jpg"
          alt="Website Design Service Illustration"
          className="w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default OnlinePresence;
