import React, {useState} from 'react';
import SinglePaymentMethod from "./SinglePaymentMethod";
import payment_photo from '../../assets/image 46.svg'

const PaymentMethod = () => {
    const payments = [
        {
            name: "Visa",
            default: true,
            payment_numbers: "**** **** **** 1234",
            card_holder: "Jane Doe",
            card_expire_date: "09/25",
            image:payment_photo
        },
        {
            name: "Visa",
            default: false,
            payment_numbers: "**** **** **** 5678",
            card_holder: "Jane Doe",
            card_expire_date: "09/25",
            image:payment_photo
        },
    ];

    const [checkedPayment, setCheckedPayment] = useState(payments[0].payment_numbers)
    return (
        <div className='personal-info'>
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" fill="white"/>
                    <path
                        d="M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z"
                        stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 10H22" stroke="black" stroke-width="2.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                Payment Method
            </h1>
            <div className='payment-method-selector'>
                {payments.map(payment =>
                    <SinglePaymentMethod payment={payment} checkedPayment={checkedPayment} setCheckedPayment={setCheckedPayment} />
                )}
            </div>
            <button>
                Add New Payment Method
            </button>
        </div>
    );
};

export default PaymentMethod;