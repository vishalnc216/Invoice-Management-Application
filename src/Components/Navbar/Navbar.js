import React, { Image } from "react";
import logo from "../../images/logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-img">
        <img className="navbar-logo" src={logo} />
      </div>

      <div className="navbar-content">
        <span className="navbar-content-1">Pricing</span>
        <span className="navbar-content-2">Pricing</span>
        <span className="navbar-content-3">Pricing</span>
        <span className="navbar-content-4">Pricing</span>
      </div>
    </div>
  );
}

export default Navbar;
