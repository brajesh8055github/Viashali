import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for navigation
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const cardData = [
  {
    imgSrc: 'web.png',
    title: 'Web Development',
    description: 'We create modern, user-friendly websites that showcase your brand\'s unique selling points.',
  },
  {
    imgSrc: 'marketing.png',
    title: 'Mobile App Development',
    description: 'Build user-friendly mobile applications to extend your business to mobile platforms.',
  },
  {
    imgSrc: 'reach.png',
    title: 'UI/UX Design',
    description: 'We build responsive ecommerce, lead gen, custom, and informational websites that are attractive, intuitive, and optimized.',
  },
  {
    imgSrc: 'anouncement.png',
    title: 'Digital MARKETING & Social Media Management',
    description: 'We start our process by learning everything we can about your brand and then we make sure that every element on your website reflects that brand to your users.',
  },
  {
    imgSrc: 'marketing.png',
    title: 'BRANDING',
    description:'We start our process by learning everything we can about your brand and then we make sure that every element on your website reflects that brand to your users.',
  }
];

function Homecontent() {
  // Custom navigation arrow components
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-[-30px] lg:right-[-50px] z-10 transform -translate-y-1/2 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronRight size={30} color="var(--primary-color)" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-[-30px] lg:left-[-50px] z-10 transform -translate-y-1/2 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronLeft size={30} color="var(--primary-color)" />
      </div>
    );
  };

  // Settings for the carousel
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  return (
    <div id="Homecontent" className="flex justify-center relative">
      <div className='p-5 main m-5 items-center justify-center w-[100%]'>
        <p className='text-start justify-start align-center text-[20px] font-serif' style={{ textAlign: "justify", textJustify: "inter-word" }}>
          VaishaliTech is a top website design company that uses the latest technology and creative ideas to bring your vision to life, making your brand stand out online.
        </p>
        <div className='relative mt-12'>
    {/* WhatsApp Icon */}
    
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 lg:top-auto lg:bottom-8 lg:right-8 z-50">
      <a
        href="https://wa.me/919135867021"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>


          {/* Carousel container for larger screens */}
          <div className="relative hidden lg:block w-[80%] mx-auto">
            <Slider {...settings}>
              {cardData.map((card, index) => (
                <div 
                  key={index} 
                  className="card w-[100%] h-[380px] rounded-lg p-2 flex flex-col items-center border gap-4 border-primary shadow-[4px_4px_12px_rgba(0,0,0,0.15)]"> 
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className='w-full h-[130px] object-cover rounded-t-lg'
                  />
                  <div className='text-center mt-9 flex-grow'>
                    <h3 className='text-xl font-bold text-[#4e6185]'>{card.title}</h3>
                    <p className='mt-3 text-sm'>{card.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Render cards for small screens (normal div) */}
          <div className="lg:hidden flex flex-wrap justify-center gap-8">
            {cardData.map((card, index) => (
              <div key={index} className="card w-[40vh] h-[auto] rounded-lg shadow-lg p-4 flex flex-col items-center border" style={{ borderColor: 'var(--primary-color)' }}>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className='w-full h-[130px] object-cover rounded-t-lg'
                />
                <div className='text-center mt-9'>
                  <h3 className='text-xl font-bold text-[#4e6185]'>{card.title}</h3>
                  <p className='mt-3 text-sm'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecontent;
