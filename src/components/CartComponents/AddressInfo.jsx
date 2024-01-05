import React, {useState} from 'react';
import Address from "./Address";
import {Divider} from "@mui/material";
import AddEditAddressModal from "./AddEditAddressModal";

const AddressInfo = () => {
    const ShippingAddresses = [{
        name: "Shipping Address Name",
        default: true,
        address: "123 Main Street, Anytown, CA 12345, United States"
    }, {
        name: "Shipping Address Name 2",
        default: false,
        address: "123 Main Street, Anytown, CA 12345, United States 2"
    }];
    const BillingAddress = [{
        name: "Billing Address Name",
        default: true,
        address: "123 Main Street, Anytown, CA 12345, United States"
    }];
    const [checkedAddress, setCheckedAddress] = useState(ShippingAddresses[0].name);
    const [checkedBillingAddress, setCheckedBillingAddress] = useState(BillingAddress[0].name);
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <AddEditAddressModal open={openModal} handleClose={() => setOpenModal(false)}/>
            <div className='personal-info'>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" fill="white"/>
                        <path d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z" stroke="black" stroke-width="2.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 3V18" stroke="black" stroke-width="2.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M15 6V21" stroke="black" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    Address
                </h1>
                <div className='shipping-address'>
                    <p>Shipping address</p>
                    <div className='info'>
                        {ShippingAddresses.map(address =>
                            <Address address={address} checkedAddress={checkedAddress}
                                     setCheckedAddress={setCheckedAddress}/>
                        )}
                    </div>
                    <button onClick={() => setOpenModal(true)}>Add New Shipping Address</button>
                </div>
                <Divider sx={{width: "100%"}}/>
                <div className='shipping-address'>
                    <p>Billing address</p>
                    <div className='info'>
                        {BillingAddress.map(address =>
                            <Address address={address} checkedAddress={checkedBillingAddress}
                                     setCheckedAddress={setCheckedBillingAddress}/>
                        )}
                    </div>
                    <button onClick={() => setOpenModal(true)}>Add New Billing Address</button>
                </div>
            </div>
        </>
    );
};

export default AddressInfo;