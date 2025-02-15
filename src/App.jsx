import React, { useRef } from 'react';
import AnnouncementBanner from './components/AnnouncementBanner';
import Navbar from './components/Navbar';
import Homevideo from './components/Homevideo';
import Homecontent from './components/Homecontent';
import SlidingCards from './components/SlidingCards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OnlinePresence from './components/OnlinePresence';
import FeaturesGrid from './components/FeaturesGrid';
import Teammember from './components/Teammember';
import Abhisek from './components/Abhisek';
import About from './components/About';
import Agency from './components/Agency';

function App() {
  const contactRef = useRef(null);

  // Function to scroll to the contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>

       

      {/* AnnouncementBanner */}
      <section id='banner'>
        <AnnouncementBanner />
      </section>

      {/* Navbar Section */}
      <section id='navbar'>
        <Navbar />
      </section>

      {/* Home Video Section */}
      <section id='homevideo'>
        <Homevideo />
      </section>

      {/* Home Content Section */}
      <section id='homecontent'>
        <Homecontent />
      </section>

      {/* Online Presence Section */}
      <section id='onlinepresence'>
        <OnlinePresence onScrollToContact={scrollToContact} /> {/* Pass the function as a prop */}
      </section>

      {/* Features Grid Section */}
      <section id='featuresgrid'>
        <FeaturesGrid />
      </section>

      {/* UI/UX Sliding Cards Section */}
      <section id='uiux'>
        <SlidingCards />
      </section>

      {/* Digital Marketing Section */}
      <section id='agency'>
        <Agency />
      </section>

      {/* About Us Section */}
      <section id='about'>
        <About />
      </section>

      {/* Case Study Abhisek Section */}
      <section id='abhisek'>
        <Abhisek />
      </section>

      {/* Team Member Section */}
      {/* <section id='teammember'>
        <Teammember />
      </section> */}

      {/* Contact Section */}
      <section id='contact' ref={contactRef}>
        <Contact />
      </section>

      {/* Footer Section */}
      <section id='footer'>
        <Footer />
      </section>

  
    </div>
  );
}

export default App;
