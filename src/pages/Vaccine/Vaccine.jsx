import React from "react";
import "./Vaccine.scss";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/shopbackground.png";
import bg from "../../assets/bg.png";
import Vaccine1 from "../../assets/Vaccine1.png";
import Vaccine2 from "../../assets/Vaccine2.png";
import Vaccine3 from "../../assets/Vaccine3.png";
import Vaccine4 from "../../assets/Vaccine4.png";
import Vaccine5 from "../../assets/Vaccinations5.png";
import { Link } from "react-router-dom";

const Vaccine = () => {
  return (
    <div className="VaccineWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              Guarding Your Health, <br />
              One Shot at a Time.
            </p>
            <p className="note">
              Trust in City Pharmacy, your destination for vaccinations <br />{" "}
              and immunizations, delivered with care and expertise.
            </p>
          </div>
          <img
            src={Vaccine1}
            alt="doctor and paitient"
            style={{ marginBottom: "-35px" }}
          />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={Vaccine2} alt="image" />
          <div className="text">
            <p className="subheader">Flu Shot</p>
            <p className="header">
              Flu Season Alert Safeguard <br />
              with City Pharmacy
            </p>
            <p className="note">
              Flu season is here, and prevention is critical. Secure your health
              and those around you with a flu shot from City Pharmacy. Easily
              book online and let our trained pharmacists assist you. Stay
              shielded and reduce the spread this season.
            </p>
            <div className="buttonswrap">
              <Link className="button">Stay Flu-Free </Link>
              <Link className="button">Flu Shot for Seniors</Link>
            </div>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="text">
            <p className="subheader">other vaccinations</p>
            <p className="header">
              Your One-Stop Destination <br /> for Immunization Excellence
            </p>
            <p className="note">
              Safeguarding against common and exotic illnesses.
            </p>
          </div>
          <div className="boxes">
            <div className="double">
              <div className="box">
                <img src={Vaccine3} alt="iamge" />
                <div className="textbox">
                  <div className="textwrap">
                    <p className="title">Protect Against Shingles</p>
                    <p className="note">
                      Shingles, or herpes zoster, is a nerve and skin infection
                      stemming from the varicella-zoster virus. Often impacting
                      those over 50, it can affect anyone who's had chickenpox.
                      We recommend administering the shingles vaccine for
                      individuals 50 and older in two doses for optimal
                      protection.
                    </p>
                  </div>
                  <button className="button">
                    Schedule Your Shingles Vaccination
                  </button>
                </div>
              </div>
              <div className="box">
                <img src={Vaccine4} alt="iamge" />
                <div className="textbox">
                  <div className="textwrap">
                    <p className="title">Defend Against HPV</p>
                    <p className="note">
                      Human papillomavirus (HPV) infection, a sexually
                      transmitted virus, can result in genital warts and several
                      cancers. Contracted through various intimate contacts,
                      it's a concern for many. We advocate the HPV vaccine for
                      those aged 9 to 45, typically administered to grade 6 or 7
                      students. Once vaccinated, no boosters are required.
                    </p>
                  </div>
                  <button className="button">
                    Protect Yourself from Pneumococcal Infections
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={Vaccine5} alt="iamge" />
              <div className="textbox">
                <div className="textwrap">
                  <p className="title">
                    Protect Yourself from Pneumococcal Infections
                  </p>
                  <p className="note">
                    Streptococcus pneumoniae is a potent bacteria responsible
                    for causing conditions like pneumonia. This bacteria spreads
                    easily, especially when an infected person coughs or when
                    one touches their face with unwashed hands. While children
                    are typically vaccinated against this threat, it's crucial
                    for adults, especially those over 65, to consider a booster
                    dose. Additionally, adults with weakened immune systems
                    might require further doses to ensure their safety.
                  </p>
                </div>
                <button className="button">
                  Boost Your Immunity Against Pneumonia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
