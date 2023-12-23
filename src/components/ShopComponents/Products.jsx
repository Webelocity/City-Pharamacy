import React from 'react';
import './Products.scss'
import Filters from "./Filters";
import ProductsPerCategory from "./ProductsPerCategory";
import {Container, useMediaQuery} from "@mui/material";

const Products = () => {
    const matches = useMediaQuery('(max-width:1200px)');
    return (
        <div className='products_wrapper'>
            <Container sx={{maxWidth:"1440px !important", paddingX:{xs:"0px", md:"auto"}}}>
                <div className='inside-wrapper'>
                    {!matches && <Filters/>}
                    {matches &&
                        <div className='filter-for-mobile'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                     fill="none">
                                    <g clip-path="url(#clip0_2131_56416)">
                                        <path
                                            d="M4.5 1.82422L2.5 4.49089V13.8242C2.5 14.1778 2.64048 14.517 2.89052 14.767C3.14057 15.0171 3.47971 15.1576 3.83333 15.1576H13.1667C13.5203 15.1576 13.8594 15.0171 14.1095 14.767C14.3595 14.517 14.5 14.1778 14.5 13.8242V4.49089L12.5 1.82422H4.5Z"
                                            stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M2.5 4.49121H14.5" stroke="#1E1E1E" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M11.1667 7.1582C11.1667 7.86545 10.8858 8.54372 10.3857 9.04382C9.88556 9.54392 9.20728 9.82487 8.50004 9.82487C7.7928 9.82487 7.11452 9.54392 6.61442 9.04382C6.11433 8.54372 5.83337 7.86545 5.83337 7.1582"
                                            stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2131_56416">
                                            <rect width="16" height="16" fill="white"
                                                  transform="translate(0.5 0.491211)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Category
                            </button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                     fill="none">
                                    <g clip-path="url(#clip0_2131_56939)">
                                        <path d="M8.5 1.82422V15.1576" stroke="#1E1E1E" stroke-width="2"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path
                                            d="M11.8333 3.82422H6.83333C6.21449 3.82422 5.621 4.07005 5.18342 4.50764C4.74583 4.94522 4.5 5.53871 4.5 6.15755C4.5 6.77639 4.74583 7.36988 5.18342 7.80747C5.621 8.24505 6.21449 8.49089 6.83333 8.49089H10.1667C10.7855 8.49089 11.379 8.73672 11.8166 9.1743C12.2542 9.61189 12.5 10.2054 12.5 10.8242C12.5 11.4431 12.2542 12.0366 11.8166 12.4741C11.379 12.9117 10.7855 13.1576 10.1667 13.1576H4.5"
                                            stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2131_56939">
                                            <rect width="16" height="16" fill="white"
                                                  transform="translate(0.5 0.491211)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Price Range
                            </button>
                        </div>
                    }
                    <ProductsPerCategory/>
                </div>
            </Container>
        </div>
    );
};

export default Products;