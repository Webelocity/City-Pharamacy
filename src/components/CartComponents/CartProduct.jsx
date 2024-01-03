import React from 'react';
import './CartProduct.scss'
import {IconButton, useMediaQuery} from "@mui/material";

const CartProduct = ({data}) => {
    const matches = useMediaQuery('(max-width:1200px)')
    return (
        <div className='cart-product-wrapper'>
            <img src={data.image} alt={data.name}/>
            <div className='product-info'>
                <div className='name-price'>
                    <div className='name-price2'>
                        <p>{data.name}</p>
                        <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                            <p className='original-price'>{data.originalPrice}</p>
                            <p className='price'>{data.price}</p>
                        </div>
                    </div>
                    {matches &&
                        <IconButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                 fill="none">
                                <path
                                    d="M13.6134 3.55298C13.2789 3.21736 12.8815 2.95107 12.4439 2.76937C12.0064 2.58767 11.5372 2.49414 11.0634 2.49414C10.5896 2.49414 10.1204 2.58767 9.68284 2.76937C9.24526 2.95107 8.84784 3.21736 8.51339 3.55298L8.00006 4.07298L7.48672 3.55298C7.15227 3.21736 6.75486 2.95107 6.31727 2.76937C5.87968 2.58767 5.41053 2.49414 4.93672 2.49414C4.46291 2.49414 3.99376 2.58767 3.55618 2.76937C3.11859 2.95107 2.72118 3.21736 2.38672 3.55298C0.973391 4.96631 0.886724 7.35298 2.66672 9.16631L8.00006 14.4996L13.3334 9.16631C15.1134 7.35298 15.0267 4.96631 13.6134 3.55298Z"
                                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </IconButton>
                    }
                </div>
                <div className='color-quantity'>
                    <div className='color-quantity2'>
                        <div className='color'>
                            <p>{data.color}</p>
                            <div className='color-circle' style={{backgroundColor: data.color}}></div>
                        </div>
                        <div className='quantity'>
                            <button>
                                Add to Next Purchase
                            </button>
                            {!matches && <>
                                <div className='quantity-2'>
                                    <IconButton>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                             viewBox="0 0 32 33"
                                             fill="none">
                                            <path
                                                d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </IconButton>
                                    <p>2</p>
                                    <IconButton>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                             viewBox="0 0 32 33"
                                             fill="none">
                                            <path
                                                d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                                stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16 11.167V21.8337" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </IconButton>
                                </div>
                                <IconButton>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                         fill="none">
                                        <path
                                            d="M13.6134 3.55298C13.2789 3.21736 12.8815 2.95107 12.4439 2.76937C12.0064 2.58767 11.5372 2.49414 11.0634 2.49414C10.5896 2.49414 10.1204 2.58767 9.68284 2.76937C9.24526 2.95107 8.84784 3.21736 8.51339 3.55298L8.00006 4.07298L7.48672 3.55298C7.15227 3.21736 6.75486 2.95107 6.31727 2.76937C5.87968 2.58767 5.41053 2.49414 4.93672 2.49414C4.46291 2.49414 3.99376 2.58767 3.55618 2.76937C3.11859 2.95107 2.72118 3.21736 2.38672 3.55298C0.973391 4.96631 0.886724 7.35298 2.66672 9.16631L8.00006 14.4996L13.3334 9.16631C15.1134 7.35298 15.0267 4.96631 13.6134 3.55298Z"
                                            stroke="black" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                </IconButton>
                            </>}
                        </div>
                    </div>
                    {matches &&
                        <div className='quantity-2'>
                            <IconButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                     viewBox="0 0 32 33"
                                     fill="none">
                                    <path
                                        d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                        stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </IconButton>
                            <p>2</p>
                            <IconButton>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33"
                                     viewBox="0 0 32 33"
                                     fill="none">
                                    <path
                                        d="M16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z"
                                        stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 11.167V21.8337" stroke="black" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path d="M10.667 16.5H21.3337" stroke="black" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </IconButton>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CartProduct;