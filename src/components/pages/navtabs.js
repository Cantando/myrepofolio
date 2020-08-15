import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import { Link, useLocation } from "react-router-dom";
// import NavTabs from "NavTabs.js"

function NavTabs() {
 
  const location = useLocation();

  return (
    <Router>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Technology"
          className={location.pathname === "/Technology" ? "nav-link active" : "nav-link"}
        >
          Technologies
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          className={location.pathname === "/Projects" ? "nav-link active" : "nav-link"}
        >
         Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}
        >
         Resume
        </Link>
      </li>
      
     </ul>
     </Router>
  );
}

export default NavTabs;





