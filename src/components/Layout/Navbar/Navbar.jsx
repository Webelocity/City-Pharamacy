import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/City Pharmacy.png";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import Phone from "../../../assets/phone.png";
import clock from "../../../assets/clocl.png";
import cart from "../../../assets/cart.png";
// import menu from "../../../assets/Hamburger Menu.png";
import fill from "../../../assets/fill.png";
import refill from "../../../assets/refill.png";
import transfer from "../../../assets/transfer.png";
import {
  IconButton,
  InputAdornment,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Sidecart from "../../Sidecart";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, openModal } from "../../../redux/userSlice";

const NavBar = () => {
  const Desktop = useMediaQuery("(min-width:1268px)");
  const navbar = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  const handlePhoneMega = (event, current) => {
    event.stopPropagation();
    if (current === showMenu) {
      setShowMenu(0);
      setShowMobileMenu(!showMobileMenu);
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
      <Sidecart open={showCart} handleClose={() => setshowCart(false)} />
      {Desktop ? (
        <div className="nav-wrapper">
          <div className="upper">
            <div className="left">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo-img" />
              </Link>
            </div>
            <div className="middle">
              <div className="searchbarwrap">
                {/* <input type="text" placeholder="Search among products" /> */}
                <InputBase
                  className="mui-register-password"
                  type="text"
                  placeholder="Search among products"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none">
                          <path
                            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                            stroke="#616161"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.9996 13.9996L11.0996 11.0996"
                            stroke="#616161"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* <img src={search} alt="searchIcon" /> */}
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
                <button
                  className="green"
                  onClick={() => dispatch(logoutUser())}>
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
                <button
                  onClick={() => {
                    dispatch(openModal());
                  }}>
                  Login
                </button>
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
                <div className="cartMini" onClick={() => setshowCart(true)}>
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
      ) : (
        <div className="mobileNav">
          <div className="upper">
            <p className="Text_wrap">
              <img src={Phone} alt="phone_Icon" /> <span>Contac Us</span> (44)
              230 23 23
            </p>
            <p className="Text_wrap">
              <img src={clock} alt="clock_Icon" /> <span>Mon-Fri</span> 10AM -
              7PM
            </p>
          </div>
          <div className="middle">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
            <div className="shopButton">
              <Link to="/shop" className="ShopBut">
                Shop
              </Link>
            </div>
          </div>
          <div className="lower">
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
                <button
                  className="green"
                  onClick={() => dispatch(logoutUser())}>
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
                <button
                  onClick={() => {
                    dispatch(openModal());
                  }}>
                  Login
                </button>
                <button className="green">Sign Up</button>
              </div>
            )}
            <div className="cart">
              <img
                src={cart}
                alt="cartIcon"
                className="cartIcon"
                onClick={() => setshowCart(true)}
              />
              <div onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? (
                  <AiOutlineClose className="menu-icon" />
                ) : (
                  <AiOutlineMenu className="menu-icon" />
                )}

                {showMobileMenu && (
                  <div className="dropdown-links-wrapper">
                    <div
                      className="drop-down-link "
                      onClick={(event) => handlePhoneMega(event, 1)}>
                      <div
                        className="supmenuparent"
                        style={{
                          color: showMenu === 1 && "#0A1F8F",
                        }}>
                        <span>Prescription</span>
                        <BsChevronDown
                          style={{
                            transform: showMenu === 1 && "rotate(180deg)",
                            transition: ".3s all ease-in-out",
                          }}
                        />
                      </div>
                      {showMenu === 1 && (
                        <div className="MobDrop">
                          <Link
                            to="/Fillprescription"
                            className="menu-box Mobbox">
                            <div className="text-div">
                              <span>Fill Prescription Online</span>
                            </div>
                          </Link>
                          <Link
                            to="/Refillprescription"
                            className="menu-box Mobbox">
                            <div className="text-div">
                              <span>Refil Prescription</span>
                            </div>
                          </Link>
                          <Link
                            to="/Transferprescription"
                            className="menu-box Mobbox">
                            <div className="text-div">
                              <span>Transfer Prescription</span>
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
                    <Link to="/Consult_a_pharmacist">
                      Consult a Pharmacist{" "}
                    </Link>
                    <Link to="/About">About </Link>
                    <Link to="/Contact">Contact</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
