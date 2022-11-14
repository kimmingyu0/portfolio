import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener("scroll",changeColor)
   
  return (
    <div className={color ? "header header-bg":"header"}>
      <NavLink to="/home">
        <h1>KMG's Portfolio</h1>
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "clicked" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "clicked" : "")}>About</NavLink>
        </li>
        <li>
          <NavLink to="/project" className={({ isActive }) => (isActive ? "clicked" : "")}>Project</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "clicked" : "")}>Contact</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {!click && <FaBars size={20} style={{ color: "#fff" }}/>}
        {click && <FaTimes size={20} style={{ color: "#fff" }}/>}
      </div>
    </div>
  );
};

export default Navbar;
