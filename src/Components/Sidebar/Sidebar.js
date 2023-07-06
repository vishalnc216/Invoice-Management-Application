import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Billicon from "../../images/billicon.png";

import logo from "../../images/logoo.png";

import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { TbFileInvoice } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selectedField, setSelectedField] = useState("");
  const handleFieldSelection = (field) => {
    setSelectedField(field);
  };
  const [show, setshow] = useState('block')
  useEffect(() => {
    if (window.location.href == "http://localhost:3000/" || window.location.href == "http://localhost:3000/signup") {
      setshow('none')
    }
    else {
      setshow('block')
    }
  }, [])
  return (
    <div style={{ display: show }} className="sidebar">
      <div className="sidebar-first-second">
        <div className="sidebar-third">
          <div className="sidebar-third-1">
            <img className="sidebar-third-logo" src={logo}></img>
          </div>
          <div className="sidebar-third-2">
            <span className="sidebar-third-name">Flairota</span>
          </div>
        </div>
        <hr style={{ border: "0.5px solid #71717A" }} />
        <div className="sidebar-second">
          {/* <div className="sidebar-catergory">MENU</div> */}
          <div className="sidebar-menu">
            <Link to="/dashboard">
              <div
                className={`sidebar-menu-1 ${selectedField === "dashboard" ? "selected" : ""
                  }`}
                onClick={() => handleFieldSelection("dashboard")}
              >
                <RxDashboard color={"#27272A"} size={"22px"} />
                <span className="sidebar-menu-name">Dashboard</span>
              </div>
            </Link>
            <Link to="/client">
              <div
                className={`sidebar-menu-1 ${selectedField === "client" ? "selected" : ""
                  }`}
                onClick={() => handleFieldSelection("client")}
              >
                <AiOutlineUser color={"#27272A"} size={"22px"} />
                <span className="sidebar-menu-name">Client</span>
              </div>
            </Link>
            <Link to="/vendor">
              <div
                className={`sidebar-menu-1 ${selectedField === "vendor" ? "selected" : ""
                  }`}
                onClick={() => handleFieldSelection("vendor")}
              >
                <CiShop color={"#27272A"} size={"22px"} />
                <span className="sidebar-menu-name">Vendor</span>
              </div>
            </Link>
            <Link to="/item">
              <div
                className={`sidebar-menu-1 ${selectedField === "item" ? "selected" : ""
                  }`}
                onClick={() => handleFieldSelection("item")}
              >
                <FiShoppingBag color={"#27272A"} size={"22px"} />
                <span className="sidebar-menu-name">Item</span>
              </div>
            </Link>
            <Link to="/invoice">
              <div
                className={`sidebar-menu-1 ${selectedField === "invoice" ? "selected" : ""
                  }`}
                onClick={() => handleFieldSelection("invoice")}
              >
                <TbFileInvoice color={"#27272A"} size={"22px"} />
                <span className="sidebar-menu-name">Invoice</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar-logout">
        <BiLogOut color={"#27272A"} size={"22px"} />
        <span className="sidebar-menu-name">Log Out</span>
      </div>
    </div>
  );
}

export default Sidebar;