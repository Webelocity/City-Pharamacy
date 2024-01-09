import React from 'react';
import {IconButton, Modal} from "@mui/material";
import './AddEditAddressModal.scss'
import {MuiTelInput} from "mui-tel-input";

const AddEditAddressModal = ({
                                 open,
                                 handleClose,
                                 data,
                                 setData,
                                 shippingAddresses,
                                 addAddress,
                                 deleteAddress,
                                 editAddress,
                                 edit,
                                 billing
                             }) => {
    const handleChange = (event, phoneValue) => {
        let name;
        let value;
        if (event.target) {
            name = event.target.name;
            value = event.target.value;
        } else {
            name = "phone";
            value = phoneValue;
        }
        setData({...data, [name]: value, index: shippingAddresses.length})
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <form className='modal'>
                <div className='top-part'>
                    <h1>{billing ? `Add a billing address` : `Add a shipping address`}</h1>
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
                        <input value={data.first_name} onChange={handleChange} name="first_name"
                               placeholder='First Name'/>
                        <input value={data.last_name} onChange={handleChange} name="last_name" placeholder='Last Name'/>
                    </div>
                    <div className='inputs-row'>
                        <input onChange={handleChange} name="email" placeholder='E-mail Address'/>
                        <MuiTelInput
                            name="phone"
                            value={data.phone}
                            onChange={(value) => handleChange('', value)}
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
                        />
                    </div>
                    <div className='inputs-row'>
                        <input value={data.country} onChange={handleChange} name="country"
                               placeholder='Country / Region'/>
                        <input value={data.province} onChange={handleChange} name="province" placeholder='Province'/>
                    </div>
                    <div className='inputs-row'>
                        <input value={data.town} onChange={handleChange} name="town" placeholder='Town / City'/>
                        <input value={data.postal_code} onChange={handleChange} name="postal_code"
                               placeholder='Postal Code'/>
                    </div>
                    <div className='inputs-row'>
                        <input value={data.street} onChange={handleChange} name="street"
                               placeholder='Street Address 1'/>
                        <input value={data.street2} onChange={handleChange} name="street2"
                               placeholder='Street Address 2'/>
                    </div>
                </div>
                <div className='buttons'>
                    {edit ? <>
                        <button onClick={editAddress}>Save Changes</button>
                        <button className='delete' onClick={deleteAddress}>Delete Address</button>
                    </> : <>
                        <button type="submit"
                                onClick={addAddress}>{billing ? `Add Billing Address` : `Add Shipping Address`}</button>
                        <button className='white' onClick={handleClose}>Cancel</button>
                    </>
                    }
                </div>
            </form>
        </Modal>
    );
};

export default AddEditAddressModal;