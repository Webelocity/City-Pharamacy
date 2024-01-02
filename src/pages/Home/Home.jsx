import React, { useState } from "react";
import "./Home.scss";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { TabPanel } from "@mui/base/TabPanel";
import { Tab } from "@mui/base/Tab";
import tab1 from "../../assets/tab1.png";
import tab2 from "../../assets/tab2.png";
import tab3 from "../../assets/tab3.png";
import tab4 from "../../assets/tab4.png";
import next from "../../assets/Button - Next slide.png";
import prev from "../../assets/Left Arrow.png";
import top from "../../assets/Circle Background top.png";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/shopbackground.png";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import slide4 from "../../assets/slide4.png";
import smilyface from "../../assets/smilyface.png";
import doctor from "../../assets/doctor.png";
import pills from "../../assets/pills.png";
import test from "../../assets/test.png";
import author from "../../assets/author.png";
import pierre from "../../assets/pierre.png";
import comf from "../../assets/comfort.png";
import icon1 from "../../assets/featureIcon.png";
import icon2 from "../../assets/Featureicon2.png";
import icon3 from "../../assets/Featureicon3.png";
import icon4 from "../../assets/Featureicon4.png";
import DoctorwithPat from "../../assets/DoctorwithPat.png";
import prescription from "../../assets/prescription.png";
import meds from "../../assets/meds.png";
import hands from "../../assets/hand.png";
import DoctorandPaitient from "../../assets/DoctorandPaitient.png";
import cart from "../../assets/cartIcon.svg";
import { Link } from "react-router-dom";
import OurProductsSwiper from "../../components/HomeComponents/OurProductsSwiper";
import covid from "../../assets/covid.svg";
import health from "../../assets/health.png";
import hearthands from "../../assets/hearthand.png";
import doctorreading from "../../assets/readingpresc.png";
import HomeCategoryProductsSwiper from "../../components/HomeComponents/HomeCategoryProductsSwiper";
import photo from "../../assets/Image.svg";
import prod1 from "../../assets/prod1.png";
import prod2 from "../../assets/prod2.png";
import prod3 from "../../assets/prod3.png";
import prod4 from "../../assets/prod4.png";
import SingleCategoryProductsSwiper from "../../components/HomeComponents/SingleCategoryProductsSwiper";
import Appointment from "../../components/Appointment";

const Home = () => {
  const [value, setvalue] = useState(1);
  const [showForm, setshowForm] = useState(false);

  const switchTab = (move) => {
    if (move === "forward" && value < 4) {
      setvalue((current) => current + 1);
    }
    if (move === "backwards" && value > 1) {
      setvalue((current) => current - 1);
    }
  };
  const Beauty = {
    name: "Beauty",
    products: [
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: prod1,
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
        photo: prod2,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: prod3,
      },
      {
        name: "Collagen Powder - Vital Protein",
        price: 39.6,
        rating: 5,
        photo: prod4,
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
    <div className="HomeWrapper">
      <Appointment open={showForm} handleClose={() => setshowForm(false)} />
      <div className="SectionOne">
        <div className="tabs-outer">
          <Tabs value={value} className="wrapper">
            <TabsList
              className="maintabs"
              onClick={(e) => setvalue(e.target.tabIndex)}>
              <Tab value={1} tabIndex={1}>
                <div className="tabtitle">
                  <img src={tab1} alt="icon" />
                  Stay Protected, Wherever You Go
                </div>
              </Tab>
              <hr />
              <Tab value={2} tabIndex={2}>
                <div className="tabtitle">
                  <img src={tab2} alt="icon1" />
                  Expert Care for Everyday Health Concerns
                </div>
              </Tab>
              <hr />
              <Tab value={3} tabIndex={3}>
                <div className="tabtitle">
                  <img src={tab3} alt="icon1" />
                  Fast, Reliable COVID-19 Testing
                </div>
              </Tab>
              <hr />
              <Tab value={4} tabIndex={4}>
                <div className="tabtitle">
                  <img src={tab4} alt="icon1" />
                  Decades of Trust in Every Prescription.
                </div>
              </Tab>
            </TabsList>
            <TabPanel value={1} className="tab-body">
              <div className="body-wrapper">
                <div className="left">
                  <p className="subheader">
                    Travel Vaccine <hr />
                  </p>
                  <p className="header">
                    Your Passport to <br /> Healthier Travel{" "}
                  </p>
                  <p className="note">
                    Get personalized, itinerary-specific consultations and the
                    necessary vaccinations and medications for a safe and
                    healthy trip. Trust in our guidance for a worry-free
                    adventure.
                  </p>
                  <Link className="cta" to="/Travel">
                    Book Your Travel Vaccine Appointment
                  </Link>
                  <div className="buttons">
                    <img
                      src={prev}
                      alt="arrow"
                      onClick={() => switchTab("backwards")}
                      style={{ opacity: "0.5" }}
                    />
                    <img
                      src={next}
                      alt="arrow"
                      onClick={() => switchTab("forward")}
                    />
                  </div>
                </div>
                <div className="right">
                  <img
                    src={top}
                    alt="background"
                    style={{ zIndex: "1" }}
                    className="background top"
                  />
                  <img
                    src={slide1}
                    alt="first slide"
                    style={{ zIndex: "2", position: "relative" }}
                  />
                </div>
                <img
                  src={bottm}
                  alt="background"
                  style={{ zIndex: "2" }}
                  className="background bottm"
                />
              </div>
            </TabPanel>
            <TabPanel value={2} className="tab-body">
              <div className="body-wrapper">
                <div className="left">
                  <p className="subheader">
                    Minor Ailments <hr />
                  </p>
                  <p className="header">
                    Expert Care for Everyday Health Concerns{" "}
                  </p>
                  <Link className="cta" to="/Consult_a_pharmacist">
                    Consult with Our Pharmacists Now
                  </Link>
                  <div className="buttons">
                    <img
                      src={prev}
                      alt="arrow"
                      onClick={() => switchTab("backwards")}
                    />
                    <img
                      src={next}
                      alt="arrow"
                      onClick={() => switchTab("forward")}
                    />
                  </div>
                </div>
                <div className="right">
                  <img
                    src={top}
                    alt="background"
                    style={{ zIndex: "1" }}
                    className="background top"
                  />
                  <img
                    src={slide2}
                    alt="first slide"
                    style={{ zIndex: "2", position: "relative" }}
                  />
                </div>
                <img
                  src={bottm}
                  alt="background"
                  style={{ zIndex: "2" }}
                  className="background bottm"
                />
              </div>{" "}
            </TabPanel>
            <TabPanel value={3} className="tab-body">
              <div className="body-wrapper">
                <div className="left">
                  <p className="subheader">
                    COVID-19 PCR test <hr />
                  </p>
                  <p className="header">Fast, Reliable COVID-19 Testing </p>
                  <Link className="cta" to="/Testing">
                    Schedule Your PCR Test Today
                  </Link>
                  <div className="buttons">
                    <img
                      src={prev}
                      alt="arrow"
                      onClick={() => switchTab("backwards")}
                    />
                    <img
                      src={next}
                      alt="arrow"
                      onClick={() => switchTab("forward")}
                    />
                  </div>
                </div>
                <div className="right">
                  <img
                    src={top}
                    alt="background"
                    style={{ zIndex: "1" }}
                    className="background top"
                  />
                  <img
                    src={slide3}
                    alt="first slide"
                    style={{ zIndex: "2", position: "relative" }}
                  />
                </div>
                <img
                  src={bottm}
                  alt="background"
                  style={{ zIndex: "2" }}
                  className="background bottm"
                />
              </div>
            </TabPanel>
            <TabPanel value={4} className="tab-body">
              <div className="body-wrapper">
                <div className="left">
                  <p className="subheader">
                    Round-the-Clock Rx <hr />
                  </p>
                  <p className="header">
                    Fill Your Prescription Anytime, Anywhere.{" "}
                  </p>
                  <Link
                    className="cta"
                    to="/Fillprescription"
                    style={{ marginBottom: "0", width: "100%" }}>
                    Submit Your Prescription Today
                  </Link>
                  <div className="lastSlideCTA">
                    <button className="reorder">
                      Reorder Your Medications
                    </button>
                    <button className="switch">
                      {" "}
                      <img src={smilyface} alt="smilyface" /> Switch to Trusted
                      Care
                    </button>
                  </div>

                  <div className="buttons">
                    <img
                      src={prev}
                      alt="arrow"
                      onClick={() => switchTab("backwards")}
                    />
                    <img
                      src={next}
                      alt="arrow"
                      onClick={() => switchTab("forward")}
                      style={{ opacity: "0.5" }}
                    />
                  </div>
                </div>
                <div className="right">
                  <img
                    src={top}
                    alt="background"
                    style={{ zIndex: "1" }}
                    className="background top"
                  />
                  <img
                    src={slide4}
                    alt="first slide"
                    style={{ zIndex: "2", position: "relative" }}
                  />
                </div>
                <img
                  src={bottm}
                  alt="background"
                  style={{ zIndex: "2" }}
                  className="background bottm"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="SectionTwo">
        <a href="#shop">Shop</a>
        <a href="#Prescription">Prescription</a>
        <a href="#Minoraliments">Minor Aliments</a>
        <a href="#deals">Exclusive Deals</a>
        <a href="#testing">Testing & Vaccinations</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#consult">Pharmacy Consultation</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <div className="SectionThree" id="shop">
        <div className="top">
          <p className="subheader">shop now</p>
          <p className="header">Shop at City Pharmacy</p>
          <p className="note">
            Discover our range of products, curated for your health and
            well-being.
          </p>
        </div>
        <div className="bottom">
          <OurProductsSwiper />
        </div>
        <img
          src={shopbackground}
          alt="background"
          style={{ zIndex: "1" }}
          className="background"
        />
      </div>
      <div className="SectionFour" id="Prescription">
        <div className="wrap">
          <div className="top">
            <p className="subheader">Prescription Services</p>
            <p className="header">
              Prescriptions Filled 24/7: <br />
              Your Health, On Your Time.
            </p>
            <p className="greenSubheader">
              Enjoy Complimentary Prescription Delivery to All of Greater
              Toronto!
            </p>
            <p className="note">
              We ensure every step is smooth and personalized just for you.
            </p>
          </div>
          <div className="bottom">
            <div className="box">
              <img src={doctor} alt="doctor" />
              <div className="text">
                <span>Available 24/7 </span>
                <p className="title">New Prescription? </p>
                <p className="note">
                  Submit your new prescription online, and let us handle the
                  rest. Experience the convenience of modern healthcare with a
                  personal touch.
                </p>
                <Link className="button" to="/Fillprescription">
                  Fill Your Prescription
                </Link>
              </div>
            </div>
            <div className="box">
              <img src={pills} alt="doctor" />
              <div className="text">
                <p className="title">Never miss a dose again! </p>
                <p className="note">
                  With our quick and convenient refills, your medications are
                  always ready when you need them.
                </p>
                <Link className="button white" to="/Refillprescription">
                  Refill Now
                </Link>
              </div>
            </div>
            <div className="box">
              <img src={prescription} alt="doctor" />
              <div className="text">
                <p className="title">Are you looking for a change?</p>
                <p className="note">
                  Transfer your prescription to City Pharmacy and discover a
                  world of caring, efficient, and hassle-free service.
                </p>
                <Link className="button white" to="/Transferprescription">
                  Transfer Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionFive" id="Minoraliments">
        <div className="wrap">
          <img src={DoctorandPaitient} alt="doctor and paitient" />
          <div className="textbox">
            <p className="subheader">Expertise in Minor Ailments</p>
            <p className="header">
              Your Trusted Source for <br />
              19 Common Conditions
            </p>
            <p className="note">
              Experience swift and precise care at City Pharmacy. Our seasoned
              pharmacists evaluate and prescribe treatments for 19 common
              conditions, ensuring you're promptly on the path to wellness.
            </p>
            <p className="question">Experiencing Symptoms?</p>
            <Link className="button" to="/MinorAliments">
              Let Us Help
            </Link>
          </div>
        </div>
        <img src={shopbackground} alt="dots" className="topImage" />
        <img src={bottm} alt="dots" className="bottomImage" />
      </div>
      <hr className="hr" />
      <div className="SectionSix" id="deals">
        <div className="top">
          <div className="text">
            <p className="subheader">Shop now</p>
            <p className="header">Exclusive Deals & Savings</p>
            <p className="note">Elevate Your Health, Not Your Spend</p>
          </div>
          <Link className="button" to="/shop">
            Shop Now <img src={cart} alt="Cart Icon" />
          </Link>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="heading">Special Offers</p>
            <div className="box">
              <img src={covid} alt="productImage" />
              <p className="title">
                New Arrivals
                <span>Find your medicine</span>
                <Link className="button" to="/shop">
                  Explore More
                </Link>
                <p className="badge">
                  30% <br />
                  OFF
                </p>
              </p>
            </div>
            <div className="box green">
              <img src={health} alt="productImage" />
              <p className="title">
                New Arrivals
                <span>Find your medicine</span>
                <Link className="button" to="/shop">
                  Explore Now
                </Link>
                <p className="badge">
                  Up To
                  <br />
                  50%
                </p>
              </p>
            </div>
          </div>
          <div className="right">
            <HomeCategoryProductsSwiper data={Beauty} />
          </div>
        </div>
      </div>
      <div className="SectionSeven" id="testing">
        <div className="wrap">
          <img src={test} alt="test image" />
          <div className="text">
            <p className="subheader">Testing</p>
            <p className="header">
              Quick and Reliable COVID-19 & Vitamin D Tests at Your Fingertips
            </p>
            <p className="note">
              Prioritize your health with City Pharmacy efficient COVID-19 and
              Vitamin D testing services and more.
            </p>
            <Link className="button" to="/Testing">
              Explore More
            </Link>
          </div>
        </div>
        <img src={shopbackground} alt="dots" className="topImage" />
        <img src={bottm} alt="dots" className="bottomImage" />
      </div>
      <div className="SectionEight">
        <div className="wrap">
          <div className="leftSide">
            <div className="text">
              <p className="subheader">Vaccinations at City Pharmacy</p>
              <p className="header">
                Shielding You with Expert, Caring Vaccination Services
              </p>
            </div>
            <div className="whitebox">
              <p className="title">Protective Shots, Proactive Health</p>
              <p className="note">
                Stay a step ahead with City Pharmacy. Safeguard yourself and
                your loved ones with our range of vaccinations. Your health is
                our priority.
              </p>
              <Link className="button green" to="/Vaccinations">
                Explore Vaccination Options
              </Link>
            </div>
            <div className="whitebox">
              <p className="title">Travel with Confidence</p>
              <p className="note">
                Setting off for work, leisure, or volunteering? Protect your
                health with City Pharmacy's travel vaccines against infections
                like typhoid or hepatitis A.
              </p>
              <Link className="button" to="Travel">
                Get Travel Protection
              </Link>
            </div>
          </div>
          <img src={meds} alt="meds" />
        </div>
      </div>
      <div className="SectionSeven">
        <div className="wrap">
          <img src={comf} alt="test image" />
          <div className="text">
            <p className="subheader">Expert Compression Therapy Solutions</p>
            <p className="header">Step into Comfort</p>
            <p className="note">
              Experience relief and support with City Pharmacy's specialized
              compression stockings. From precise fitting to choosing the right
              style, we guide you every step of the way. 
            </p>
            <Link className="button green" to="/Compression">
              Start Compression Comfort
            </Link>
          </div>
        </div>
        <img
          src={top}
          alt="background"
          style={{ zIndex: "1" }}
          className="background"
        />
      </div>
      <div className="SectionFive" id="about">
        <div className="wrap">
          <img src={pierre} alt="doctor and paitient" />
          <div className="textbox">
            <p className="subheader">About City Pharmacy</p>
            <p className="header">4 Decades of Dedication, Evolving for You.</p>
            <p className="note">
              City Pharmacy stands as a trusted community cornerstone, blending
              tradition with modern care. From pioneering health initiatives
              like the COVID-19 vaccine to embracing digital advancements, our
              focus remains on your health and our commitment.
            </p>
            <Link className="button" to="/About">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="SectionNine" id="features">
        <div className="wrap">
          {" "}
          <div className="upper">
            <p className="subheader">City Pharmacy Features</p>
            <p className="header">
              Experience a Modern Pharmacy with <br /> Traditional Values.
            </p>
          </div>
          <div className="lower">
            <div className="box">
              <img src={icon1} alt="icon" />
              <p className="title">Personalized Care</p>
              <p className="note">
                Every patient is unique. Our pharmacists take the time to
                understand your needs and provide tailored advice.
              </p>
            </div>
            <div className="box">
              <img src={icon2} alt="icon" />
              <p className="title">Digital Services</p>
              <p className="note">
                Seamless health solutions: From online refills to digital
                consultations, experience modern convenience
              </p>
            </div>
            <div className="box">
              <img src={icon3} alt="icon" />
              <p className="title">Community Trust</p>
              <p className="note">
                Serving the community for decades, we've earned the trust and
                loyalty of generations.
              </p>
            </div>
            <div className="box">
              <img src={icon4} alt="icon" />
              <p className="title">Expertise & Training</p>
              <p className="note">
                Our continuously trained team ensures you receive the latest
                healthcare advice and services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="SectionTen" id="consult">
        <div className="wrap">
          <div className="textbox">
            <p className="subheader">Expert Pharmacy Consultations</p>
            <p className="header">
              Personalized Advice for Your Health & Wellness
            </p>
            <p className="note">
              Navigate your health journey confidently. From medication
              management to travel advice, our pharmacists are here to provide
              tailored guidance every step of the way.
            </p>
            <Link className="button green" to="/Consult_a_pharmacist">
              Consult with Experts
            </Link>
          </div>
          <img src={DoctorwithPat} alt="doctor and paitient" />
        </div>
        <img
          src={top}
          alt="background"
          style={{ zIndex: "1" }}
          className="background"
        />
      </div>
      <div className="SectionEleven" id="testimonials">
        <div className="wrap">
          {" "}
          <div className="upper">
            <p className="subheader">Reviews</p>
            <p className="header">
              Hear It From Our Community. <br />
              Voices of Health
            </p>
          </div>
          <div className="lower">
            <div className="box">
              <p className="note">
                This is the best pharmacy.  I have been coming for years, and
                it's great to be dealing with the same people.  My prescriptions
                are filled in a timely manner, and they return phone messages
                quickly.  I also got my last Covid vaccination with them and had
                an appointment within a day.
              </p>
              <div className="author">
                <div className="name">
                  <img src={author} alt="author" />
                  <p>Monica Harhay</p>
                </div>
                <div className="stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="box">
              <p className="note">
                Had my third vaccine here and was happy. I went in today because
                I wanted to get tested for covid, but they only do it for
                travel. The woman at the counter was very helpful-she gave me a
                free box (I know they are free everywhere) of tests with the new
                protocol of swabbing cheeks and the back of the throat and then
                the nose, which I never heard of before. I did end up testing
                positive, and as the day wore on, my symptoms got so much worse.
                I’m thankful and grateful for the free box and advice. I’ll be
                back after I’m sick to get my 4th shot.
              </p>
              <div className="author">
                <div className="name">
                  <img src={author} alt="author" />
                  <p>Sherrie B</p>
                </div>
                <div className="stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none">
                    <path
                      d="M10.2959 2.09894L12.1888 7.92467L12.2719 8.18059H12.541H18.6666L13.7109 11.7811L13.4932 11.9393L13.5764 12.1952L15.4693 18.0209L10.5136 14.4204L10.2959 14.2622L10.0782 14.4204L5.12253 18.0209L7.01543 12.1952L7.09858 11.9393L6.88088 11.7811L1.92522 8.18059H8.05076H8.31985L8.403 7.92467L10.2959 2.09894Z"
                      stroke="#219D50"
                      stroke-width="0.740741"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionTwilve">
        <div className="top">
          <div className="text">
            <p className="subheader">Shop now</p>
            <p className="header">Baby & Child Care </p>
            <p className="note">
              Dive into our curated selection of baby and child care products,{" "}
              <br />
              ensuring their health and comfort from day one.
            </p>
          </div>
          <Link className="button" to="/shop">
            Shop Now <img src={cart} alt="Cart Icon" />
          </Link>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="heading">Special Offers</p>
            <div className="box">
              <img src={covid} alt="productImage" />
              <p className="title">
                New Arrivals
                <span>Find your medicine</span>
                <Link className="button green" to="/shop">
                  Explore More
                </Link>
                <p className="badge">
                  30% <br />
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
      <hr className="hr" />
      <div className="SectionThirten">
        <div className="wrap">
          {" "}
          <div className="upper">
            <p className="subheader">Contact us</p>
            <p className="header">Stay Connected with City Pharmacy</p>
          </div>
          <div className="lower">
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M16.291 19.5664C20.7093 19.5664 24.291 15.9847 24.291 11.5664C24.291 7.14813 20.7093 3.56641 16.291 3.56641C11.8727 3.56641 8.29102 7.14813 8.29102 11.5664C8.29102 15.9847 11.8727 19.5664 16.291 19.5664Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9267 18.0879L22.9574 30.2346L16.2907 26.2346L9.62402 30.2346L11.6547 18.0879"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Accreditation</p>
              <p className="note">Number: 22335</p>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M25.6247 28.9004V26.2337C25.6247 24.8192 25.0628 23.4627 24.0626 22.4625C23.0624 21.4623 21.7058 20.9004 20.2913 20.9004H12.2913C10.8769 20.9004 9.5203 21.4623 8.5201 22.4625C7.51991 23.4627 6.95801 24.8192 6.95801 26.2337V28.9004"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.2913 15.5671C19.2369 15.5671 21.6247 13.1792 21.6247 10.2337C21.6247 7.28821 19.2369 4.90039 16.2913 4.90039C13.3458 4.90039 10.958 7.28821 10.958 10.2337C10.958 13.1792 13.3458 15.5671 16.2913 15.5671Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Ownership & Management</p>
              <p className="note">
                Owner & Designated Manager: <br /> Pierre Nasralla
              </p>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M26.9574 14.2331C26.9574 22.2331 16.2907 30.2331 16.2907 30.2331C16.2907 30.2331 5.62402 22.2331 5.62402 14.2331C5.62402 11.4041 6.74783 8.69099 8.74822 6.6906C10.7486 4.69021 13.4617 3.56641 16.2907 3.56641C19.1197 3.56641 21.8328 4.69021 23.8332 6.6906C25.8335 8.69099 26.9574 11.4041 26.9574 14.2331Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.291 18.2344C18.5002 18.2344 20.291 16.4435 20.291 14.2344C20.291 12.0252 18.5002 10.2344 16.291 10.2344C14.0819 10.2344 12.291 12.0252 12.291 14.2344C12.291 16.4435 14.0819 18.2344 16.291 18.2344Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Location</p>
              <p className="note">
                238 Danforth Avenue, <br /> Toronto, ONM4K 1N4
              </p>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M29.4372 3.56641L14.7705 18.2331"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.4372 3.56641L20.1038 30.2331L14.7705 18.2331L2.77051 12.8997L29.4372 3.56641Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Get in Touch</p>
              <p className="note">
                Phone: 416.469.1898 <br />
                Fax: 416.469.5464 <br />
                Email: info@citypharmacy.ca
              </p>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M16.7093 30.2331C24.0731 30.2331 30.0426 24.2635 30.0426 16.8997C30.0426 9.53594 24.0731 3.56641 16.7093 3.56641C9.34551 3.56641 3.37598 9.53594 3.37598 16.8997C3.37598 24.2635 9.34551 30.2331 16.7093 30.2331Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.709 8.90039V16.9004L22.0423 19.5671"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="title">Hours of Operation</p>
              <p className="note">
                Monday to Friday: 10 am - 5 pm <br />
                Saturday: 11 am - 4 pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <Link className="button" to="/Contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="SectionFort">
        <div className="wrap">
          <div className="lower">
            <div className="box">
              <div className="imagebg">
                <img src={hands} alt="hands" />
              </div>
              <p className="title">
                Free Prescription Delivery to all of Greater Toronto Area
              </p>
              <Link className="button" to="/Fillprescription">
                Fill Your Prescription
              </Link>
            </div>
            <div className="box">
              <div className="imagebg">
                <img src={doctorreading} alt="doctorreading" />
              </div>{" "}
              <p className="title">
                Effortlessly book, manage, and consult online
              </p>
              <button className="button" onClick={() => setshowForm(true)}>
                Book Now
              </button>
            </div>
            <div className="box">
              <div className="imagebg">
                <img src={hearthands} alt="hands" />
              </div>{" "}
              <p className="title">Trusted health partner for generations</p>
              <Link className="button" to="/Consult_a_pharmacist">
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
