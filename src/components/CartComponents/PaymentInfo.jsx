import React, {useState} from 'react';
import './PaymentInfo.scss'
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import PaymentMethod from "./PaymentMethod";
import AddEditAddressModal from "./AddEditAddressModal";
import AddEditPaymentModal from "./AddEditPaymentModal";

const PaymentInfo = () => {
    const [personalInfo, setPersonalInfo] = useState({first_name: "", last_name: "", phone: "CA"});

    const handleChangePersonalInfo = (event, data) => {
        let name = '';
        let value = '';
        if (event?.target) {
            name = event.target.name;
            value = event.target.value;
        } else {
            name = data.name;
            value = data.value;
        }
        setPersonalInfo({...personalInfo, [name]: value})
    }

    return (
        <div className='payment-wrapper'>
            <PersonalInfo personalInfo={personalInfo} handleChange={handleChangePersonalInfo} />
            <AddressInfo />
            <PaymentMethod />
            <AddEditPaymentModal />
        </div>
    );
};

export default PaymentInfo;