import React from 'react'

function About() {
  return (
    <div  id="About" className='mt-5 ' > 
        {/* Responsive text size for different screens: 5xl for large, 4xl for medium, 3xl for small */}
        <h1 className='text-center font-bold text-5xl md:text-4xl sm:text-3xl p-5' style={{ color: 'var(--primary-color)' }}>
            About Us
        </h1>

        {/* Use responsive margins and text sizes for different screen sizes */}
        <p className='text-start text-lg md:text-base sm:text-sm ml-10 md:ml-10 sm:ml-5 mr-10 md:mr-10 sm:mr-5 ' style={{ textAlign: "justify" }}>
            At VaishaliTech, we are dedicated to providing innovative and comprehensive technology solutions tailored to meet the unique needs of our clients.
            From website development and web design to network marketing and UI/UX design,
            we offer a range of services that empower businesses to succeed in the digital age.
            Our team is passionate about delivering high-quality, customized solutions that align with our clients’ goals, 
            whether you’re looking to establish an online presence, enhance your user experience,
            or develop effective marketing strategies. With a focus on creativity, technology, and results, 
            Vaishali Tech is here to support your growth and bring your vision to life.
        </p>
    </div>
  )
}

export default About
