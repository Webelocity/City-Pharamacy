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
  //Set it to TRUE to show the notification icon
  const [user, setuser] = useState(false);

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
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowMenu(0);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(navbar);

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
          {user ? (
            <div className="right loggedin">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none">
                  <path
                    d="M13.6134 3.55298C13.2789 3.21736 12.8815 2.95107 12.4439 2.76937C12.0064 2.58767 11.5372 2.49414 11.0634 2.49414C10.5896 2.49414 10.1204 2.58767 9.68284 2.76937C9.24526 2.95107 8.84784 3.21736 8.51339 3.55298L8.00006 4.07298L7.48672 3.55298C7.15227 3.21736 6.75486 2.95107 6.31727 2.76937C5.87968 2.58767 5.41053 2.49414 4.93672 2.49414C4.46291 2.49414 3.99376 2.58767 3.55618 2.76937C3.11859 2.95107 2.72118 3.21736 2.38672 3.55298C0.973391 4.96631 0.886724 7.35298 2.66672 9.16631L8.00006 14.4996L13.3334 9.16631C15.1134 7.35298 15.0267 4.96631 13.6134 3.55298Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                2{" "}
              </button>
              <button className="green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none">
                  <path
                    d="M12.6668 14.5V13.1667C12.6668 12.4594 12.3859 11.7811 11.8858 11.281C11.3857 10.781 10.7074 10.5 10.0002 10.5H6.00016C5.29292 10.5 4.61464 10.781 4.11454 11.281C3.61445 11.7811 3.3335 12.4594 3.3335 13.1667V14.5"
                    stroke="#219D50"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.00016 7.83333C9.47292 7.83333 10.6668 6.63943 10.6668 5.16667C10.6668 3.69391 9.47292 2.5 8.00016 2.5C6.5274 2.5 5.3335 3.69391 5.3335 5.16667C5.3335 6.63943 6.5274 7.83333 8.00016 7.83333Z"
                    stroke="#219D50"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                My Account
              </button>
            </div>
          ) : (
            <div className="right">
              <button>Login</button>
              <button className="green">Sign Up</button>
            </div>
          )}
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
              {user && (
                <div className="notification">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M15 6.66602C15 5.33993 14.4732 4.06816 13.5355 3.13048C12.5979 2.1928 11.3261 1.66602 10 1.66602C8.67392 1.66602 7.40215 2.1928 6.46447 3.13048C5.52678 4.06816 5 5.33993 5 6.66602C5 12.4993 2.5 14.166 2.5 14.166H17.5C17.5 14.166 15 12.4993 15 6.66602Z"
                      stroke="#219D50"
                      stroke-width="1.5625"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4419 17.5C11.2954 17.7526 11.0851 17.9622 10.8321 18.1079C10.5791 18.2537 10.2922 18.3304 10.0003 18.3304C9.70828 18.3304 9.42142 18.2537 9.1684 18.1079C8.91539 17.9622 8.7051 17.7526 8.55859 17.5"
                      stroke="#219D50"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
