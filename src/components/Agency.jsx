import React from 'react';

const Agency = () => {
  const features = [
    {
      title: 'One-Stop Solution',
      description: 'From UI/UX design to complete website development, logo design, and SEO, we cover all aspects of digital presence under one roof.',
    },
    {
      title: 'Client-Centric Approach',
      description: 'Dedicated Support: We prioritize client satisfaction by offering dedicated support throughout the project and beyond.',
    },
    {
      title: 'Proven Results',
      description: 'Boosted Online Presence: Our SEO and digital marketing strategies have helped numerous clients increase their online visibility and drive more traffic to their sites.',
    },
    {
      title: 'Transparent Pricing',
      description: 'No Hidden Costs: Our pricing is clear and transparent, ensuring you get the best value for your investment without any surprises. Flexible Packages: We offer various pricing packages to suit businesses of all sizes, from startups to established enterprises.',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4"> {/* Added 'px-4' for padding on smaller screens */}
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-8" style={{ color: 'var(--primary-color)' }}>
        {/* Adjusted font size for responsiveness */}
        Why Our Agency
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* sm:grid-cols-2 makes it two columns on small screens, lg:grid-cols-2 ensures consistency on larger screens */}
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-4 md:p-6 border border-gray-300 rounded-lg shadow-lg" 
            /* Adjusted padding for smaller screens with 'p-4' and for larger screens with 'md:p-6' */
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4" style={{ color: 'var(--secondary-color)' }}>
              {/* Adjusted font size for mobile screens (text-lg) and medium/large screens (md:text-xl) */}
              {feature.title}
            </h3>
            <p className="text-sm md:text-md font-poppins">
              {/* Adjusted font size for description to be smaller on mobile screens (text-sm) and normal on medium screens (md:text-md) */}
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agency;
