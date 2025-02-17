import { useRef } from 'react'
import Homevideo from './Homevideo'
import Homecontent from './Homecontent'
import OnlinePresence from './OnlinePresence'
import FeaturesGrid from './FeaturesGrid'
import SlidingCards from './SlidingCards'
import Agency from './Agency'
import About from './About'
import Abhisek from './Abhisek'
import Contact from './Contact'
import Footer from './Footer'

const LandingPage = () => {
    const contactRef = useRef(null);

    // Function to scroll to the contact section
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>

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
            {/* Contact Section */}
            <section id='contact' ref={contactRef}>
                <Contact />
            </section>
            <section id='footer'>
                <Footer />
            </section>


        </div>
    )
}

export default LandingPage