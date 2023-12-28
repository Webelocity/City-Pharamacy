import React from 'react';
import './CartProducts.scss'
import CartProduct from "./CartProduct";
import {Divider} from "@mui/material";
import image from '../../assets/cart-image.svg'

const products = [
    {name: "Nora - Oil Premium", image: image, color: "Pink", price: 24.99, originalPrice: 29.99, quantity: 2},
    {name: "Nora - Oil Premium", image: image, color: "Pink", price: 24.99, originalPrice: 29.99, quantity: 2},
    {name: "Nora - Oil Premium", image: image, color: "Pink", price: 24.99, originalPrice: 29.99, quantity: 2},
]

const CartProducts = () => {
    return (
        <div className='cart-products'>
            <div className='top-part'>
                <div className='cart-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect width="24" height="24" fill="white"/>
                        <path
                            d="M8 22C8.55228 22 9 21.5523 9 21C9 20.4477 8.55228 20 8 20C7.44772 20 7 20.4477 7 21C7 21.5523 7.44772 22 8 22Z"
                            stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M19 22C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20C18.4477 20 18 20.4477 18 21C18 21.5523 18.4477 22 19 22Z"
                            stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M2.05078 2.0498H4.05078L6.71078 14.4698C6.80836 14.9247 7.06145 15.3313 7.42649 15.6197C7.79153 15.908 8.24569 16.0602 8.71078 16.0498H18.4908C18.946 16.0491 19.3873 15.8931 19.7418 15.6076C20.0964 15.3222 20.3429 14.9243 20.4408 14.4798L22.0908 7.0498H5.12078"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Cart</p>
                </div>
                <p>4 Items</p>
            </div>
            <div className='products'>
                {products.map((product, index) =>
                    <>
                        <CartProduct data={product}/>
                        {index !== products.length - 1 &&
                            <Divider sx={{width: "100%", borderColor: "rgba(0, 0, 0, 0.05)"}}/>
                        }
                    </>
                )}
            </div>
        </div>
    );
};

export default CartProducts;