import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import "./Appointment.scss";
import calendly from "../assets/calendly.png";

const Appointment = ({ open, handleClose }) => {
  const [disabled, setDisabled] = useState(true);
  const isValidEmailSch = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const [isvalidEmail, setIsValidEmail] = useState(true);

  const [Booking, setBooking] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...Booking, [name]: value });
    if (name === "email") {
      if (value.match(isValidEmailSch)) {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    }
    console.log(Booking);
  };

  useEffect(() => {
    const validate = () => {
      if (
        Booking.first_name &&
        Booking.last_name &&
        Booking.email &&
        Booking.phone &&
        Booking.service &&
        Booking.message &&
        isvalidEmail
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    validate();
  }, [Booking, isvalidEmail]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div className="modal">
        <div className="form-wrap">
          <div className="title">
            <h1>Book an Appointment Form</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              onClick={handleClose}>
              <path
                d="M27.9961 12L11.9961 28.0005"
                stroke="#979797"
                stroke-width="1.28573"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9961 12L27.9961 28.0005"
                stroke="#979797"
                stroke-width="1.28573"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <p className="desc">
            Please fill out the appointment form with your details and
            preferences. Our dedicated team will review your request and contact
            you soon to confirm your appointment. <br />
            We look forward to serving you!
          </p>
          <div className="form">
            <p className="head">Personal Information:</p>
            <div className="fieldswrap">
              <div className="horizontalFields">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  className="short"
                  value={Booking.first_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  className="short"
                  value={Booking.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="horizontalFields">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  value={Booking.phone}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="short"
                  value={Booking.email}
                  onChange={handleChange}
                />
              </div>
              <select
                name="service"
                id="service"
                value={Booking.service}
                onChange={handleChange}>
                <option value="">
                  Please select the service you wish to book an appointment for
                </option>
                <option value="Vitamin_D_test">Vitamin D test</option>
                <option value="Travel_Consultation">
                  Pre-travel Consultation
                </option>
                <option value="Book_a_fittin">
                  Book a fitting (compression stocking)
                </option>
                <option value="Contact_form">Contact form</option>
                <option value="Medication_management">
                  Medication Management
                </option>
                <option value="Smoke_cessation">Smoke Cessation</option>
                <option value="Medication_review">Medication Review</option>
              </select>
              <textarea
                type="textarea"
                name="message"
                id="Message"
                placeholder="Additional Information or Requests
                (Include any specific requirements or questions you may have)"
                value={Booking.message}
                onChange={handleChange}
              />
            </div>
            <div className="calendly">
              <p className="note">
                We will direct you to Calendly, where you can easily schedule
                your preferred appointment date:
              </p>
              <img src={calendly} alt="calendly" />
            </div>
          </div>
          <div className="buttons">
            <button
              disabled={disabled}
              onClick={() => {
                window.open(
                  "https://calendly.com/tech-webelocity/30min?month=2024-01",
                  "_blank"
                );
              }}>
              Set Appointment Date
            </button>
            <button className="white-button" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Appointment;
