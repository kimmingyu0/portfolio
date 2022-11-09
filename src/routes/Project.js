import React from "react";

import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
// import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import { useTitle } from "../hooks/UpdateTitle";

const Project = () => {
  useTitle('Project');
  
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Project" text="생각을 실천하다."/> 
      <Work />
      {/* <PricingCard /> */}
      <Footer />
    </div>
  );
};

export default Project;
