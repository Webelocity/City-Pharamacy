import React, {useState} from 'react';
import FeaturedProducts from "../../components/ProductComponents/FeaturedProducts";
import './Cart.scss'
import {Container} from "@mui/material";
import CartProducts from "../../components/CartComponents/CartProducts";
import OrderTotal from "../../components/CartComponents/OrderTotal";
import PaymentInfo from "../../components/CartComponents/PaymentInfo";
import CartStepper from "../../components/CartComponents/CartStepper";
import image from "../../assets/cart-image.svg";
import CartEmpty from "../../components/CartComponents/CartEmpty";

const Cart = () => {
    const [activeStep, setActiveStep] = useState(0);
    const products = [
        {name: "Nora - Oil Premium", image: image, color: "Pink", price: 24.99, originalPrice: 29.99, quantity: 2},
        {name: "Nora - Oil Premium", image: image, color: "Pink", price: 24.99, originalPrice: 29.99, quantity: 2},
        {name: "Nora - Oil Premium", image: image, color: "Pink", price: 24.99, originalPrice: 29.99, quantity: 2},
    ]

    return (
        <>
            <div className='cart-wrapper'>
                <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "20px", md: "0px"}}}>
                    <div className='cart'>
                        <CartStepper activeStep={activeStep}/>
                        {products.length < 1 ?
                            <CartEmpty />
                            :
                            <div className='cart-order'>
                                {activeStep === 0 ? <CartProducts products={products}/> : <PaymentInfo/>}
                                <OrderTotal activeStep={activeStep} setActiveStep={setActiveStep}/>
                            </div>
                        }
                    </div>
                </Container>
            </div>
            <FeaturedProducts/>
        </>
    );
};

export default Cart;