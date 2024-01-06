import React from 'react';
import {Container} from "@mui/material";
import './Product.scss'
import Step from "../../components/Step";
import LeftSideImage from "../../components/ProductComponents/LeftSideImage";
import RightSideInfo from "../../components/ProductComponents/RightSideInfo";
import ProductSummary from "../../components/ProductComponents/ProductSummary";
import FeaturedProducts from "../../components/ProductComponents/FeaturedProducts";


const Product = () => {
    const path = ["Categories", "Health & Wellness", "COVID-19 Essentials (45)", "Nora - Oil Premium"]
    return (
        <>
            <Container sx={{maxWidth: "1350px !important", paddingX: {xs: "20px", md: "auto"}}}>
                <div className='product-wrapper'>
                    <Step data={path}/>
                    <div className='product-detail-wrapper'>
                        <LeftSideImage/>
                        <RightSideInfo/>
                    </div>
                </div>
            </Container>
            <ProductSummary/>
            <FeaturedProducts />
        </>
    );
};

export default Product;