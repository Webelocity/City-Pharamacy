import React from 'react';
import {IconButton, Modal} from "@mui/material";
import './AddEditAddressModal.scss'
import {MuiTelInput} from "mui-tel-input";

const AddEditAddressModal = ({open, handleClose}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <div className='modal'>
                <div className='top-part'>
                    <h1>Add a shipping address</h1>
                    <IconButton onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                            <path d="M27.9961 12.5L11.9961 28.5005" stroke="#979797" stroke-width="1.28573"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9961 12.5L27.9961 28.5005" stroke="#979797" stroke-width="1.28573"
                                  stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </IconButton>
                </div>
                <div className='inputs-wrapper'>
                    <div className='inputs-row'>
                        <input placeholder='First Name'/>
                        <input placeholder='Last Name'/>
                    </div>
                    <div className='inputs-row'>
                        <input placeholder='E-mail Address'/>
                        <MuiTelInput
                            className='no-border-input'
                            sx={{width: "56%", "& fieldset": {borderColor: '#DEDEDE !important'},}}
                            InputLabelProps={{
                                sx: {
                                    color: "#616161",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                },
                            }}
                            InputProps={{
                                sx: {
                                    borderColor: '#DEDEDE',
                                    '&:hover fieldset': {
                                        border: '1px solid #DEDEDE !important',
                                    },
                                    '&:focus-within fieldset, &:focus-visible fieldset': {
                                        border: '1px solid #00588F !important',
                                        boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(32, 66, 137, 0.10)"
                                    },
                                },
                            }}
                            defaultCountry="CA"
                            // value={personalInfo.phone}
                            // onChange={(value) => handleChange(null, {name:"phone", value})}
                        />
                    </div>
                    <div className='inputs-row'>
                        <input placeholder='Country / Region'/>
                        <input placeholder='Province'/>
                    </div>
                    <div className='inputs-row'>
                        <input placeholder='Town / City'/>
                        <input placeholder='Postal Code'/>
                    </div>
                    <div className='inputs-row'>
                        <input placeholder='Street Address 1'/>
                        <input placeholder='Street Address 2'/>
                    </div>
                </div>
                <div className='buttons'>
                    <button>Add Shipping Address</button>
                    <button className='white' onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default AddEditAddressModal;