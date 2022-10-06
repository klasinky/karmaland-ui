import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className='nav-link'
                to="/karmaland-ui"
                end
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active" 
                className='nav-link'
                to="/karmaland"
              >
                Karmaland
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeclassname="active" 
                className='nav-link'
                to="/tortillaland"
              >
                Tortillaland
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div id="google_element"></div>
      </nav>
    </div>
  );
};

export default Navbar;
