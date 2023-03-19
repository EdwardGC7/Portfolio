import React, { useState } from "react";
import '../App.css'
import NavBar from "./NavBar";
import { FaBars, FaEyeSlash} from "react-icons/fa";

const FloatingNavButton = () => {
  const [navOpen, setNavOpen] = useState(true);

  const handleButtonClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="floating_nav_button">
      {navOpen && <NavBar />}
      <button className="FloatingButton" onClick={handleButtonClick}>
        {navOpen ? <FaEyeSlash size={30} color={'grey'}/> : <FaBars size={30} color={'grey'}/>}
      </button>
    </div>
  );
}

export default FloatingNavButton