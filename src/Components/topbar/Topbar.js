import React, { useState } from "react";
import "./Topbar.css";
import Profile from "../../images/profile.png";
import Searchh from "../../images/sidebar/search.png";
import HamMenu from "./HamMenu";

function TopbarItem(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="topbar-dash">
      <div className="top-dash-text">{props.name}</div>
      {/* <div className="search-bar">
        <div className="search-icon">
          <img src={Searchh} alt="Search" />
        </div>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div> */}
      <div className="top-profile-ham">
        <div className="top-dash-profile">
          <span className="top-dash-profile-name">Angle Priya</span>
          <img className="top-dash-profile-img" src={Profile} />
        </div>
        <div onClick={toggleMobileMenu} className="top-ham">
          <img
            className="top-ham-img"
            src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
          />
        </div>
      </div>
      {isMobileMenuOpen && <HamMenu />}
    </div>
  );
}

export default TopbarItem;
