import React from 'react';
import {IconButton} from "@mui/material";
import CityCheckbox from "../CityCheckbox";

const SinglePaymentMethod = ({payment, checkedPayment, setCheckedPayment, onEditPayment}) => {

    const checked = payment.card_numbers === checkedPayment;


    return (
        <div className={`single-payment-method ${checked && 'checked'}`}
             onClick={() => setCheckedPayment(payment.card_numbers)}>
            <CityCheckbox checked={checked}/>
            <div className='payment-info'>
                <div className='payment-name'>
                    <div className='title'>
                        <img src={payment.payment_image} alt={payment.card_holder}/>
                        <div className='name'>
                            <div className='n'>
                                {payment.default &&
                                    <p className='default'>Default</p>
                                }
                            </div>
                            <IconButton sx={{padding: '10px'}} onClick={(event) => onEditPayment(event, payment)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <g clip-path="url(#clip0_1579_184400)">
                                        <path d="M15 1.66699L18.3333 5.00033" stroke="#219D50" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M6.24935 17.0837L15.8327 7.50033L12.4993 4.16699L2.91602 13.7503L1.66602 18.3337L6.24935 17.0837Z"
                                            stroke="#219D50" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1579_184400">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <h1>**** **** **** {payment.card_numbers.slice(-4)}</h1>
                <div className='card_holder'>
                    <p>{payment.card_holder}</p>
                    <p>{payment.card_month}/{payment.card_year}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePaymentMethod;