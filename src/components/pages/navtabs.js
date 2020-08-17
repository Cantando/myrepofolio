import React from "react";
import { Link} from "react-router-dom";
// import NavTabs from "NavTabs.js"

function NavTabs() {
 


  return (
<nav className="navbar">


    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/myrepofolio" className="nav-link">
          <span>Home</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/about"
          className="nav-link"
        >
          <span>About Me</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/contact"
          className="nav-link"
        >
          <span>Contact </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/technology"
          className="nav-link"
        >
          <span> Technologies</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/projects"
          className="nav-link"
        >
         <span> Projects</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/myrepofolio/resume"
          className="nav-link"
        >
         <span> Resume </span>
        </Link>
      </li>
      
     </ul>
     </nav>
  );
}

export default NavTabs;





