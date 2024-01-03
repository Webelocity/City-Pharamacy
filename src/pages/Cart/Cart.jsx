import React, {useState} from 'react';
import FeaturedProducts from "../../components/ProductComponents/FeaturedProducts";
import './Cart.scss'
import {Container} from "@mui/material";
import CartStepper from "../../components/CartComponents/CartStepper";
import CartProducts from "../../components/CartComponents/CartProducts";
import OrderTotal from "../../components/CartComponents/OrderTotal";
import PaymentInfo from "../../components/CartComponents/PaymentInfo";

const Cart = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <>
            <div className='cart-wrapper'>
                <Container sx={{maxWidth:"1350px !important", paddingX:{xs:"20px", md:"0px"}}}>
                    <div className='cart'>
                        <CartStepper activeStep={activeStep} />
                        <div className='cart-order'>
                            {activeStep === 0 ? <CartProducts /> : <PaymentInfo />}
                            <OrderTotal activeStep={activeStep} setActiveStep={setActiveStep}/>
                        </div>
                    </div>
                </Container>
            </div>
            <FeaturedProducts/>
        </>
    );
};

export default Cart;