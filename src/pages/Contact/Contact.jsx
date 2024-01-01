import React, { useState, useEffect } from "react";
import "./Contact.scss";
import nurse from "../../assets/ContactImage.png";
import bottm from "../../assets/Circle Background bottm.png";
import shopbackground from "../../assets/shopbackground.png";
import ContactLast from "../../assets/ContactLast.png";
import mail from "../../assets/mailIcon.png";
// import GoogleMapReact from "google-map-react";

const Contact = () => {
  // const defaultProps = {
  //   center: { lat: 59.95, lng: 30.33 },
  //   zoom: 11,
  // };
  const [disabled, setDisabled] = useState(true);
  const [submit, setsubmit] = useState(false);
  const isValidEmailSch = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [isvalidEmail, setIsValidEmail] = useState(true);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
    if (name === "email") {
      if (value.match(isValidEmailSch)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }
    console.log(contact);
  };

  useEffect(() => {
    const validate = () => {
      if (
        contact.name &&
        contact.email &&
        contact.phone &&
        contact.message &&
        isvalidEmail
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    validate();
  }, [contact, isvalidEmail]);

  return (
    <div className="ContactWrapper">
      <div className="SectionOne">
        <div className="wrap">
          <div className="textbox">
            <p className="header">Reach Out to City Pharmacy</p>
            <p className="note">
              Your Health Queries, Feedback, or Just a Hello - We're Here to
              Listen.{" "}
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
          <div className="top">
            <p className="subheader">get in touch</p>
            <p className="header">Stay Connected with City Pharmacy</p>
          </div>
          <div className="bottom">
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none">
                <path
                  d="M26.6663 13.7819C26.6663 21.7819 15.9997 29.7819 15.9997 29.7819C15.9997 29.7819 5.33301 21.7819 5.33301 13.7819C5.33301 10.9529 6.45681 8.23982 8.4572 6.23943C10.4576 4.23904 13.1707 3.11523 15.9997 3.11523C18.8286 3.11523 21.5418 4.23904 23.5421 6.23943C25.5425 8.23982 26.6663 10.9529 26.6663 13.7819Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 17.7832C18.2091 17.7832 20 15.9923 20 13.7832C20 11.5741 18.2091 9.7832 16 9.7832C13.7909 9.7832 12 11.5741 12 13.7832C12 15.9923 13.7909 17.7832 16 17.7832Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text">
                <p className="title">Location </p>
                <p className="note">
                  238 Danforth Avenue, Toronto, <br />
                  ONM4K 1N4
                </p>
              </div>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M29.6667 3.11523L15 17.7819"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.6667 3.11523L20.3333 29.7819L15 17.7819L3 12.4486L29.6667 3.11523Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text">
                <p className="title">Communication Hub</p>
                <p className="note">
                  Phone: 416.469.1898 <br />
                  Fax: 416.469.5464
                  <br />
                  Email: info@citypharmacy.ca
                </p>
              </div>
            </div>
            <div className="box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none">
                <path
                  d="M16.6654 29.7819C24.0292 29.7819 29.9987 23.8124 29.9987 16.4486C29.9987 9.08477 24.0292 3.11523 16.6654 3.11523C9.30157 3.11523 3.33203 9.08477 3.33203 16.4486C3.33203 23.8124 9.30157 29.7819 16.6654 29.7819Z"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.666 8.44922V16.4492L21.9993 19.1159"
                  stroke="#219D50"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="text">
                <p className="title">Hours of Operation</p>
                <p className="note">
                  Monday to Friday: 10 am - 5 pm <br />
                  Saturday: 11 am - 4 pm <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SectionThree">
        <div className="wrap">
          {/* <GoogleMapReact
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}></GoogleMapReact> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11542.440972409517!2d-79.3744513!3d43.6770752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cd88a77b6b4f%3A0x2dea3daf6dd40f0c!2sCity%20Pharmacy%20Remedy&#39;sRx!5e0!3m2!1sen!2seg!4v1703774339196!5m2!1sen!2seg"
            width="900"
            height="600"
            allowfullscreen=""
            loading="lazy"></iframe>
          {submit ? (
            <div
              className="right"
              style={{ textAlign: "center", minWidth: "47%" }}>
              <img src={mail} alt="mail" />
              <p className="title">
                Your Message <br />
                Has Been Submitted!
              </p>
              <p className="desc">
                Thank you for reaching out. Our team is here to help you and
                will respond promptly.
              </p>
            </div>
          ) : (
            <div className="right">
              <p className="title">Reach Out for Expert Care</p>
              <p className="desc">
                We're committed to providing the best shopping and online
                experience. Please fill out the form, and our team will respond
                promptly.
              </p>
              <div className="horizontalFields">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name*"
                  className="short"
                  value={contact.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address*"
                  className="short"
                  value={contact.email}
                  onChange={handleChange}
                />
              </div>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                value={contact.phone}
                onChange={handleChange}
              />
              <textarea
                type="textarea"
                name="message"
                id="Message"
                placeholder="Message*"
                value={contact.message}
                onChange={handleChange}
              />
              <button
                className="button"
                onClick={() => setsubmit(true)}
                disabled={disabled}>
                Send Inquiry
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="SectionFour">
        <div className="wrap">
          <div className="left">
            <p className="header">
              Unwavering Dedication, <br /> Every Step of the Way
            </p>
            <p className="note">
              With over 40 years in Toronto Danforth, you're not just a
              customer; you're <br /> part of our story. Blending tradition with
              modern services, we value every interaction.
            </p>
            <p className="subheader">
              Reach out, and let's shape a healthier future together.
            </p>
          </div>
          <img
            src={ContactLast}
            alt="ContactLast"
            style={{ marginBottom: "-90px" }}
          />
        </div>
        <img src={shopbackground} alt="dots" className="bg" />
      </div>
    </div>
  );
};

export default Contact;
