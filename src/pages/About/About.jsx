import React from "react";
import "./About.scss";
import nurse from "../../assets/aboutheader.png";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/shopbackground.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import bg from "../../assets/bg.png";
import pierre from "../../assets/pierreabout.png";

const About = () => {
  return (
    <div className="AboutWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              City Pharmacy <br />4 Decades of Dedicated Care
            </p>
            <p className="note">
              Where Tradition Meets Modern Health Solutions
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
          <div className="left">
            <img src={about2} alt="placeholder" className="first" />
            <img src={about3} alt="placeholder" className="second" />
            <img src={bg} alt="dots" className="bg" />
          </div>
          <div className="right">
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none">
                <path
                  d="M4 6.82812H16C18.1217 6.82813 20.1566 7.67098 21.6569 9.17127C23.1571 10.6716 24 12.7064 24 14.8281V42.8281C24 41.2368 23.3679 39.7107 22.2426 38.5855C21.1174 37.4603 19.5913 36.8281 18 36.8281H4V6.82812Z"
                  stroke="#219D50"
                  stroke-width="3.43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M44 6.82812H32C29.8783 6.82813 27.8434 7.67098 26.3431 9.17127C24.8429 10.6716 24 12.7064 24 14.8281V42.8281C24 41.2368 24.6321 39.7107 25.7574 38.5855C26.8826 37.4603 28.4087 36.8281 30 36.8281H44V6.82812Z"
                  stroke="#219D50"
                  stroke-width="3.43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text">
                <div className="uppersec">
                  <p className="title">Our Legacy</p>
                  <p className="side">For over 40 years</p>
                </div>
                <p className="note">
                  City Pharmacy has been a beacon of health in the Toronto
                  Danforth neighbourhood. As an independent pharmacy, our roots
                  run deep, and our commitment to personal care remains
                  unwavering.
                </p>
              </div>
            </div>
            <hr className="hr" />
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none">
                <path
                  d="M6.70215 45.0161V36.8672H14.8512"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M43.8286 19.9336C45.8562 30.7163 39.2578 41.4062 28.4846 44.2927C20.2392 46.502 11.8261 43.5301 6.70215 37.3727"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.17265 27.7211C0.145022 16.9384 6.74355 6.24863 17.5167 3.36197C25.7616 1.15277 34.174 4.12415 39.2981 10.2807"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.2986 2.64062V10.7897H31.1494"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8936 18.0778C18.8936 18.6172 18.9998 19.1513 19.2062 19.6496C19.4126 20.1479 19.7151 20.6007 20.0965 20.982C20.4779 21.3634 20.9307 21.6659 21.429 21.8724C21.9273 22.0788 22.4613 22.185 23.0007 22.185C23.5401 22.185 24.0741 22.0788 24.5724 21.8724C25.0707 21.6659 25.5235 21.3634 25.9049 20.982C26.2863 20.6007 26.5888 20.1479 26.7952 19.6496C27.0016 19.1513 27.1078 18.6172 27.1078 18.0778C27.1078 17.5385 27.0016 17.0044 26.7952 16.5061C26.5888 16.0078 26.2863 15.555 25.9049 15.1737C25.5235 14.7923 25.0707 14.4897 24.5724 14.2833C24.0741 14.0769 23.5401 13.9707 23.0007 13.9707C22.4613 13.9707 21.9273 14.0769 21.429 14.2833C20.9307 14.4897 20.4779 14.7923 20.0965 15.1737C19.7151 15.555 19.4126 16.0078 19.2062 16.5061C18.9998 17.0044 18.8936 17.5385 18.8936 18.0778Z"
                  stroke="#219D50"
                  stroke-width="3.75"
                />
                <path
                  d="M15.4697 32.0419C16.7373 29.1407 19.6321 27.1133 23.0005 27.1133C26.3689 27.1133 29.2637 29.1407 30.5313 32.0419"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                />
              </svg>
              <div className="text">
                <div className="uppersec">
                  <p className="title">Personalized Care</p>
                  <p className="side">Health Harmony</p>
                </div>
                <p className="note">
                  Our philosophy is simple: know our patients and cater to their
                  unique needs. When you walk through our doors, you're not just
                  a customer; you're part of our community. Expect to see
                  familiar faces ready to serve you with promptness and
                  efficiency.
                </p>
              </div>
            </div>
            <hr className="hr" />
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none">
                <path
                  d="M18.0711 39.8982C20.7931 39.8982 22.9997 37.6915 22.9997 34.9696C22.9997 32.2477 20.7931 30.041 18.0711 30.041C15.3492 30.041 13.1426 32.2477 13.1426 34.9696C13.1426 37.6915 15.3492 39.8982 18.0711 39.8982Z"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.64258 34.9707H13.1426"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23 34.9707H44.3571"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37.7852 28.3984L44.3566 34.9699L37.7852 41.5413"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0713 30.0419V2.11328"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.0713 2.11328L32.857 10.3276L18.0713 18.5419V2.11328Z"
                  stroke="#219D50"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text">
                <div className="uppersec">
                  <p className="title">Embracing the Future</p>
                  <p className="side">Modern Mission</p>
                </div>
                <p className="note">
                  While our foundation is built on tradition, we're not bound by
                  it. We're constantly evolving, leveraging the latest
                  technologies to bring our renowned personal service and care
                  right to your fingertips. Because at City Pharmacy, your
                  health is more than just our mission—it's our passion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={shopbackground} alt="dots" className="topImage" />
      </div>
      <div className="SectionThree">
        <div className="wrap">
          <div className="textbox">
            <p className="header">
              Pierre Nasralla: <br /> Pharmacist/Owner
            </p>
            <p className="subheader">Rooted in Tradition</p>
            <p className="note" style={{ marginBottom: "80px" }}>
              Pharmacy isn't just a profession for Pierre; it's a family legacy.
              As a third-generation pharmacist, he embodies a deep-rooted
              passion and expertise for the field. His foundational journey
              began at the University of Toronto, where he's been practicing
              since 2000.
            </p>
            <p className="header">
              Modern Expertise & <br /> Continuous Learning
            </p>
            <p className="note">
              Pierre's commitment to advancing his knowledge is unwavering. He
              holds a post-baccalaureate Doctor of Pharmacy from the University
              of Toronto and is certified in Travel Health by the International
              Society of Travel Medicine. Under his guidance, City Pharmacy
              seamlessly merges time-honoured values with contemporary
              proficiency.
            </p>
          </div>
          <img src={pierre} alt="doctor" style={{ marginBottom: "-40px" }} />
        </div>
      </div>
      <div className="SectionFour">
        <div className="wrap">
          <div className="top">
            <p className="subheader">our team</p>
            <p className="header">
              Meet the Pulse of City Pharmacy: <br />
              Our Dedicated Team
            </p>
            <p className="note">
              Seasoned professionals dedicated to making your health journey
              personal and exceptional.
            </p>
          </div>
          <div className="bottom">
            <div className="box">
              <div className="text">
                <p className="title">Paula Glass </p>
                <p className="note">Pharmacy Assistant</p>
              </div>
            </div>
            <div className="box">
              <div className="text">
                <p className="title">Maryam Soheil</p>
                <p className="note">Pharmacist</p>
              </div>
            </div>
            <div className="box">
              <div className="text">
                <p className="title">Fatima Vadia </p>
                <p className="note">Pharmacy Technician</p>
              </div>
            </div>
            <div className="box">
              <div className="text">
                <p className="title">Toheebat (MoJi) Adesina </p>
                <p className="note">Pharmacy Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
