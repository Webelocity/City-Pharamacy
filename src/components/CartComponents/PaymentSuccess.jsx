import React from 'react';
import './PaymentSuccess.scss'
import {Container} from "@mui/material";
import image1 from '../../assets/image 1.svg'

const PaymentSuccess = () => {
    return (
        <div style={{background: "#F8F8F8", paddingTop: "40px", paddingBottom: "40px"}}>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "20px", md: "0px"}}}>
                <div className='payment-success-wrapper'>
                    <div className='image'>
                        <img src={image1} alt='success-payment'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none">
                            <path
                                d="M39 7.3125C21.4957 7.3125 7.3125 21.4957 7.3125 39C7.3125 56.5043 21.4957 70.6875 39 70.6875C56.5043 70.6875 70.6875 56.5043 70.6875 39C70.6875 21.4957 56.5043 7.3125 39 7.3125ZM34.1098 50.2277C33.7441 50.5934 33.2262 50.898 32.7691 50.898C32.3121 50.898 31.7941 50.5781 31.4133 50.2125L22.882 41.6813L25.5938 38.9695L32.7844 46.1602L51.7969 27.0105L54.4629 29.768L34.1098 50.2277Z"
                                fill="#219D50"/>
                        </svg>
                    </div>
                    <div className='text-wrapper'>
                        <div className='order-id'>
                            <h1>Success!</h1>
                            <p>Order Id:27365199</p>
                        </div>
                        <p>
                            Thank you for choosing City Pharmacy, your order is confirmed, and we're committed to
                            delivering your health and wellness essentials with care.
                        </p>
                    </div>
                    <button>
                        Track your Purchase
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default PaymentSuccess;