import React from "react";
import Navbar from "./Navbar/Navbar";
import MobileNavBar from "./Navbar/Dropdown";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <MobileNavBar /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
