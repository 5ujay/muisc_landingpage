import React from "react";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Community from "./sections/Community";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import About from "./sections/About";

const App = () => {
  return (
    <div className="bg-[#0A1629] text-white font-sans">
      <Hero />
      <About />
      <Features />
      <Community />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
