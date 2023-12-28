import React from 'react';
import './CartStepper.scss'
import {Step, StepLabel, Stepper} from "@mui/material";

const CartStepper = () => {
    const steps = [
        'Cart',
        'Shipping &  Payment',
    ];
    return (
        <div className='cart-stepper-wrapper'>
            <Stepper activeStep={0} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default CartStepper;