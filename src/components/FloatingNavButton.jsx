import React, { useState, useEffect } from "react";
import '../App.css'
import NavBar from "./NavBar";
import { FaBars, FaEyeSlash} from "react-icons/fa";

const FloatingNavButton = () => {
  const [navOpen, setNavOpen] = useState(true);

  const handleButtonClick = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setNavOpen(false);
    }
  }, [])
  

  return (
    <div className="floating_nav_button">
      {navOpen && <NavBar setNavOpen={setNavOpen} />}
      <button className="FloatingButton" onClick={handleButtonClick}>
        {navOpen ? <FaEyeSlash size={30} color={'grey'}/> : <FaBars size={30} color={'grey'}/>}
      </button>
    </div>
  );
}

export default FloatingNavButton