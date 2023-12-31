import React from "react";
import "./Testing.scss";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/shopbackground.png";
import bg from "../../assets/testingBG.png";
import Testing1 from "../../assets/Testing1.png";
import Testing2 from "../../assets/Testing2.png";
import Testing3 from "../../assets/Testing3.png";
import Testing4 from "../../assets/Testing4.png";
import Testing5 from "../../assets/Testing5.png";
import { Link } from "react-router-dom";

const Testing = () => {
  return (
    <div className="TestingWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              COVID-19 and <br />
              Vitamin D Testing
            </p>
            <p className="note">
              Get accurate COVID-19 results and vital Vitamin D <br /> analysis
              with City Pharmacy.
            </p>
            <p className="greennote">
              Quick, reliable, and convenient, our testing services <br /> are
              designed for your health and peace of mind.
            </p>
          </div>
          <img
            src={Testing1}
            alt="doctor and paitient"
            style={{ marginBottom: "-35px" }}
          />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={Testing2} alt="image" />
          <div className="text">
            <p className="subheader">COVID-19</p>
            <p className="header">
              Experiencing Symptoms or Require a Clearance Certificate for Work
              or Travel?
            </p>
            <p className="note">
              Our efficient COVID-19 testing service ensures fast and reliable
              results for your peace of mind. Get tested and stay informed with
              City Pharmacy.
            </p>
            <div className="buttonswrap">
              <Link className="button">Book Your PCR Test Now</Link>
            </div>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
      <div className="SectionTwo" style={{ paddingTop: "80px" }}>
        <div className="wrap">
          <div className="text">
            <p className="subheader">Flu Shot</p>
            <p className="header">
              Secure Your Shot: Pfizer & <br /> Moderna Vaccines Available
            </p>
            <p className="note">
              Choose from Pfizer or Moderna and join the millions safeguarding
              their health. Schedule your shot today at City Pharmacy.
            </p>
            <div className="buttonswrap">
              <Link className="button">Book Pfizer</Link>
              <Link className="button">Book Moderna</Link>
            </div>
          </div>
          <img src={Testing3} alt="image" />
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <img src={Testing4} alt="image" />
          <div className="text">
            <p className="subheader">Vitamin D Testing: Know Your Levels</p>
            <p className="header">
              Essential for Bone Health and Immune Support
            </p>
            <p className="note">
              Vitamin D plays a crucial role in maintaining strong bones and a
              healthy immune system.
              <br /> <br />
              It aids in calcium absorption, supports muscle function, and
              contributes to overall well-being. 
              <br /> <br />
              Ensuring adequate Vitamin D levels is key to preventing bone
              disorders and bolstering your body's natural defenses. 
            </p>
            <div className="buttonswrap">
              <Link className="button">Book Your Vitamin D Test Now</Link>
            </div>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="text">
            <p className="header">
              Maintain Your Overall Well-Being <br /> With Our Precise Testing
            </p>
            <p className="note">
              At City Pharmacy, we provide quick and accurate Vitamin D
              assessments, helping you maintain optimal health and vitality.
            </p>
            <div className="buttonswrap">
              <Link className="button">Book Vitamin D Test</Link>
            </div>
          </div>
          <img src={Testing5} alt="image" />
        </div>
        <img src={bg} alt="dots" className="secbg" />
      </div>
    </div>
  );
};

export default Testing;
