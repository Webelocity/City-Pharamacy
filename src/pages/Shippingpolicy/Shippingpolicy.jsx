import React from "react";
import "./Shippingpolicy.scss";
import bottm from "../../assets/Circle Background bottm.png";
import shipping1 from "../../assets/shipping1.png";
import shipping2 from "../../assets/shipping2.png";

const Shippingpolicy = () => {
  return (
    <div className="ShippingpolicyWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <h1 className="header">Shipping & Returning Policy</h1>
          </div>
        </div>
        <img src={bottm} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <div className="boxes">
            <div className="box">
              <img src={shipping1} alt="image" style={{ zIndex: "3" }} />
              <p className="title">Shipping Policy</p>
              <p className="note">
                At City Pharmacy, we're committed to providing you with a
                seamless shopping experience, including the convenience of
                shipping. Please take a moment to review our shipping policy to
                understand how it works.
              </p>
              <p className="point">
                <span>1</span> Free Shipping Canada-Wide for Orders Over $75
              </p>
              <hr className="hr" />
              <p className="point">
                <span>2</span> Free Shipping for prescriptions anywhere in the
                Greater Toronto Area
              </p>
              <hr className="hr" />
              <p className="point">
                <span>3</span> Non-prescription items $5 in the GTA.
              </p>
            </div>
            <div className="box">
              <img src={shipping2} alt="image" style={{ zIndex: "3" }} />
              <p className="title">Returning Policy</p>
              <p className="note">
                At City Pharmacy, we value your satisfaction and want to ensure
                you have a positive shopping experience. Please take a moment to
                review our return policy to understand how returns and refunds
                work.
              </p>
              <p className="desc">
                Unopened, non-prescription items may be eligible for return for
                a refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shippingpolicy;
