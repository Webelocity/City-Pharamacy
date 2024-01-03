import React from 'react';
import CityInput from "../CItyInput";
import {MuiTelInput} from "mui-tel-input";

const PersonalInfo = ({handleChange, personalInfo}) => {

    return (
        <div className='personal-info'>
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="white"/>
                    <path
                        d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                        stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Personal Information
            </h1>
            <div className='information'>
                <div className='row'>
                    <CityInput label='First Name*'/>
                    <CityInput label='Last Name*'/>
                </div>
                <div className='row'>
                    <CityInput label='E-mail Address'/>
                    <MuiTelInput
                        InputLabelProps={{
                            sx: {
                                color: "#616161",
                                fontWeight: 400,
                                fontSize: "16px",
                            },
                        }}
                        InputProps={{
                            sx: {
                                '&:hover fieldset': {
                                    border: '1px solid #122146 !important',
                                },
                                '&:focus-within fieldset, &:focus-visible fieldset': {
                                    border: '1px solid #122146 !important',
                                    boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(32, 66, 137, 0.10)"
                                },
                            },
                        }}
                        fullWidth
                        defaultCountry="CA"
                        value={personalInfo.phone}
                        onChange={(value) => handleChange(null, {name:"phone", value})}/>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;