import React from "react";
import "./Transferprescription.scss";
import bottm from "../../assets/Circle Background bottm.png";
import bg from "../../assets/testingBG.png";
import refill1 from "../../assets/Prescription Transfer.png";
import refill2 from "../../assets/refill2.png";

const Refillprescription = () => {
  return (
    <div className="TransferprescriptionWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">Refill, Relax, Receive</p>
            <p className="note">
              Ensure uninterrupted treatment with City Pharmacy's hassle-free
              prescription refills. Submit your request, and we'll promptly
              prepare your medications.
            </p>
            <p className="greennote">
              With our free delivery, you'll never miss a dose again.
            </p>
          </div>
          <img src={refill1} alt="doctor and paitient" />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={bottm} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={refill2} alt="image" />
          <div className="text">
            <p className="subheader">Swift Prescription Refills</p>
            <p className="header">Stay on Track with Every Dose</p>
            <p className="note">
              Prioritize your health with timely medication access and enjoy the
              convenience of our free delivery service. Never compromise; always
              stay medicated.
            </p>
            <button className="button">Refill Your Prescriptions</button>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
    </div>
  );
};

export default Refillprescription;
