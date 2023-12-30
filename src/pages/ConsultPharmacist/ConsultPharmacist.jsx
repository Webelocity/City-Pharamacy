import React from "react";
import "./ConsultPharmacist.scss";
import nurse from "../../assets/consulting nurse.png";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/shopbackground.png";
import bg from "../../assets/bg.png";
import consult2 from "../../assets/consult2.png";
import consult3 from "../../assets/consult3.png";
import consult4 from "../../assets/consult4.png";
import consult5 from "../../assets/consult5.png";
import { Link } from "react-router-dom";

const ConsultPharmacist = () => {
  return (
    <div className="ConsultPharmacistWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              Expert Consultations, <br /> Personalized Care
            </p>
            <p className="note">
              Discuss your health needs with our dedicated pharmacists <br />{" "}
              and find tailored solutions.
            </p>
          </div>
          <img
            src={nurse}
            alt="doctor and paitient"
            style={{ marginBottom: "-35px" }}
          />
        </div>
        <img
          src={bottm}
          alt="background"
          style={{ zIndex: "2" }}
          className="bottomImage"
        />
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={consult2} alt="image" />
          <div className="text">
            <p className="subheader">Medication Management</p>
            <p className="header">
              Optimize Your Medication <br /> Routine with City Pharmacy
            </p>
            <p className="note">
              If you're juggling multiple medications, our City Pharmacy
              Medication Review streamlines complex regimens and crafts a
              tailored care plan to achieve your health goals. <br />
              Whether pre-hospitalization or post, we ensure you're informed and
              prepared. Start a conversation with our pharmacists and embark on
              your path to optimal health.
            </p>
            <Link className="button">Optimize Your Medications Today</Link>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <div className="text">
            <p className="subheader">Travel with Confidence</p>
            <p className="header">Tailored Pre-Travel Health Consultations</p>
            <p className="note">
              Our specially trained pharmacist meticulously assess your travel
              itinerary during our pre-travel consultations to provide tailored
              health protection recommendations. <br />
              This session focuses on preventive measures against travel-related
              illnesses and evaluates your overall immunization status, ensuring
              you're safeguarded for your journey.
            </p>
            <Link className="button">Book Your Travel Consultation Now</Link>
          </div>
          <img src={consult3} alt="image" className="bottomimg" />
        </div>
        <img src={bg} alt="backdround" className="secondbg" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <img src={consult4} alt="image" />
          <div className="right">
            <div className="text">
              <p className="subheader">Smoking Cessation</p>
              <p className="header">
                You've Got This, <br /> We've Got You
              </p>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none">
                  <path
                    d="M16 26.25V34.25M32 10.25V11.25C32 12.3109 32.4214 13.3283 33.1716 14.0784C33.9217 14.8286 34.9391 15.25 36 15.25C37.0609 15.25 38.0783 15.6714 38.8284 16.4216C39.5786 17.1717 40 18.1891 40 19.25V20.25M6 6.25L42 42.25M34 26.25H40C40.5304 26.25 41.0391 26.4607 41.4142 26.8358C41.7893 27.2109 42 27.7196 42 28.25V32.25C42 32.81 41.77 33.316 41.4 33.678M34 34.25H8C7.46957 34.25 6.96086 34.0393 6.58579 33.6642C6.21071 33.2891 6 32.7804 6 32.25V28.25C6 27.7196 6.21071 27.2109 6.58579 26.8358C6.96086 26.4607 7.46957 26.25 8 26.25H26"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="note">
                  Quitting smoking is the best, but it's not always easy. At
                  City Pharmacy, we understand the challenges and are dedicated
                  to supporting you every step of the way.
                </p>
              </div>
              <hr className="hr" />
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none">
                  <path
                    d="M24 24.25H18C14.8174 24.25 11.7652 22.9857 9.51472 20.7353C7.26428 18.4848 6 15.4326 6 12.25V8.25H12C15.1826 8.25 18.2348 9.51428 20.4853 11.7647C22.7357 14.0152 24 17.0674 24 20.25V40.25M24 28.25C24 25.0674 25.2643 22.0152 27.5147 19.7647C29.7652 17.5143 32.8174 16.25 36 16.25H42V18.25C42 21.4326 40.7357 24.4848 38.4853 26.7353C36.2348 28.9857 33.1826 30.25 30 30.25H24"
                    stroke="#219D50"
                    stroke-width="3.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="note">
                  Our comprehensive smoking cessation program is tailored to
                  your needs, ensuring you can become smoke-free. With our
                  guidance, numerous Canadians have successfully quit smoking.
                </p>
              </div>
              <p className="note">
                Discover the right resources, understand the benefits, and
                embark on a healthier path with us.
              </p>
              <Link className="button">Start Your Smoke-Free Future</Link>
            </div>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="right">
            <div className="text">
              <p className="subheader">Medication Review</p>
              <p className="header">
                Master Your Medication with City Pharmacy Insight
              </p>
              <p className="note">
                Sit down with our City Pharmacist for a comprehensive medication
                review. We'll assess your prescription and non-prescription
                drugs, pinpointing potential medication-related concerns. <br />
                Our goal is to ensure you fully grasp your medication regimen
                and adhere to it correctly, optimizing your health and
                well-being.
              </p>
              <Link className="button">Dive Deeper into Your Medications</Link>
            </div>
          </div>
          <img src={consult5} alt="image" />
        </div>
        <img src={bg} alt="dots" className="secbg" />
      </div>
    </div>
  );
};

export default ConsultPharmacist;
