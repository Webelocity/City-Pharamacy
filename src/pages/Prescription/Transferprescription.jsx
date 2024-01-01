import React from "react";
import "./Transferprescription.scss";
import bottm from "../../assets/Circle Background bottm.png";
import bg from "../../assets/testingBG.png";
import transfer1 from "../../assets/transfer2.png";
import transfer2 from "../../assets/transfer2.png";

const Transferprescription = () => {
  return (
    <div className="TransferprescriptionWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              Switch to City Pharmacy <br /> for Premium Care
            </p>
            <p className="note">
              Experience the ease of our streamlined processes, enjoy timely
              prescription refills, and benefit from complimentary delivery
              across the GTA.
            </p>
            <p className="greennote">
              Transitioning to City Pharmacy is effortless.
            </p>
          </div>
          <img src={transfer1} alt="doctor and paitient" />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={bottm} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={transfer2} alt="image" />
          <div className="text">
            <p className="subheader">Transfer to City Pharmacy Today</p>
            <p className="header">
              Experience the DifferenceYour Medications, <br />
              One Click Away
            </p>
            <p className="note">Choose us for a premium pharmacy experience.</p>
            <button className="button">Transfer Your Prescription Today</button>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
    </div>
  );
};

export default Transferprescription;
