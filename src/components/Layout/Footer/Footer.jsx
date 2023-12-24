import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/City Pharmacy.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-wrapper">
        <div className="upper">
          <div className="box">
            <h3 className="head">Navigation</h3>
            <div className="itms">
              <Link className="item" to="/">
                Home
              </Link>
              <Link className="item" to="/About">
                About
              </Link>
              <Link className="item" to="/Contact">
                Contact
              </Link>
              <Link className="item" to="/Shop">
                Shop Products
              </Link>
            </div>
          </div>
          <div className="box">
            <h3 className="head">Prescription</h3>
            <div className="itms">
              <Link className="item" to="/">
                Fill Prescription Online 
              </Link>
              <Link className="item" to="/">
                Prescription Refill
              </Link>
              <Link className="item" to="/">
                Prescription Transfer
              </Link>
            </div>
          </div>
          <div className="box">
            <h3 className="head">Services</h3>
            <div className="itms">
              <Link className="item" to="/">
                Consult a Pharmacist
              </Link>
              <Link className="item" to="/">
                Minor Ailments{" "}
              </Link>
              <Link className="item" to="/">
                Travel Health & Vaccines{" "}
              </Link>
              <Link className="item" to="/">
                Compression Therapy{" "}
              </Link>
              <Link className="item" to="/">
                Vaccinations
              </Link>
              <Link className="item" to="/">
                Testing
              </Link>
            </div>
          </div>
          <div className="box">
            <h3 className="head">LEGAL</h3>
            <div className="itms">
              <Link className="item" to="/">
                Shipping & Returning Policy
              </Link>
              <Link className="item" to="/">
                Privacy Policy
              </Link>
              <Link className="item" to="/">
                Terms of Use
              </Link>
            </div>
          </div>
          <div className="box">
            <h3 className="head">talk with us</h3>
            <div className="itms">
              <a className="item" href="tel:+4164691898">
                Phone: 416.469.1898
              </a>
              <a className="item" href="fax:+4164691898">
                Fax: 416.469.5464
              </a>
              <a className="item" href="mailto:info@citypharmacy.ca">
                Email: info@citypharmacy.ca
              </a>
            </div>
          </div>
        </div>
        <div className="lower">
          <img src={logo} alt="logo" />
          <p>© 2023 CityPharmacy. All Rights Reserved. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
