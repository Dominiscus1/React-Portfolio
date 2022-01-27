import React from "react";
import './Header.css'

function NavTabs() {
  return (
    <div className="navBar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a href="#About" className="About">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#Projects" className="Project">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a href="#Contact" className="Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavTabs;
