import React, {useState} from 'react';
import Address from "./Address";
import {Divider} from "@mui/material";
import AddEditAddressModal from "./AddEditAddressModal";

const AddressInfo = () => {
    const [shippingAddresses, setShippingAddresses] = useState([{
        index: 0,
        first_name: "Sarah",
        last_name: "Logan",
        email: "sarahlogan@gmail.com",
        phone: "+1 230 23 23",
        default: true,
        street: "789 Bay Street",
        street2: "",
        town: "Toronto",
        postal_code: "M5V 1Z4",
        province: "Ontario",
        country: "Canada",
        country_alpha_code: "CA"
    }]);
    const [billingAddresses, setBillingAddresses] = useState([{
        index: 0,
        first_name: "Sarah",
        last_name: "Logan",
        email: "sarahlogan@gmail.com",
        phone: "+1 230 23 23",
        default: true,
        street: "789 Bay Street",
        town: "Toronto",
        postal_code: "M5V 1Z4",
        province: "Ontario",
        country: "Canada",
        country_alpha_code: "CA"
    }]);
    const [checkedAddress, setCheckedAddress] = useState(shippingAddresses[0]?.index);
    const [checkedBillingAddress, setCheckedBillingAddress] = useState(billingAddresses[0]?.index);
    const [openModal, setOpenModal] = useState(false);
    const [edit, setEdit] = useState(false);
    const [billing, setBilling] = useState(false);
    const [data, setData] = useState({
        index: 0,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        default: false,
        street: "",
        street2: "",
        town: "",
        postal_code: "",
        province: "",
        country: "",
        country_alpha_code: ""
    });

    const addAddress = (event) => {
        event.preventDefault();
        if (data) {
            if (billing) {
                setBillingAddresses([...billingAddresses, data])
            } else setShippingAddresses([...shippingAddresses, data]);
        }
        setOpenModal(false);
    }

    const onEditAddress = (event, address, isBilling) => {
        event.stopPropagation();
        setData(address);
        setOpenModal(true)
        if (isBilling) {
            setBilling(true)
        }
    }

    const editAddress = (event) => {
        event.preventDefault();
        setEdit(true);
        if (billing) {
            setBillingAddresses(prevState => prevState.map(address => {
                if (address.index === data.index - 1) {
                    return {...data, index: address.index}
                } else return address
            }));
        } else {
            setShippingAddresses(prevState => prevState.map(address => {
                if (address.index === data.index - 1) {
                    return {...data, index: address.index}
                } else return address
            }));
        }
        setOpenModal(false);
        setData({
            index: 0,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            default: false,
            street: "",
            street2: "",
            town: "",
            postal_code: "",
            province: "",
            country: "",
            country_alpha_code: ""
        });
        setEdit(false)
    }

    const handleDeleteAddress = (event) => {
        event.preventDefault();
        if (billing) {
            setBillingAddresses(prevState => prevState.filter(address => {
                return address.first_name !== (data.first_name)
            }));
        } else
            setShippingAddresses(prevState => prevState.filter(address => {
                return address.first_name !== (data.first_name)
            }));
        setOpenModal(false);
        setData({
            index: 0,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            default: false,
            street: "",
            street2: "",
            town: "",
            postal_code: "",
            province: "",
            country: "",
            country_alpha_code: ""
        });
        setEdit(false)
    }

    const handleCloseModal = () => {
        setOpenModal(false);
        setData({
            index: 0,
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            default: false,
            street: "",
            street2: "",
            town: "",
            postal_code: "",
            province: "",
            country: "",
            country_alpha_code: ""
        });
        setEdit(false)
    }


    return (
        <>
            <AddEditAddressModal open={openModal} handleClose={handleCloseModal}
                                 shippingAddresses={shippingAddresses} data={data} edit={edit}
                                 setData={setData} addAddress={addAddress} editAddress={editAddress}
                                 deleteAddress={handleDeleteAddress} billing={billing}/>
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
                        {shippingAddresses?.map(address =>
                            <Address address={address} checkedAddress={checkedAddress}
                                     setCheckedAddress={setCheckedAddress} onEditAddress={onEditAddress}
                                     setEdit={setEdit}/>
                        )}
                    </div>
                    <button onClick={() => {
                        setOpenModal(true);
                        setBilling(false)
                    }}>Add New Shipping Address
                    </button>
                </div>
                <Divider sx={{width: "100%"}}/>
                <div className='shipping-address'>
                    <p>Billing address</p>
                    <div className='info'>
                        {billingAddresses?.map(address =>
                            <Address address={address} checkedAddress={checkedBillingAddress}
                                     setCheckedAddress={setCheckedBillingAddress} onEditAddress={onEditAddress}
                                     setEdit={setEdit} isBilling={true}/>
                        )}
                    </div>
                    <button onClick={() => {
                        setOpenModal(true);
                        setBilling(true)
                    }}>Add New Billing Address
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddressInfo;