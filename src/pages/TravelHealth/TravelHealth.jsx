import React from "react";
import "./TravelHealth.scss";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/testingBG.png";
import bg from "../../assets/testingBG.png";
import Travel1 from "../../assets/Travel1.png";
import Travel2 from "../../assets/Travel2.png";
import Travel3 from "../../assets/Travel3.png";
import Travel4 from "../../assets/Travel4.png";
import Travel5 from "../../assets/Travel5.png";
import Travel6 from "../../assets/Travel6.png";
import Travel7 from "../../assets/Travel7.png";
import Appointment from "../../components/Appointment";

const TravelHealth = () => {
  const [showForm, setshowForm] = React.useState(false);

  return (
    <div className="TravelHealthWrapper">
      <Appointment open={showForm} handleClose={() => setshowForm(false)} />

      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="greennote">
              “Let our pharmacists guide you so you <br /> can focus on the
              adventure ahead."
            </p>
            <p className="header">
              Traveling for <br />
              Work or Vacation?
            </p>
            <p className="note">
              City Pharmacy equips you with the knowledge and <br /> protection
              you need for safe travel.
            </p>
            <button className="button" onClick={() => setshowForm(true)}>
              Book Your Pre-Travel Consult Now
            </button>
          </div>
          <img src={Travel1} alt="doctor and paitient" />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={Travel2} alt="image" />
          <div className="text">
            <p className="header">
              Understanding Travel <br /> Health Risks
            </p>
            <p className="note">
              Travelling abroad exposes you to different health risks, from
              common ailments like travellers' diarrhea to more severe diseases.
              <br /> <br />
               While most travellers return home without significant health
              issues, being informed and prepared is essential.
            </p>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
        <img src={bg} alt="dots" className="topbg" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="text">
            <p className="subheader">Travel vaccinations</p>
            <p className="header">Vital Vaccinations for Safe Travels</p>
            <p className="note">
              Several serious infectious diseases can be prevented with vaccines{" "}
            </p>
          </div>
          <div className="boxes">
            <div className="box">
              <img src={Travel3} alt="iamge" />
              <div className="textbox">
                <div className="textwrap">
                  <p className="title">Hepatitis B Protection</p>
                  <p className="note">
                    Hepatitis B, a viral liver infection, can be contracted
                    through exposure to infected blood or body fluids. Simple
                    acts, like sharing a toothbrush or razor, can put you at
                    risk. While many overcome the infection naturally, it can
                    persist as a long-term concern, especially in young children
                    and some adults. The Hepatitis B vaccine is a standard
                    safeguard for infants and children. Booster doses might be
                    essential for those with specific medical conditions to
                    ensure continued protection.
                  </p>
                </div>
                <div className="buttonsWrap">
                  <a
                    className="button"
                    href="https://citypharmacy.medmeapp.ca/schedule/11221"
                    target="blank">
                    Get Vaccinated
                  </a>
                  <p className="button white">book for Hepatitis B</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="textbox">
                <div className="textwrap">
                  <p className="title">
                    Twinrix: Dual Defense Against Hepatitis A & B
                  </p>
                  <p className="note">
                    Hepatitis A and B are viral liver infections that can
                    manifest as acute or chronic conditions. Often, carriers may
                    unknowingly spread the virus even without displaying
                    symptoms. Early understanding and detection of these
                    infections are crucial for effective management. <br />
                    The Twinrix vaccine offers combined protection against
                    Hepatitis A and B, serving as a frontline defence against
                    these potentially harmful viruses.
                  </p>
                </div>
                <div className="buttonsWrap">
                  <a
                    className="button"
                    href="https://citypharmacy.medmeapp.ca/schedule/11221"
                    target="blank">
                    Schedule Your Twinrix Shot Today
                  </a>
                  <p className="button white">Book for hepatitis A</p>
                </div>
              </div>
              <img src={Travel4} alt="iamge" />
            </div>
            <div className="box">
              <img src={Travel5} alt="iamge" />
              <div className="textbox">
                <div className="textwrap">
                  <p className="title">Protect Yourself from Typhoid Fever</p>
                  <p className="note">
                    Typhoid fever, stemming from contaminated food or water, is
                    prevalent in developing regions. While industrialized areas
                    like the US, Canada, and Western Europe are typically safe,
                    it’s common in countries with underdeveloped sanitation.
                    Vaccination lasts between 3 to 7 years.{" "}
                  </p>
                </div>
                <div className="buttonsWrap">
                  <a
                    className="button"
                    href="https://citypharmacy.medmeapp.ca/schedule/11221"
                    target="blank">
                    Get Vaccinated Before Your Trip
                  </a>
                  <p className="button white">
                    Book for typhoid & Paratyphoid Fever
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionFour">
        <div className="wrap">
          <div className="boxes">
            <div className="whiteBox">
              <p className="title">Yellow Fever</p>
              <p className="desc">
                Required for travel to parts of Africa and South America.
                Protection lasts about 10 years.
              </p>
            </div>
            <div className="whiteBox">
              <p className="title">Meningococcal Meningitis</p>
              <p className="desc">
                Recommended for sub-Saharan Africa. Highly contagious and
                dangerous.
              </p>
            </div>
            <div className="whiteBox">
              <p className="title">Japanese Encephalitis</p>
              <p className="desc">
                 Found in South and Southeast Asia. Vaccination lasts 1-2 years.
              </p>
            </div>
            <div className="whiteBox">
              <p className="title">European Tick-Borne Encephalitis</p>
              <p className="desc">
                Found in Central and Eastern Europe. Prevent tick bites for
                protection.
              </p>
            </div>
            <div className="whiteBox">
              <p className="title">Rabies</p>
              <p className="desc">
                Fatal disease transmitted by animal bites. Vaccination is
                essential for long-stay travellers.
              </p>
            </div>
            <div className="whiteBox">
              <p className="title">E. coli Vaccine</p>
              <p className="desc" style={{ maxWidth: "90%" }}>
                Oral vaccine is also effective against cholera. Protects against
                a common cause of travellers' diarrhea.
              </p>
            </div>
            <a href="https://wwwnc.cdc.gov/travel/destinations/list">
              <img src={Travel6} alt="link" />
            </a>
            <a href="https://wwwnc.cdc.gov/travel/diseases">
              <img src={Travel7} alt="link" />
            </a>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
    </div>
  );
};

export default TravelHealth;
