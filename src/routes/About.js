import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="저를 소개합니다."/> 
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
