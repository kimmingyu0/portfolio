import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {

  async function addContactHandler(event) {
    const response = await fetch(
      "https://react-http-6ede3-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(event),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element ={<Contact onAddContact={addContactHandler}/>} />
      </Routes>
    </>
  );
}

export default App;
