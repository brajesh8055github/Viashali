import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlidingCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // For desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For iPad size
        settings: {
          slidesToShow: 3, // Show 3 slides on iPads
        },
      },
      {
        breakpoint: 768, // For medium-sized tablets and large phones
        settings: {
          slidesToShow: 2, // Show 2 slides on medium devices
        },
      },
      {
        breakpoint: 480, // For small mobile devices
        settings: {
          slidesToShow: 1, // Show 1 slide on small devices
        },
      },
    ],
  };

  return (
    <div id="SlidingCards" className="w-[90%] h-auto">
      {/* Centered h1 and p */}
      <div className="text-center mb-8 ml-2">
        <h1
          className="text-4xl font-bold mb-4"
          style={{ color: "var(--primary-color)" }}
        >
          Bringing your Ideas to Reality
        </h1>
        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <p
            className="text-lg text-justify mb-4"
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          >
            {/* Added margin for better spacing */}
            Step into the age of transformation with robust features and dynamic
            designs with Webtel's business website designing services.
          </p>
        </div>
      </div>

      <div className="">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="group mt-10 bg-white h-[400px] flex flex-col text-primary  rounded-xl transition-colors duration-300 hover:bg-gray-100 relative shadow-lg hover:shadow-2xl"
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s ease",
              }}
            >
              {/* Card container */}
              <div className="relative h-[220px] rounded-t-xl flex flex-col justify-center items-center">
                {/* Image - initially visible, hidden on hover */}
                <img
                  src={d.image}
                  className="w-54 h-54 mt-24 rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-0"
                />
                <div
                  className="flex text-xl font-bold flex-col justify-center items-center gap-4 p-4 transform transition-transform duration-300 ease-in-out group-hover:scale-0"
                  style={{ color: "#4e6185" }}
                >
                  <p>{d.description}</p>
                </div>
              </div>

              {/* Paragraph - initially hidden, shown on hover */}
              <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <p
                  className="text-justify text-black text-lg font-semibold overflow-hidden transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                  style={{ maxHeight: "160px" }} // Ensures paragraph stays within the card
                >
                  {d.paragraph}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    image: "web1.png",
    description: "Stand Out With SEO",
    paragraph:
      "VaishaliTech is an expert when it comes to digital enterprise solutions. By optimizing industrial expertise, we bring to life an SEO-friendly website that holds the potential to attract audiences and masses across the globe.",
  },
  {
    image: "web2.png",
    description: "Secure & Reliable",
    paragraph:
      "The website designing services offered by VaishaliTech ensure complete data security for the clients as well as the website visitors. By reducing the risk of cyber-attacks, data theft, and other security threats, we offer a secure online experience.",
  },
  {
    image: "web3.png",
    description: "Mobile-Friendly",
    paragraph:
      "VaishaliTech's Business Websites are compatible with any device, be it Windows, Android, or IOS. Moreover, the designs are easily adaptable to Mobiles, PCs, Tablets, Laptops, and so on for a uniform and uninterrupted user experience.",
  },
  {
    image: "web4.png",
    description: "Contemporary-Design",
    paragraph:
      "The website designs offered by VaishaliTech are contemporary and based on the latest market trends. Our team constantly updates itself with industrial insights and trends to always keep an edge over technology.",
  },
  {
    image: "web5.png",
    description: "Dedicated Support",
    paragraph:
      "Our relationship with you does not end at the service delivery but extends to your complete satisfaction. That is why we offer end-to-end support to our customers to resolve all their technical issues and challenges.",
  },
];

export default SlidingCards;
