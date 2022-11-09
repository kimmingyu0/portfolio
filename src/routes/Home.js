import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import { useTitle } from "../hooks/UpdateTitle";

const Home = () => {
  useTitle('Home');
  
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Footer />
    </div>
  );
};

export default Home;
