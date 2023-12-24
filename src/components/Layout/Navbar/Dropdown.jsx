import React, { useState } from "react";
import "./Dropdown.css";
import logo from "../../../assets/City Pharmacy.png";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleMega = (event, current) => {
    event.stopPropagation();
    if (current === showMenu) {
      setShowMenu(0);
    } else {
      setShowMenu(current);
    }
  };

  return (
    <div className="Mobile_Navbar">
      <div className="nav-wrapper">
        <div className="left-box">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo-mobile" />
          </Link>
        </div>
        <div className="right-box"></div>
      </div>
    </div>
  );
};

export default Dropdown;
