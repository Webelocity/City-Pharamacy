import React from 'react';
import './OrderTotal.scss'
import {Divider} from "@mui/material";

const OrderTotal = () => {
    return (
        <div className='order-total'>
            <h1>Order Summary</h1>
            <div className='details'>
                <div className='details-info'>
                    <p>Subtotal</p>
                    <p className='stroke'>--------------------------</p>
                    <p>$139.00</p>
                </div>
                <div className='details-info'>
                    <p>Shipping cost</p>
                    <p className='stroke'>--------------------------</p>
                    <p>+$0.50</p>
                </div>
                <div className='details-info'>
                    <p>Taxes</p>
                    <p className='stroke'>--------------------------</p>
                    <p>+$0.50</p>
                </div>
                <div className='details-info'>
                    <p>Coupon</p>
                    <p className='stroke'>--------------------------</p>
                    <p>-$9.00</p>
                </div>
                <div className='details-info'>
                    <p>Discount</p>
                    <p className='stroke'>--------------------------</p>
                    <p>-$1.00</p>
                </div>
            </div>
            <Divider sx={{width: "100%", borderColor: "rgba(0, 0, 0, 0.05)"}}/>
            <div className='discount'>
                <h1>Discount Code</h1>
                <div style={{display:"flex", justifyContent:"space-between", width:"100%", gap:"10px"}}>
                    <input placeholder='Enter the discount code' />
                    <button>Apply</button>
                </div>
            </div>
            <Divider sx={{width: "100%", borderColor: "rgba(0, 0, 0, 0.05)"}}/>
            <div className='total-price'>
                <p>Total Price</p>
                <p className='stroke'>--------</p>
                <p>$129.98</p>
            </div>
            <button>Login | Sign Up</button>
        </div>
    );
};

export default OrderTotal;