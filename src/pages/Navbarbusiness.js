import React from "react";
import "./Navbarbusiness.css";
import logo from "../images/Kshitij.png";

function Navbarbusiness() {
  return (
    <div className="navbarbusiness">
      <div className="navbarbusiness-img">
        <img className="navbarbusiness-logo" src={logo} />
        <span className="navbarbusiness-name">Kshitij</span>
      </div>

      <div className="navbarbusiness-content">
        <span className="navbarbusiness-content-1">Profile</span>
        <span className="navbarbusiness-content-2">Create Bill</span>
        <span className="navbarbusiness-content-3">Top 5 Bill</span>
      </div>
    </div>
  );
}

export default Navbarbusiness;
