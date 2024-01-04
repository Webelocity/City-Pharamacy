import React, {useEffect, useState} from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {useLocation} from "react-router-dom";
import LoginSignUpModal from "../LoginSignUpModal";

const Layout = ({children}) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <LoginSignUpModal type='login'/>
            <Navbar/>
            {/* <MobileNavBar /> */}
            {children}
            <Footer/>
        </>
    );
};

export default Layout;
