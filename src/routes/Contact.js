import React from "react";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import Form from "../components/Form";
const Contact = (props) => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" text="언제든지 연락주십시오."/> 
      <Form onAddContact={props.onAddContact}/>
      <Footer />
    </div>
  );
};

export default Contact;
