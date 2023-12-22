import React from 'react';
import LeftSide from "../../components/ForgetPasswordComponents/LeftSide";
import RightSide from "../../components/ForgetPasswordComponents/RightSide";
import './ForgetPassword.scss'

const ForgetPassword = () => {
    return (
        <div className='forget-password-wrapper'>
            <div className='forget-password'>
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    );
};

export default ForgetPassword;