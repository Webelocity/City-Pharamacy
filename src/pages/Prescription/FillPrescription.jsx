import React from "react";
import "./FillPrescription.scss";
import bottm from "../../assets/Circle Background bottm.png";
import bg from "../../assets/testingBG.png";
import Fill1 from "../../assets/Fill Prescription Online.png";
import Fill2 from "../../assets/Fill2.png";

const Fillprescription = () => {
  return (
    <div className="FillPrescriptionhWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">24/7 Prescription Upload</p>
            <p className="note">
              City Pharmacy simplifies your medication management. Just take a
              photo of your prescription and upload it through our secure
              system. We'll prepare your order and collect the original
              prescription upon delivery.
            </p>
            <div className="boxes">
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="35"
                  viewBox="0 0 34 35"
                  fill="none">
                  <path
                    d="M6.25694 8.17296L15.6227 17.5387M26.3264 21.5526L19.6366 28.2424M4.25 12.8558C4.25 14.6301 4.95482 16.3317 6.2094 17.5862C7.46399 18.8408 9.16557 19.5456 10.9398 19.5456C12.7141 19.5456 14.4156 18.8408 15.6702 17.5862C16.9248 16.3317 17.6296 14.6301 17.6296 12.8558C17.6296 11.0816 16.9248 9.38 15.6702 8.12542C14.4156 6.87083 12.7141 6.16602 10.9398 6.16602C9.16557 6.16602 7.46399 6.87083 6.2094 8.12542C4.95482 9.38 4.25 11.0816 4.25 12.8558ZM17.6296 24.8975C17.6296 26.3169 18.1935 27.6782 19.1972 28.6818C20.2008 29.6855 21.5621 30.2493 22.9815 30.2493C24.4009 30.2493 25.7621 29.6855 26.7658 28.6818C27.7695 27.6782 28.3333 26.3169 28.3333 24.8975C28.3333 23.4781 27.7695 22.1168 26.7658 21.1132C25.7621 20.1095 24.4009 19.5456 22.9815 19.5456C21.5621 19.5456 20.2008 20.1095 19.1972 21.1132C18.1935 22.1168 17.6296 23.4781 17.6296 24.8975Z"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="desc">
                  Available for most medications, excluding narcotics and
                  controlled substances.
                </p>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none">
                  <path
                    d="M20.168 4.75V10.4167C20.168 10.7924 20.3172 11.1527 20.5829 11.4184C20.8486 11.6841 21.2089 11.8333 21.5846 11.8333H27.2513M20.168 4.75H10.2513C9.49986 4.75 8.77919 5.04851 8.24783 5.57986C7.71648 6.11122 7.41797 6.83189 7.41797 7.58333V18.9167M20.168 4.75L27.2513 11.8333M27.2513 11.8333V27.4167C27.2513 28.1681 26.9528 28.8888 26.4214 29.4201C25.8901 29.9515 25.1694 30.25 24.418 30.25H16.6263M3.16797 27.4167H13.0846M13.0846 27.4167L8.83464 23.1667M13.0846 27.4167L8.83464 31.6667"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.694 20.684L13.5635 18.525H13.555V20.684H11.668V14.666H14.473C14.9603 14.666 15.3768 14.7538 15.7225 14.9295C16.0681 15.0995 16.326 15.3347 16.496 15.635C16.6716 15.9297 16.7595 16.264 16.7595 16.638C16.7595 17.0403 16.6461 17.3973 16.4195 17.709C16.1985 18.0207 15.8783 18.2445 15.459 18.3805L16.768 20.684H14.694ZM13.555 17.267H14.303C14.4843 17.267 14.6203 17.2273 14.711 17.148C14.8016 17.063 14.847 16.9327 14.847 16.757C14.847 16.5983 14.7988 16.4737 14.7025 16.383C14.6118 16.2923 14.4786 16.247 14.303 16.247H13.555V17.267Z"
                    fill="#219D50"
                  />
                  <path
                    d="M21.1958 20.684L20.0908 19.12L19.1728 20.684H17.0223L19.0028 17.5815L16.9373 14.666H19.1728L20.2353 16.1705L21.1193 14.666H23.2698L21.3233 17.709L23.4313 20.684H21.1958Z"
                    fill="#219D50"
                  />
                </svg>
                <p className="desc">
                  Original prescription required at delivery for verification.
                </p>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none">
                  <path
                    d="M21.9167 3.33398H13.4167C12.6343 3.33398 12 3.96825 12 4.75065V7.58398C12 8.36639 12.6343 9.00065 13.4167 9.00065H21.9167C22.6991 9.00065 23.3333 8.36639 23.3333 7.58398V4.75065C23.3333 3.96825 22.6991 3.33398 21.9167 3.33398Z"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.332 6.16602H26.1654C26.9168 6.16602 27.6375 6.46453 28.1688 6.99588C28.7002 7.52723 28.9987 8.2479 28.9987 8.99935V28.8327C28.9987 29.5841 28.7002 30.3048 28.1688 30.8362C27.6375 31.3675 26.9168 31.666 26.1654 31.666H9.16536C8.41392 31.666 7.69325 31.3675 7.1619 30.8362C6.63054 30.3048 6.33203 29.5841 6.33203 28.8327V8.99935C6.33203 8.2479 6.63054 7.52723 7.1619 6.99588C7.69325 6.46453 8.41392 6.16602 9.16536 6.16602H11.9987"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.416 20.3333L16.2493 23.1667L21.916 17.5"
                    stroke="#219D50"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="desc">
                  Service is subject to pharmacist approval.
                </p>
              </div>
            </div>
          </div>
          <img src={Fill1} alt="doctor and paitient" />
        </div>
        <img src={bottm} alt="background" className="bottomImage" />
        <img src={bottm} alt="dots" className="topImage" />
      </div>
      <div className="SectionTwo">
        <div className="wrap">
          <img src={Fill2} alt="image" />
          <div className="text">
            <p className="subheader">Digital Prescription. Real Care.</p>
            <p className="header">
              Your Medications, <br />
              One Click Away
            </p>
            <p className="note">
              With City Pharmacy's online prescription service, getting your
              medications has never been more convenient.
              <br /> <br />
               Submit your prescription digitally and receive your medications
              swiftly, ensuring your health needs are met without delay.
            </p>
            <button className="button">Fill Your Prescription Online</button>
          </div>
        </div>
        <img src={bg} alt="dots" className="bg" />
      </div>
    </div>
  );
};

export default Fillprescription;
