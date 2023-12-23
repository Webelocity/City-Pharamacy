import React from 'react';
import './Shop.scss'
import OurProducts from "../../components/ShopComponents/OurProducts";
import Products from "../../components/ShopComponents/Products";
import {useMediaQuery} from "@mui/material";

const Shop = () => {
    return (
        <div className='shop-wrapper'>
            <OurProducts />
            <Products />
        </div>
    );
};

export default Shop;