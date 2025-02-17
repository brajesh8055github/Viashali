import { useEffect } from 'react';
import AnnouncementBanner from './components/AnnouncementBanner';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Career from './components/Career';
import LandingPage from './components/LandingPage';

function App() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);
  return (
    <div>
       <section id='banner'>
        <AnnouncementBanner />
      </section>

      {/* Navbar Section */}
      <section id='navbar'>
        <Navbar />
      </section>
      
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/career" element={<Career/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
