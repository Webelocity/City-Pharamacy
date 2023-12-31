import React from "react";
import "./Compression.scss";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/testingBG.png";
import bg from "../../assets/testingBG.png";
import Compression1 from "../../assets/Compression1.png";
import Compression2 from "../../assets/Compression2.png";
import Compression3 from "../../assets/Compression3.png";
import Compression5 from "../../assets/Compression5.png";
import Compression6 from "../../assets/Compression6.png";
import Compression7 from "../../assets/Compression7.png";
import { Link } from "react-router-dom";
import cart from "../../assets/cartIcon.svg";
import SingleCategoryProductsSwiper from "../../components/HomeComponents/SingleCategoryProductsSwiper";
import photo from "../../assets/Image.svg";

const Compression = () => {
  const Beauty = {
    name: "Beauty",
    products: [
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: photo,
      },
    ],
  };

  return (
    <div className="CompressionWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              Elevate Your Step <br />
              with Compression
            </p>
            <p className="note">
              Tailored fit, compression, optimal comfort, maximum benefits. {" "}
              <br />
              Explore a world of enhanced circulation and support.
            </p>
          </div>
          <img
            src={Compression1}
            alt="doctor and paitient"
            style={{ marginBottom: "-55px" }}
          />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <div className="whitebox">
            <img src={Compression2} alt="image" />
            <p className="header">Introducing JOBST Compression</p>
            <p className="note">
              City Pharmacy is elated to introduce Sigvaris compression socks
              and leg sleeves to our esteemed clientele. As pioneers in
              compression garments, JOBST stands as the epitome of excellence in
              compression therapy.
            </p>
            <button className="button">Explore Our Compression Range</button>
          </div>
          <div className="whitebox">
            <img src={Compression3} alt="image" />
            <p className="header">Tailored Precise Fitting Services</p>
            <p className="note">
              Beyond offering top-quality products, we prioritize a perfect fit
              tailored to your needs. Through our specialized sock fitting
              services, we ensure both your comfort and the maximum
              effectiveness of each compression garment.
            </p>
            <button className="button">Book a Fitting Appointment</button>
          </div>
        </div>
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="text">
            <p className="header">Over-the-Counter Compression Socks</p>
            <p className="note">
              If you're seeking light compression, our over-the-counter socks
              offer a compression level of 15-20mmHg. <br />
              They enhance the appearance of minor varicose veins, reduce
              swelling and play a pivotal role in preventing blood clots,
              especially for those leading a sedentary lifestyle. <br />
              Athletes can also benefit, as these socks have been shown to
              reduce recovery time and potential injury impacts.
            </p>
          </div>
          <div className="boxes">
            <div className="top">
              <div className="text">
                <p className="subheader">Shop now</p>
                <p className="header">Embrace enhanced circulation</p>
              </div>
              <Link className="button" to="/shop">
                Shop Now <img src={cart} alt="Cart Icon" />
              </Link>
            </div>
            <div className="bottom">
              <div className="left">
                <p className="heading">Special Offers</p>
                <div className="box green">
                  <img src={Compression5} alt="productImage" />
                  <p className="title">
                    New Arrivals
                    <span>Find your medicine</span>
                    <Link className="button" to="/shop">
                      Explore Now
                    </Link>
                    <p className="badge">
                      30%
                      <br />
                      OFF
                    </p>
                  </p>
                </div>
              </div>
              <div className="right">
                <SingleCategoryProductsSwiper data={Beauty} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionFour">
        <div className="wrap">
          <img src={Compression6} alt="image" />
          <div className="text">
            <p className="header">
              Understanding Compression <br />
              How It Works
            </p>
            <div className="boxes">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none">
                  <path
                    d="M23.0007 42.1673C33.5864 42.1673 42.1673 33.5864 42.1673 23.0007C42.1673 12.4149 33.5864 3.83398 23.0007 3.83398C12.4149 3.83398 3.83398 12.4149 3.83398 23.0007C3.83398 33.5864 12.4149 42.1673 23.0007 42.1673Z"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 22.9993L21.0833 26.8327L28.75 19.166"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="note">
                  Gravity can sometimes impede the blood flow from our legs to
                  the heart. In specific scenarios, the one-way valves in our
                  veins might falter, leading to issues like swelling, varicose
                  veins, and even blood clots.
                </p>
              </div>
              <hr className="hr" />
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none">
                  <path
                    d="M23.0007 42.1673C33.5864 42.1673 42.1673 33.5864 42.1673 23.0007C42.1673 12.4149 33.5864 3.83398 23.0007 3.83398C12.4149 3.83398 3.83398 12.4149 3.83398 23.0007C3.83398 33.5864 12.4149 42.1673 23.0007 42.1673Z"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 22.9993L21.0833 26.8327L28.75 19.166"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="note">
                  Compression therapy, with its graduated compression design,
                  aids in pushing the blood upwards, assisting leg muscles in
                  their function.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionFour">
        <div className="wrap">
          <div className="text">
            <p className="header">
              Prescription Compression Socks <br />
              Beyond the Ordinary
            </p>
            <div className="boxes">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none">
                  <path
                    d="M23.0007 42.1673C33.5864 42.1673 42.1673 33.5864 42.1673 23.0007C42.1673 12.4149 33.5864 3.83398 23.0007 3.83398C12.4149 3.83398 3.83398 12.4149 3.83398 23.0007C3.83398 33.5864 12.4149 42.1673 23.0007 42.1673Z"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 22.9993L21.0833 26.8327L28.75 19.166"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="note">
                  A physician's prescription is essential for those needing
                  higher compression levels (around 20mmHg and above). These
                  socks are instrumental in treating chronic venous
                  insufficiency and preventing edema and venous ulcers.
                </p>
              </div>
              <hr className="hr" />
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none">
                  <path
                    d="M23.0007 42.1673C33.5864 42.1673 42.1673 33.5864 42.1673 23.0007C42.1673 12.4149 33.5864 3.83398 23.0007 3.83398C12.4149 3.83398 3.83398 12.4149 3.83398 23.0007C3.83398 33.5864 12.4149 42.1673 23.0007 42.1673Z"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 22.9993L21.0833 26.8327L28.75 19.166"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="note">
                  Given their specialized nature, ensuring accurate leg
                  assessment and fitting is crucial, making them more than just
                  your regular socks.
                </p>
              </div>
            </div>
          </div>
          <img src={Compression7} alt="image" />
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
    </div>
  );
};

export default Compression;
