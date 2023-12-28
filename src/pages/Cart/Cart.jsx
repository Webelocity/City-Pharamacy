import React from 'react';
import FeaturedProducts from "../../components/ProductComponents/FeaturedProducts";
import './Cart.scss'
import {Container} from "@mui/material";
import CartStepper from "../../components/CartComponents/CartStepper";
import CartProducts from "../../components/CartComponents/CartProducts";
import OrderTotal from "../../components/CartComponents/OrderTotal";

const Cart = () => {
    return (
        <>
            <div className='cart-wrapper'>
                <Container sx={{maxWidth:"1350px !important", paddingX:{xs:"20px", md:"0px"}}}>
                    <div className='cart'>
                        <CartStepper />
                        <div className='cart-order'>
                            <CartProducts />
                            <OrderTotal />
                        </div>
                    </div>
                </Container>
            </div>
            <FeaturedProducts/>
        </>
    );
};

export default Cart;