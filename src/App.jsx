import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav_Bar from './assets/Nav_Bar/Nav_Bar';
import Home from './assets/Home/Home';
import Footer from './assets/Footer/Footer';
import About from './assets/About/About';
import Contact from './assets/Contact/Contact';
import Services from "./assets/Services/Services";
import SplashScreen from "./assets/SplashScreen/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade out
      setTimeout(() => setShowSplash(false), 500); // Remove after fade
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} className={fadeOut ? "fade-out" : ""} />
      ) : (
        <Router>
          <Nav_Bar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
