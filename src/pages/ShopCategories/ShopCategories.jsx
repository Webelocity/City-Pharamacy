import React from 'react';
import {Container, IconButton, InputAdornment, InputBase, useMediaQuery} from "@mui/material";
import './ShopCategories.scss'
import Filters from "../../components/ShopComponents/Filters";
import CategoryProducts from "../../components/ShopComponents/CategoryProducts";

const ShopCategories = () => {
    const matches = useMediaQuery('(max-width:1200px)');

    return (
        <div className='shop-category-wrapper'>
            <Container sx={{maxWidth: "1440px !important", paddingX: {xs: "0px !important", md: "auto"}}}>
                <div className='our-products-wrapper'>
                    <div className='top-part'>
                        <div className='categories-mobile'>
                            <p>Home</p>
                            <li className='green'><span>Categories</span></li>
                        </div>
                        <div className='search'>
                            <h1>Our Products</h1>
                            <InputBase
                                className='mui-register-password'
                                type='text'
                                placeholder='Search among products'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            edge="end"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 16 16"
                                                 fill="none">
                                                <path
                                                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                                    stroke="#616161" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                                <path d="M13.9996 13.9996L11.0996 11.0996" stroke="#616161"
                                                      stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        <div className='categories'>
                            <p>Home</p>
                            <li className='green'><span>Categories</span></li>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='filters-and-products-wrapper'>
                <Container sx={{maxWidth: "1440px !important", paddingX: {xs: "0px !important", md: "auto"}}}>
                    <div className='wrapper'>
                        {!matches && <Filters/>}
                        <CategoryProducts/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ShopCategories;