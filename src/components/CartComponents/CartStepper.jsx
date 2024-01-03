import React from 'react';
import './CartStepper.scss'
import {Step, StepLabel, Stepper} from "@mui/material";

const CartStepper = ({activeStep}) => {
    const steps = [
        'Cart',
        'Shipping &  Payment',
    ];
    return (
        <div className='cart-stepper-wrapper'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label === 'Cart' ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                 fill="none">
                                <g clip-path="url(#clip0_1579_184006)">
                                    <path
                                        d="M5.66732 15.5837C6.05852 15.5837 6.37565 15.2665 6.37565 14.8753C6.37565 14.4841 6.05852 14.167 5.66732 14.167C5.27612 14.167 4.95898 14.4841 4.95898 14.8753C4.95898 15.2665 5.27612 15.5837 5.66732 15.5837Z"
                                        stroke="#219D50" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M13.4583 15.5837C13.8495 15.5837 14.1667 15.2665 14.1667 14.8753C14.1667 14.4841 13.8495 14.167 13.4583 14.167C13.0671 14.167 12.75 14.4841 12.75 14.8753C12.75 15.2665 13.0671 15.5837 13.4583 15.5837Z"
                                        stroke="#219D50" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M1.45117 1.45215H2.86784L4.75201 10.2496C4.82112 10.5718 5.0004 10.8599 5.25897 11.0641C5.51754 11.2684 5.83923 11.3761 6.16867 11.3688H13.0962C13.4186 11.3683 13.7312 11.2578 13.9823 11.0556C14.2335 10.8534 14.4081 10.5716 14.4774 10.2567L15.6462 4.99382H3.62576"
                                        stroke="#219D50" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1579_184006">
                                        <rect width="17" height="17" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                 fill="none">
                                <path
                                    d="M14.166 3.54199H2.83268C2.05028 3.54199 1.41602 4.17626 1.41602 4.95866V12.042C1.41602 12.8244 2.05028 13.4587 2.83268 13.4587H14.166C14.9484 13.4587 15.5827 12.8244 15.5827 12.042V4.95866C15.5827 4.17626 14.9484 3.54199 14.166 3.54199Z"
                                    stroke={activeStep === 1 ? '#219D50' : '#B6B7C3'} stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.41602 7.08301H15.5827" stroke={activeStep === 1 ? '#219D50' : '#B6B7C3'}
                                      stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>} {label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default CartStepper;