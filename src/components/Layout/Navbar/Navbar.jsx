import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/City Pharmacy.png";
import search from "../../../assets/icons.png";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useMediaQuery } from "@mui/material";
import Phone from "../../../assets/phone.png";
import clock from "../../../assets/clocl.png";
import cart from "../../../assets/cart.png";
import fill from "../../../assets/fill.png";
import refill from "../../../assets/refill.png";
import transfer from "../../../assets/transfer.png";

const NavBar = () => {
  const navbar = useRef(null);
  const matches = useMediaQuery("(max-width:780px)");
  const [showMenu, setShowMenu] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const getCartCount = () => {
  //     if (cart.length > 0) {
  //       const cartQuantity = cart.reduce(
  //         (prev, current) => prev + current.quantity,
  //         0
  //       );
  //       setCartCount(cartQuantity);
  //     } else {
  //       setCartCount(0);
  //     }
  //   };
  //   getCartCount();
  // }, [cart]);

  const handleMega = (current) => {
    if (current === showMenu) {
      setShowMenu(0);
    } else {
      setShowMenu(current);
    }
  };

  return (
    <div className="Navbar">
      <div className="nav-wrapper">
        <div className="upper">
          <div className="left">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
          </div>
          <div className="middle">
            <div className="searchbarwrap">
              <input type="text" placeholder="Search among products" />
              <img src={search} alt="searchIcon" />
            </div>
            <div className="UpperRight">
              <div className="boxWrap">
                <img src={Phone} alt="PhoneIcon" />
                <div className="textwrap">
                  <p className="title">Contact Us</p>
                  <p className="contonet">(44) 230 23 23</p>
                </div>
              </div>
              <div className="boxWrap">
                <img src={clock} alt="PhoneIcon" />
                <div className="textwrap">
                  <p className="title">Mon-Fri</p>
                  <p className="contonet">10AM - 7PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <button>Login</button>
            <button className="green">Sign Up</button>
          </div>
        </div>
        <div className="lower">
          <div className="lowrewrap">
            <div className="lowerwrapper">
              <div className="links-wrapper" ref={navbar}>
                <div
                  className="drop-down-link"
                  to="/prescription"
                  onClick={() => handleMega(2)}>
                  Prescription
                  <BsChevronDown
                    style={{
                      color: "black",
                      transform: showMenu === 2 && "rotate(180deg)",
                      transition: ".3s all ease-in-out",
                    }}
                  />
                  {showMenu === 2 && (
                    <div className="drop-menu two">
                      <Link to="/Fillprescription" className="menu-box">
                        <img src={fill} alt="icon" />
                        <div className="text-div">
                          <span className="menuitemtitle">
                            Fill Prescription Online{" "}
                          </span>
                        </div>
                      </Link>
                      <Link to="/Refillprescription" className="menu-box">
                        <img src={refill} alt="icon" />
                        <div className="text-div">
                          <span className="menuitemtitle">
                            Refill Prescription{" "}
                          </span>
                        </div>
                      </Link>
                      <Link to="/Transferprescription" className="menu-box">
                        <img src={transfer} alt="icon" />
                        <div className="text-div">
                          <span className="menuitemtitle">
                            Transfer Prescription
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/Travel">Travel</Link>
                <Link to="/MinorAliments">Minor Aliments</Link>
                <Link to="/Vaccinations">Vaccinations </Link>
                <Link to="/Testing">Testing </Link>
                <Link to="/Compression ">Compression stockings </Link>
                <Link to="/Consult_a_pharmacist">Consult a Pharmacist </Link>
                <Link to="/About">About </Link>
                <Link to="/Contact">Contact</Link>
              </div>
              <div className="buttons"></div>
            </div>
            <div className="shopButton">
              <Link to="/shop" className="ShopBut">
                Shop
              </Link>
              <div className="cartMini">
                <img src={cart} alt="cart" />
                <span className="total">0 / 0.00$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
