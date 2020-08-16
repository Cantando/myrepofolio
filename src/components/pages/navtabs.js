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
        <Link to="/myrepofolio/home" className={location.pathname === "/myrepofolio/home" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/about"
          className={location.pathname === "/myrepofolio/about" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/contact"
          className={location.pathname === "/myrepofolio/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/technology"
          className={location.pathname === "/myrepofolio/technology" ? "nav-link active" : "nav-link"}
        >
          Technologies
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/projects"
          className={location.pathname === "/myrepofolio/projects" ? "nav-link active" : "nav-link"}
        >
         Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/resume"
          className={location.pathname === "/myrepofolio/resume" ? "nav-link active" : "nav-link"}
        >
         Resume
        </Link>
      </li>
      
     </ul>
     </Router>
  );
}

export default NavTabs;





