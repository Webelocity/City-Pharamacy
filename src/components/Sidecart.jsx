import React from "react";
import { Modal } from "@mui/material";
import "./Sidecart.scss";
import prod from "../assets/1.png";

const Sidecart = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <div className="Sidecartmodal">
        <div className="cart-wrap">
          <div className="title">
            <h1>Your Cart</h1>
            <div className="closing">
              <span className="count">4 Items</span>
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
          </div>
          <div className="CartItems">
            <div className="item">
              <img src={prod} alt="product" />
              <div className="data">
                <p className="name">Nora - Oil Premium</p>
                <div className="info">
                  <p className="price">$24.99</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none">
                    <path d="M1 1L7 7M7 1L1 7" stroke="black" />
                  </svg>
                  <div className="input">
                    <input type="text" placeholder="1" />
                    <div className="incbuttons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        viewBox="0 0 11 6"
                        fill="none">
                        <path
                          d="M9.5 5L5.5 1L1.5 5"
                          stroke="white"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        viewBox="0 0 11 6"
                        fill="none">
                        <path
                          d="M9.5 1L5.5 5L1.5 1"
                          stroke="white"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    className="delete">
                    <path
                      d="M1.875 4.25H13.125"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 4.25V13C11.875 13.625 11.25 14.25 10.625 14.25H4.375C3.75 14.25 3.125 13.625 3.125 13V4.25"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 4.25V3C5 2.375 5.625 1.75 6.25 1.75H8.75C9.375 1.75 10 2.375 10 3V4.25"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="item">
              <img src={prod} alt="product" />
              <div className="data">
                <p className="name">Nora - Oil Premium</p>
                <div className="info">
                  <p className="price">$24.99</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none">
                    <path d="M1 1L7 7M7 1L1 7" stroke="black" />
                  </svg>
                  <div className="input">
                    <input type="text" placeholder="1" />
                    <div className="incbuttons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        viewBox="0 0 11 6"
                        fill="none">
                        <path
                          d="M9.5 5L5.5 1L1.5 5"
                          stroke="white"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="9"
                        viewBox="0 0 11 6"
                        fill="none">
                        <path
                          d="M9.5 1L5.5 5L1.5 1"
                          stroke="white"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    className="delete">
                    <path
                      d="M1.875 4.25H13.125"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 4.25V13C11.875 13.625 11.25 14.25 10.625 14.25H4.375C3.75 14.25 3.125 13.625 3.125 13V4.25"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5 4.25V3C5 2.375 5.625 1.75 6.25 1.75H8.75C9.375 1.75 10 2.375 10 3V4.25"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="cost">
              <div className="field border">
                <p>Subtotal</p>
                <p>$139.00</p>
              </div>
              <div className="field border">
                <p>Shipping</p>
                <p>+$0.50</p>
              </div>
              <div className="field">
                <p>Total</p>
                <p>$139.50</p>
              </div>
            </div>
            <div className="discount">
              <input type="text" placeholder="Enter the discount code" />
              <button className="apply">Apply</button>
            </div>
            <button>
              {" "}
              Checkout{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none">
                <path
                  d="M6.5 12.5L10.5 8.5L6.5 4.5"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Sidecart;
